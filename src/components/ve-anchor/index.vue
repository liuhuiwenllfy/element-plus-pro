<script lang="ts" setup>

import {Anchor} from "./Anchor";
import {nextTick, ref} from "vue";

const props = defineProps({
  items: {
    type: Array<Anchor>,
    required: true
  },
  height: {
    type: Number,
    required: false,
    default: () => 300
  },
})

const _id = ref<string>('')
const _index = ref<number>(0)

nextTick(() => {
  const scroll = document.querySelector('.scroll');
  const observer = new IntersectionObserver((entries) => {
    let topArr = [] as number[];
    let _scrollTop = scroll?.getBoundingClientRect().top;
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        topArr = []
        props.items.forEach((item) => {
          const _idElement = document.getElementById(item.id)
          if (_idElement) {
            const itemTop = _idElement.getBoundingClientRect().top;
            if (_scrollTop) {
              topArr.push(Math.abs(itemTop - _scrollTop - 50))
            }
          }
        })
      }
    });
    _id.value = props.items[topArr.indexOf(Math.min(...topArr))].id
    const nav = document.querySelector(`.nav-${_id.value}`);
    nav?.classList.add('is-selected')
    props.items.forEach((item, index) => {
      if (_id.value !== item.id) {
        const nav = document.querySelector(`.nav-${item.id}`);
        nav?.classList.remove('is-selected')
      } else {
        _index.value = index
      }
    })
  }, {
    root: scroll,
    rootMargin: '-50px 0px 0px 0px',
    threshold: Array.from({length: 100}, (_, i) => i * 0.01)
  });
  props.items.forEach((item) => {
    const id = document.getElementById(item.id);
    if (id) {
      observer.observe(id);
    }
  })
})


const handleClick = (item: Anchor) => {
  const scrollContainer = document.querySelector('.scroll')
  const target = document.getElementById(item.id)
  if (scrollContainer && target) {
    scrollContainer.scrollTo({
      top: target.offsetTop,
      behavior: 'smooth'
    })
  }
}
</script>

<template>
  <div class="ve-anchor">
    <el-row>
      <el-col :span="18">
        <div :style="{height: `${height}px`}" class="scroll">
          <slot name="default"/>
        </div>
      </el-col>
      <el-col :span="6">
        <el-space>
          <div class="mark" :style="{top: `${_index * 24 + 2}px`}"/>
          <div>
            <div @click="handleClick(item)" :class="`nav-${item.id}`" v-for="(item, index) in items" :key="index"
                 class="nav" :style="{paddingLeft: `${16 * (item.level - 1) + 10}px`}">{{ item.title }}
            </div>
          </div>
        </el-space>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="scss" scoped>
.ve-anchor {
  .scroll {
    overflow-y: auto;
  }

  .mark {
    position: absolute;
    display: inline-block;
    border: 2px solid #409EFF;
    border-radius: 4px;
    height: 16px;
    transition: top .25s ease-in-out, opacity .25s;
  }

  .is-selected {
    color: #409EFF;
  }

  .nav {
    cursor: pointer;
  }
}
</style>
