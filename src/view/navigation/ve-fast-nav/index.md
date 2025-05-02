```ts
const tabList = [
    {
        title: 'Overview 组件总览',
        titleEn: 'Overview 组件总览',
        name: 'overview',
        menuIcon: 'Shop'
    }
]
```

```vue
<ve-fast-nav :tab-list="commonStore.getTabList" activeName="overview"/>
```
