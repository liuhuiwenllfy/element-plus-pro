<template>
  <pre v-html="highlightedCode"></pre>
</template>

<script>
import Prism from 'prismjs';

export default {
  props: {
    code: {
      type: String,
      required: true,
    },
    language: {
      type: String,
      default: 'javascript',
    },
  },
  computed: {
    highlightedCode() {
      return Prism.highlight(this.code, Prism.languages[this.language], this.language);
    },
  },
  mounted() {
    // 在组件挂载后，注册 Prism 的语言（如果需要的话）
    // Prism.registerLanguage('myLanguage', myLanguageDefinition);
  },
};
</script>

<style scoped>
pre {
  background-color: #f5f5f5;
  padding: 1em;
  border-radius: 4px;
}
</style>
