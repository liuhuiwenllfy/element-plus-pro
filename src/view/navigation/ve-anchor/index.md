```ts
const items = ref<Anchor[]>([
    {
        id: 'part-1',
        title: 'part-1',
    },
    {
        id: 'part-2',
        title: 'part-2',
    },
    {
        id: 'part-3',
        title: 'part-3',
        children: [
            {
                id: 'part-3-1',
                title: 'part-3-1',
            },
            {
                id: 'part-3-2',
                title: 'part-3-2',
            },
        ],
    }
] as Anchor[])
```

```vue

<el-card shadow="never">
  <el-row id="parent-scroll" style="height: 300px; overflow: auto">
    <el-col :span="18">
      <div id="part-1" class="group" style="height: 300px; background: #C6E2FF"/>
      <div id="part-2" class="group" style="height: 300px; background: #F8E3C5"/>
      <div id="part-3" class="group" style="height: 300px; background: #FCD3D3"/>
      <div id="part-3-1" class="group" style="height: 300px; background: #C6E2FF"/>
      <div id="part-3-2" class="group" style="height: 300px; background: #F8E3C5"/>
    </el-col>
    <el-col :span="6">
      <ve-anchor :items="items" group="group" parent-scroll="parent-scroll"/>
    </el-col>
  </el-row>
</el-card>
```
