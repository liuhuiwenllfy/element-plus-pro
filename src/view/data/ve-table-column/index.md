```vue

<el-table ref="ve-table" :data="_data">
  <ve-table-column :column-list="columnList">
    <template #default>
      <el-button
          :icon="Document"
          plain
          size="small">
        详情
      </el-button>
      <el-button
          :icon="Edit"
          plain
          size="small"
          type="primary">
        编辑
      </el-button>
      <el-button
          :icon="Delete"
          plain
          size="small"
          type="danger">
        删除
      </el-button>
    </template>
  </ve-table-column>
</el-table>
```
