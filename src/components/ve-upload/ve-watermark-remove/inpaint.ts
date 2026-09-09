/**
 * 去水印核心算法：基于样本块（exemplar）的内容识别式图像填充
 *
 * 思路：用户框选的水印区域 = 待填充区（未知），其余为源区（已知）。
 * 参考 Criminisi 等的“以样本块填充目标区域”思想：把源区中与待填块“已知部分”
 * 最相似的纹理块整块贴进待填区，由外向内逐层生长，从而把水印下方原本被盖住的
 * 背景纹理“长”回去。
 *
 * 实现顺序（性能考虑，避免大选区卡死）：
 *  - 先用多源 BFS 计算待填区每个像素到已知区域的“洋葱距离”；
 *  - 按距离从小到大单遍生长：每个仍待填的像素，从源区找最佳匹配块贴入；
 *  - 一次贴入会顺带填掉更内层的像素，因此总贴片次数 ≈ 待填面积 / 块面积；
 *  - 补丁半径、候选源数量按选区面积自适应。
 *  - 兜底：极少数残留像素用有界扩散填掉，保证函数必定返回。
 */

export interface Rect {
  x: number
  y: number
  width: number
  height: number
}

const toIndex = (x: number, y: number, width: number) => y * width + x

const inBounds = (x: number, y: number, width: number, height: number) =>
  x >= 0 && y >= 0 && x < width && y < height

const sq = (v: number) => v * v

/** 让出主线程一帧，避免长时间阻塞 UI */
const yieldToUI = () => new Promise<void>((resolve) => setTimeout(resolve))

interface Offsets {
  dx: number[]
  dy: number[]
  len: number
}

/** 生成半径为 R 的方形块像素偏移 */
const makeOffsets = (r: number): Offsets => {
  const dx: number[] = []
  const dy: number[] = []
  for (let y = -r; y <= r; y++) {
    for (let x = -r; x <= r; x++) {
      dx.push(x)
      dy.push(y)
    }
  }
  return {dx, dy, len: dx.length}
}

/** 依据选区面积选择补丁半径：越大补丁越大、贴片次数越少 */
const pickRadius = (area: number) => {
  if (area > 80000) return 5
  if (area > 12000) return 4
  return 3
}

/** 候选源数量：保证“候选数 × 待填数”的预算大致恒定，避免超大选区过慢 */
const candidateCount = (area: number) => Math.max(140, Math.min(480, Math.round(3e7 / area)))

/** mulberry32：确定性伪随机，保证相同输入得到相同结果 */
const makeRand = (seed: number) => {
  let a = seed | 0
  return () => {
    a = (a + 0x6d2b79f5) | 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

/**
 * 以样本块方式填充 mask 标记的区域（就地修改 data）
 * @param data   RGBA 像素数据
 * @param mask   1 = 待填充
 */
const exemplarInpaint = async (data: Uint8ClampedArray, mask: Uint8Array, width: number, height: number): Promise<void> => {
  const size = width * height

  const targetList: number[] = []
  for (let i = 0; i < size; i++) if (mask[i]) targetList.push(i)
  const area = targetList.length
  if (!area || area === size) return

  const R = pickRadius(area)
  const off = makeOffsets(R)
  const patchMax = off.len

  // 状态：1 = 待填，0 = 已知（已填的也归为 0，作为后续候选源）
  const state = new Uint8Array(mask)

  // ---------- 洋葱距离：多源 BFS 求每个待填像素到已知区域的距离 ----------
  const dist = new Int32Array(size)
  dist.fill(-1)
  const queueHead: number[] = []
  for (const i of targetList) {
    const x = i % width
    const y = (i / width) | 0
    for (let j = -1; j <= 1; j++) {
      for (let k = -1; k <= 1; k++) {
        if (!j && !k) continue
        const nx = x + k
        const ny = y + j
        if (!inBounds(nx, ny, width, height)) continue
        if (!mask[toIndex(nx, ny, width)]) {
          dist[i] = 1
          queueHead.push(i)
          j = 2
          break
        }
      }
    }
  }
  // BFS 由外向内传播
  let qi = 0
  while (qi < queueHead.length) {
    const i = queueHead[qi++]
    const d = dist[i] + 1
    const x = i % width
    const y = (i / width) | 0
    for (let j = -1; j <= 1; j++) {
      for (let k = -1; k <= 1; k++) {
        if (!j && !k) continue
        const nx = x + k
        const ny = y + j
        if (!inBounds(nx, ny, width, height)) continue
        const ni = toIndex(nx, ny, width)
        if (mask[ni] && dist[ni] < 0) {
          dist[ni] = d
          queueHead.push(ni)
        }
      }
    }
  }
  // 按距离升序（外 → 内）排序
  targetList.sort((a, b) => dist[a] - dist[b])

  // ---------- 候选与匹配 ----------
  const rand = makeRand(0x9e3779b9)
  const sampleCandidates = (x: number, y: number, count: number): number[] => {
    const res: number[] = []
    const cx = Math.min(Math.max(x, 0), width - 1)
    const cy = Math.min(Math.max(y, 0), height - 1)
    const localR = Math.max(R + 4, 64)
    const x0 = Math.max(0, cx - localR)
    const x1 = Math.min(width, cx + localR + 1)
    const y0 = Math.max(0, cy - localR)
    const y1 = Math.min(height, cy + localR + 1)
    for (let n = 0; n < count; n++) {
      if (n % 2 === 0) {
        const px = x0 + ((rand() * (x1 - x0)) | 0)
        const py = y0 + ((rand() * (y1 - y0)) | 0)
        res.push(toIndex(px, py, width))
      } else {
        res.push((rand() * size) | 0)
      }
    }
    return res
  }

  /** 候选块与待填块“已知部分”的归一化误差 */
  const patchDist = (tx: number, ty: number, sx: number, sy: number): {err: number; used: number} => {
    let err = 0
    let used = 0
    for (let k = 0; k < off.len; k++) {
      const dx = off.dx[k]
      const dy = off.dy[k]
      const px = tx + dx
      const py = ty + dy
      const qx = sx + dx
      const qy = sy + dy
      if (!inBounds(px, py, width, height) || !inBounds(qx, qy, width, height)) continue
      const pi = toIndex(px, py, width)
      if (state[pi]) continue
      const po = pi * 4
      const qo = toIndex(qx, qy, width) * 4
      err += sq(data[po] - data[qo]) + sq(data[po + 1] - data[qo + 1]) + sq(data[po + 2] - data[qo + 2])
      used++
    }
    return {err: used ? err / used : Infinity, used}
  }

  /** 为待填块中心 (tx,ty) 找最佳源块中心（返回源中心下标或 -1） */
  const bestSource = (tx: number, ty: number): number => {
    const cands = sampleCandidates(tx, ty, candidateCount(area))
    let bestIdx = -1
    let bestScore = Infinity
    for (const ci of cands) {
      if (state[ci]) continue
      const sx = ci % width
      const sy = (ci / width) | 0
      if (sx < R || sy < R || sx >= width - R || sy >= height - R) continue
      const {err, used} = patchDist(tx, ty, sx, sy)
      if (used < Math.max(2, patchMax / 5)) continue
      if (err < bestScore) {
        bestScore = err
        bestIdx = ci
      }
    }
    return bestIdx
  }

  /** 把源块贴到待填块中心，返回新填充像素个数 */
  const copyPatch = (ti: number, si: number): number => {
    const tx = ti % width
    const ty = (ti / width) | 0
    const sx = si % width
    const sy = (si / width) | 0
    let filled = 0
    for (let k = 0; k < off.len; k++) {
      const dx = off.dx[k]
      const dy = off.dy[k]
      const px = tx + dx
      const py = ty + dy
      const qx = sx + dx
      const qy = sy + dy
      if (!inBounds(px, py, width, height) || !inBounds(qx, qy, width, height)) continue
      const pi = toIndex(px, py, width)
      if (state[pi]) {
        const po = pi * 4
        const qo = toIndex(qx, qy, width) * 4
        data[po] = data[qo]
        data[po + 1] = data[qo + 1]
        data[po + 2] = data[qo + 2]
        data[po + 3] = data[qo + 3]
        state[pi] = 0
        filled++
      }
    }
    return filled
  }

  // ---------- 主填充：按洋葱距离单遍生长（时间分片，避免卡 UI） ----------
  let remaining = area
  let safety = 0
  const maxPatchSteps = area + 1024
  let lastYield = Date.now()
  for (let a = 0; a < targetList.length && remaining > 0 && safety < maxPatchSteps; a++) {
    if (Date.now() - lastYield > 40) {
      await yieldToUI()
      lastYield = Date.now()
    }
    const i = targetList[a]
    if (state[i]) {
      // 该像素仍待填：找源并整块贴入（会顺带填掉更内层像素）
      const x = i % width
      const y = (i / width) | 0
      const si = bestSource(x, y)
      if (si >= 0) {
        const filled = copyPatch(i, si)
        remaining -= filled
      } else {
        // 找不到候选源（极端情况）：标记完成避免死循环
        state[i] = 0
        remaining--
      }
    }
    safety++
  }

  // ---------- 兜底：极少数残留像素用有界扩散填掉，保证函数必定返回 ----------
  if (remaining > 0) {
    let guard = 0
    const maxGuard = 64
    lastYield = Date.now()
    while (remaining > 0 && guard < maxGuard) {
      if (Date.now() - lastYield > 40) {
        await yieldToUI()
        lastYield = Date.now()
      }
      let progress = 0
      for (const i of targetList) {
        if (!state[i]) continue
        const x = i % width
        const y = (i / width) | 0
        let r = 0
        let g = 0
        let b = 0
        let n = 0
        for (let j = -1; j <= 1; j++) {
          for (let k = -1; k <= 1; k++) {
            if (!j && !k) continue
            const nx = x + k
            const ny = y + j
            if (!inBounds(nx, ny, width, height)) continue
            const ni = toIndex(nx, ny, width)
            if (state[ni]) continue
            const o = ni * 4
            r += data[o]
            g += data[o + 1]
            b += data[o + 2]
            n++
          }
        }
        if (n > 0) {
          const o = i * 4
          data[o] = r / n
          data[o + 1] = g / n
          data[o + 2] = b / n
          state[i] = 0
          remaining--
          progress++
        }
      }
      if (!progress) break
      guard++
    }
  }
}

/**
 * 去除图片指定矩形区域内的水印（内容识别式填充，时间分片执行不会卡住 UI）。
 * @param imageData 原始图片像素
 * @param rects     需要去除的矩形区域（图片像素坐标，可为小数）
 * @returns 新图片像素，不影响入参
 */
export const removeRectsInImageData = async (imageData: ImageData, rects: Rect[]): Promise<ImageData> => {
  const {width, height} = imageData
  const data = new Uint8ClampedArray(imageData.data)
  const size = width * height
  const mask = new Uint8Array(size)
  let maskedCount = 0

  for (const r of rects) {
    const x0 = Math.max(0, Math.floor(r.x))
    const y0 = Math.max(0, Math.floor(r.y))
    const x1 = Math.min(width, Math.ceil(r.x + r.width))
    const y1 = Math.min(height, Math.ceil(r.y + r.height))
    for (let y = y0; y < y1; y++) {
      for (let x = x0; x < x1; x++) {
        const i = toIndex(x, y, width)
        if (!mask[i]) {
          mask[i] = 1
          maskedCount++
        }
      }
    }
  }

  if (maskedCount > 0 && maskedCount < size) {
    await exemplarInpaint(data, mask, width, height)
  }
  return new ImageData(data, width, height)
}
