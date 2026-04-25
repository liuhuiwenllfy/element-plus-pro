> main.ts中注册（按需注册）

```ts
import * as AnimationSvgList from '@/components/ve-icon/svg-spinners/components'
// 注册全局 ve-icon 组件（svg-spinners）
Object.keys(AnimationSvgList).forEach((key) => {
    app.component(key, AnimationSvgList[key as keyof typeof AnimationSvgList])
})
```

```ts
import * as MdiLightSvgList from '@/components/ve-icon/mdi-light/components'
// 注册全局 ve-icon 组件（mdi-light）
Object.keys(MdiLightSvgList).forEach((key) => {
    app.component(key, MdiLightSvgList[key as keyof typeof MdiLightSvgList])
})
```

```ts
import * as FlowbiteSvgList from '@/components/ve-icon/flowbite/components'
// 注册全局 ve-icon 组件（flowbite）
Object.keys(FlowbiteSvgList).forEach((key) => {
    app.component(key, FlowbiteSvgList[key as keyof typeof FlowbiteSvgList])
})
```

```ts
import * as OtherSvgList from '@/components/ve-icon/other/components'
// 注册全局 ve-icon 组件（other）
Object.keys(OtherSvgList).forEach((key) => {
    app.component(key, OtherSvgList[key as keyof typeof OtherSvgList])
})
```

> 使用方法

```ts
import {VeIconSearchSolid} from '@/components/ve-icon/flowbite/components'
```

```vue

<el-icon>
  <VeIconSearchSolid/>
</el-icon>
```