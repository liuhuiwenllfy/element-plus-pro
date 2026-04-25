> 使用方法

```ts
import VeSearchArea from 've-search-area/index.vue'
```

```vue
<ve-search-area
    :open="_open"
    :show="true"
    language="zhCn"
    @handle-click="_open = $event">
  <el-form inline>
    <el-form-item>
      <el-input placeholder="请输入"/>
    </el-form-item>
    <el-form-item v-if="_open">
      <el-input placeholder="请输入"/>
    </el-form-item>
  </el-form>
</ve-search-area>
```
