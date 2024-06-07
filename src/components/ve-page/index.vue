<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    required: true,
    default: () => ""
  },
  id: {
    type: String,
    required: true,
    default: () => ""
  }
})

const openUrl = (url: string) => {
  window.open(url)
}
</script>

<template>
  <div>
    <h2>{{ title }}</h2>
    <el-divider/>
    <h3>Example</h3>
    <slot></slot>
    <el-divider/>
    <h2>Api</h2>
    <slot name="api"></slot>
    <h2>Assets</h2>
    <el-space size="large">
      <el-link type="primary" @click="openUrl(`https://www.npmjs.com/package/${id}`)">
        <el-space>
          <span>安装：npm</span>
          <el-icon>
            <Link/>
          </el-icon>
        </el-space>
      </el-link>
      <el-link type="primary"
               @click="openUrl(`https://github.com/liuhuiwenllfy/element-plus-pro/tree/master/src/components/${id}`)">
        <el-space>
          <span>源码：Github</span>
          <el-icon>
            <Link/>
          </el-icon>
        </el-space>
      </el-link>
      <el-link type="primary"
               @click="openUrl(`https://gitee.com/liu-ling-feng-yu/element-plus-pro/tree/master/src/components/${id}`)">
        <el-space>
          <span>源码：Gitee</span>
          <el-icon>
            <Link/>
          </el-icon>
        </el-space>
      </el-link>
    </el-space>
    <h2>Warn</h2>
    <slot name="warn"></slot>
  </div>
</template>

<style lang="scss" scoped>

</style>
