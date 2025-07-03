<script lang="ts" setup>

import {Anchor} from "@/components/ve-anchor/Anchor";
import node from '@/components/ve-anchor/node/index.vue'
import {watch} from "vue";

const props = defineProps({
  parentScroll: {
    type: String,
    required: false,
    default: () => 'parent-scroll'
  },
  group: {
    type: String,
    required: false,
    default: () => 'group'
  },
  checked: {
    type: String,
    required: false,
    default: () => ''
  },
  items: {
    type: Array as () => Anchor[],
    required: false,
    default: () => []
  }
})

watch(() => props.checked, () => {
  handleClick(props.checked, false)
})

const handleClick = (id: string, roll: boolean) => {
  // 点击锚点时需要计算滚动条高度
  if (roll) {
    changeScrollTop();
  }
  // 获取所有锚点dom
  const allNode = document.getElementsByClassName('link');
  // 去掉锚点选中状态
  for (let i = 0; i < allNode.length; i++) {
    if (allNode[i].classList.contains('is-active')) {
      allNode[i].classList.remove('is-active')
    }
  }
  // 获取当前点击锚点dom，并设置选中状态
  const key = document.getElementById(`${id}-link`);
  // 设置锚点选中状态
  key?.classList.add("is-active")
  // 获取锚点标记dom
  const markers = document.getElementById('markers');
  // 设置锚点标记位置
  if (markers) {
    markers.style.top = `${key?.offsetTop}px`
  }

  function changeScrollTop() {
    //获取滚动区域dom
    const parentScroll = document.getElementById(props.parentScroll);
    //获取区域中所有部分
    const groupClassList = document.getElementsByClassName(props.group)
    // 滚动条位置
    let scrollTop = 0
    for (let i = 0; i < groupClassList.length; i++) {
      //找到高度差匹配的块
      if (id === groupClassList[i].id && parentScroll) {
        parentScroll.scrollTop = scrollTop
        break
      }
      scrollTop += groupClassList[i].clientHeight
    }
  }
}
</script>

<template>
  <div v-for="(item) in items" :key="`${item.id}-link`" class="node">
    <a :id="`${item.id}-link`"
       class="link"
       @click="handleClick(item.id, true)">
      {{ item.title }}
    </a>
    <node :items="item.children"/>
  </div>
</template>

<style lang="scss" scoped>
.node {
  padding: 4px 16px 0;
  cursor: pointer;

  .is-active {
    color: #409EFF;
    font-weight: bold;
  }
}
</style>
