```ts
const items = ref<MyAnchor[]>([
    {level: 0, id: "1", title: "part-1", color: '#C6E2FF'},
    {level: 1, id: "2", title: "part-1-1", color: '#F8E3C5'},
    {level: 1, id: "3", title: "part-1-2", color: '#FCD3D3'},
    {level: 0, id: "4", title: "part-2", color: '#C6E2FF'},
    {level: 1, id: "5", title: "part-2-1", color: '#F8E3C5'},
])
```

```vue

<ve-anchor :height="400" :items="nav">
  <template #default>
    <div v-for="(item, index) in nav" :key="index" :id="item.id" :style="{height: '300px', background: item.color}"/>
  </template>
</ve-anchor>
```
