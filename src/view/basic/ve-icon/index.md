```vue
<el-icon>
  <VeClose/>
</el-icon>
```

```ts
// main.ts中注册（按需注册）
import * as SvgSpinnersList from '/ve-icon/svg-spinners/components'
// 注册全局 ve-icon 组件（svg-spinners）
Object.keys(SvgSpinnersList).forEach((key) => {
    app.component(key, SvgSpinnersList[key as keyof typeof SvgSpinnersList])
})

import * as OtherList from '/ve-icon/other/components'
// 注册全局 ve-icon 组件（other）
Object.keys(OtherList).forEach((key) => {
    app.component(key, OtherList[key as keyof typeof OtherList])
})
```