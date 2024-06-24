```ts
const _value = ref('CodeEase是一个致力于为用户提供便捷、高效、有趣的在线平台，它是一个标准化的低代码平台')
```

```vue
<h3>编辑区域</h3>
<ve-md-editor :model-value="_value" :theme="commonStore.getDark? 'dark':'light'"></ve-md-editor>
<h3>预览区域</h3>
<ve-md-preview :model-value="_value" :theme="commonStore.getDark? 'dark':'light'"></ve-md-preview>
```
