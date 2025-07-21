<script lang="ts" setup>
import VeMdPreview from "@/components/ve-md-editor/ve-md-preview/index.vue";
import {useCommonStore} from "@/pinia/common.ts";
import VeIncident from "@/components/ve-page/ve-incident/index.vue";
import VeSlots from "@/components/ve-page/ve-slots/index.vue";
import VeStats from "@/components/ve-page/ve-stats/index.vue";
import VeDownloads from "@/components/ve-page/ve-downloads/index.vue";

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
  },
  code: {
    type: String,
    required: false,
    default: () => null
  },
  version: {
    type: String,
    required: false,
    default: () => null
  },
  stats: {
    type: Array<any>,
    required: false,
    default: () => null
  },
  incident: {
    type: Array<any>,
    required: false,
    default: () => null
  },
  _slots: {
    type: Array<any>,
    required: false,
    default: () => null
  }
})

const openUrl = (url: string) => {
  window.open(url)
}

const commonStore = useCommonStore();
</script>

<template>
  <div>
    <el-space>
      <h2>{{ title }}</h2>
      <el-tag v-if="version" round size="small" type="primary">{{ version }}</el-tag>
    </el-space>
    <el-divider/>
    <h3>Example</h3>
    <slot></slot>
    <el-divider/>
    <template v-if="code">
      <h3>Code</h3>
      <ve-md-preview :modelValue="code" :theme="commonStore.getDark? 'dark':'light'"/>
    </template>
    <el-divider/>
    <h2 v-if="stats || incident || _slots">Api</h2>
    <template v-if="stats">
      <ve-stats :stats="stats"/>
    </template>
    <template v-if="incident">
      <ve-incident :incident="incident"/>
    </template>
    <template v-if="_slots">
      <ve-slots :_slots="_slots"/>
    </template>
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
    <h2>Downloads</h2>
    <ve-downloads :id="id"/>
  </div>
</template>

<style lang="scss" scoped>

</style>
