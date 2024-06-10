<script lang="ts" setup>

import {Anchor} from "./Anchor";
import VeAnchor from './node/index.vue'
import {onMounted, ref} from "vue";

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
  items: {
    type: Array<Anchor>,
    required: false,
    default: () => []
  }
})
const checked = ref()
onMounted(() => {
  //获取滚动区域dom
  const parentScrollElement = document.getElementById(props.parentScroll);
  // 固定锚点区域位置
  const veAnchor = document.getElementById('ve-anchor');
  parentScrollElement.addEventListener('scroll', () => {
    veAnchor.style.top = `${parentScrollElement.scrollTop}px`
  })
  //获取区域中所有部分
  const groupClassList = document.getElementsByClassName(props.group)
  checked.value = groupClassList[0].id
  //监听区域滚动
  parentScrollElement.addEventListener('scrollend', () => {
    //高度差（初始为第一项高度差）
    let poor = -groupClassList[0].clientHeight
    for (let i = 0; i < groupClassList.length; i++) {
      //找到高度差匹配的块
      if (parentScrollElement.scrollTop - groupClassList[i].clientHeight >= poor) {
        checked.value = groupClassList[i].id
      }
      poor += groupClassList[i].clientHeight
    }
  })
})

</script>

<template>
  <div id="ve-anchor" class="ve-anchor">
    <div id="markers"></div>
    <ve-anchor :checked="checked" :group="group" :items="items" :parent-scroll="parentScroll"/>
  </div>
</template>

<style lang="scss" scoped>
.ve-anchor {
  position: absolute;

  #markers {
    border-radius: 4px;
    border-left: 4px solid var(--el-color-primary);
    height: 16px;
    top: 4px;
    position: absolute;
    transition: top .25s ease-in-out, opacity .25s;
  }
}
</style>
