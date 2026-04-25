> 使用方法

```ts
import VeEmojiSelect from 've-emoji-select/index.vue'

const handleEmoteClick = (val: string) => {
    console.log(val)
}
```

```vue
<ve-emoji-select @change="handleEmoteClick">
  <template #default>
    <el-button>选择</el-button>
  </template>
</ve-emoji-select>
```
