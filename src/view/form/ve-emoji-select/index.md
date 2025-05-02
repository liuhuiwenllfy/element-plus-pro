```ts
const _comment = ref('')
const handleEmoteClick = (val: string) => {
    _comment.value = _comment.value + val
}
```

```vue
<el-input v-model="_comment" placeholder="请输入内容"
          style="width: 300px; vertical-align: top; margin-right: 10px"
          type="textarea"></el-input>
<ve-emoji-select @change="handleEmoteClick">
  <template #default>
    <el-button>选择</el-button>
  </template>
</ve-emoji-select>
```
