```ts
const tableData = [
    {
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-04',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
]
```

```vue

<ve-table-area language="zhCn">
  <template #header>
    <el-button>新增</el-button>
  </template>
  <template #main>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column label="Date" prop="date" width="180"/>
      <el-table-column label="Name" prop="name" width="180"/>
      <el-table-column label="Address" prop="address"/>
    </el-table>
  </template>
</ve-table-area>
```
