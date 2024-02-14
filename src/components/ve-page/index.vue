<script lang="ts" setup>
import {openUrl} from "@/assets/js/common";

const props = defineProps({
  title: {
    type: String,
    required: true,
    default: () => "标题"
  },
  id: {
    type: String,
    required: true,
    default: () => ""
  },
  pmId: {
    type: String,
    required: true,
    default: () => ""
  },
})
</script>

<template>
  <div class="ve-cron">
    <h2>{{ title }}</h2>
    <el-divider/>
    <h3>Example</h3>
    <slot></slot>
    <el-divider/>
    <h2>API</h2>
    <slot name="api"></slot>
    <h2>Assets</h2>
    <el-space size="large">
      <el-link type="primary" @click="openUrl(`https://www.liulingfengyu.cn/#/plugin-details?id=${pmId}`)">
        <el-space>
          <span>插件市场：{{ title }}</span>
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
      <el-link type="primary" @click="openUrl(`https://epp.liulingfengyu.cn/component/${id}`)">
        <el-space>
          <span>组件库文档</span>
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

<style lang="less" scoped>
.ve-cron {

}
</style>
