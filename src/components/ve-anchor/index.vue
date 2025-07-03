<script lang="ts" setup>

import {Anchor} from "./Anchor";
import {onMounted} from "vue";

const props = defineProps({
  items: {
    type: Array<Anchor>,
    required: false,
    default: () => []
  },
  height: {
    type: Number,
    required: false,
    default: () => 300
  },
})

const emit = defineEmits(['enterView'])

onMounted(() => {
  const scroll = document.querySelector('#scroll');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        emit('enterView', entry.target.id)
      }
    });
  }, {
    root: scroll, // 自定义视口
    rootMargin: '0px',
    threshold: 0.5 // 50% 可见时触发
  });
  props.items.forEach(item => {
    const id = document.getElementById(`${item.line}`);
    if (id) {
      observer.observe(id);
    }
  })
})

</script>

<template>
  <div class="ve-anchor">
    <el-row>
      <el-col :span="18">
        <div :style="{height: `${height}px`}" id="scroll">
          <slot name="default"/>
        </div>
      </el-col>
      <el-col :span="6">
        <slot name="navigation"/>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="scss" scoped>
.ve-anchor {
  #scroll {
    overflow-y: auto;
  }

}
</style>
