> 使用方法

```ts
import VeMdEditor from 've-md-editor/ve-md-editor/index.vue'
import VeMdPreview from 've-md-editor/ve-md-preview/index.vue'
import {Anchor} from "ve-anchor/Anchor.ts";
import VeAnchor from 've-anchor/index.vue'

const _value = ref('CodeEase是一个致力于为用户提供便捷、高效、有趣的在线平台，它是一个标准化的低代码平台')

const items = ref<Anchor[]>([])
```

```vue
<h3>编辑区域</h3>
<ve-md-editor :model-value="_value"></ve-md-editor>

<h3>预览区域</h3>
<ve-anchor :items="items">
  <template #default>
    <ve-md-preview :model-value="_value"
                   @on-get-catalog="items = $event"></ve-md-preview>
  </template>
</ve-anchor>
```
