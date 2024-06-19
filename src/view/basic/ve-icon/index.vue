<script lang="ts" setup>
import VePage from "@/components/ve-page/index.vue";
import {ElMessage} from "element-plus";
import VeStats from "@/components/ve-page/ve-stats/index.vue";
import * as SvgList from '@/components/ve-icon/components'
import {onMounted, ref} from "vue";

const _icons = ref([])

onMounted(() => {
  Object.keys(SvgList).forEach((key) => {
    _icons.value.push(key)
  })
})

const handleClick = (item: any) => {
  const textToCopy = `<el-icon><${item}/></el-icon>`
  if (!navigator.clipboard) {
    // 如果浏览器不支持 Clipboard API，则回退到 document.execCommand
    const textarea = document.createElement('textarea');
    textarea.value = textToCopy;
    document.body.appendChild(textarea);
    textarea.select();

    try {
      const successful = document.execCommand('copy');
      if (successful) {
        ElMessage.success('复制成功')
      }
    } catch (err) {
      console.error('复制失败: ', err);
    } finally {
      document.body.removeChild(textarea);
    }
  } else {
    // 使用 Clipboard API 复制文本
    navigator.clipboard.writeText(textToCopy)
        .then(() => {
          ElMessage.success('复制成功')
        })
        .catch(err => {
          console.error('复制失败: ', err);
        });
  }
}

const stats = [
  {
    name: 'size',
    instructions: 'SVG 图标的大小，size x size',
    type: 'string',
    optional: '-',
    default: '-',
  },
  {
    name: 'color',
    instructions: 'svg 的 fill 颜色',
    type: 'string',
    optional: '-',
    default: '-',
  },
]
</script>

<template>
  <ve-page id="ve-icon" title="ve-icon Icon 图标">
    <template #default>
      <ul class="icon-list">
        <li v-for="(item, index1) in _icons" :key="index1" class="icon-item" @click="handleClick(item)">
          <el-space direction="vertical">
            <component :is="item" class="el-icon"/>
            <el-text class="text-flow-ellipsis-multiple_1">{{ item }}</el-text>
          </el-space>
        </li>
      </ul>
    </template>
    <template #api>
      <ve-stats :stats="stats"/>
    </template>
    <template #warn>
      <p>上面是我们收集的一些好看的图标。</p>
    </template>
  </ve-page>
</template>

<style lang="scss" scoped>
.icon-list {
  list-style: none;
  padding: 0;

  .icon-item {
    display: inline-block;
    border: 1px solid var(--el-border-color);
    padding: 20px 0;
    text-align: center;
    width: 200px;
    cursor: pointer;

    &:hover {
      color: $brand;
      background-color: var(--el-color-primary-light-8);
    }

    .el-icon {
      font-size: 25px;
    }
  }
}
</style>
