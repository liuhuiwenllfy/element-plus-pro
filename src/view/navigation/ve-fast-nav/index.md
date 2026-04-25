> 使用方法

```ts
import VeFastNav from 've-fast-nav/index.vue'
import Tab from 've-fast-nav/Tab.ts'

const tabList = ref<Tab>([
    {
        title: 'Overview 组件总览',
        titleEn: 'Overview 组件总览',
        name: 'overview',
        menuIcon: 'VeIconStoreSolid'
    }
])
```

```vue
<ve-fast-nav :tab-list="tabList" activeName="overview"/>
```
