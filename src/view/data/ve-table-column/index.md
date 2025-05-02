```ts
const handleRefresh = () => {
    ElMessage.success("refresh")
}

const _fullScreen = ref(false)

const _tableHeight = ref(400)

const handleFullScreen = (fullScreen: boolean, tableHeight: number) => {
    _fullScreen.value = fullScreen
    _tableHeight.value = tableHeight
}
```

```vue
<ve-table-area class="ve-table" language="zhCn">
  <template #header>
    <el-button>新增</el-button>
  </template>
  <template #main>
    <el-table :data="_data" :height="_tableHeight">
      <ve-table-column :table-height="400"
                       :column-list="columnList"
                       region-class="ve-table"
                       @handle-full-screen="handleFullScreen"
                       @handle-refresh="handleRefresh">
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
  </template>
</ve-table-area>
```
