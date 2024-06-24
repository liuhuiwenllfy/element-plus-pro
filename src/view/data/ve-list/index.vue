<script lang="ts" setup>
import VeLoadMore from '@/components/ve-load-more/index.vue'
import VePage from "@/components/ve-page/index.vue";
import VeList from "@/components/ve-list/index.vue";
import {ref} from "vue";
import code from './index.md?raw'

const _list = ref([
  {
    avatar: 'avatar.png',
    name: '乐悠悠',
    desc: '生活中的每一刻，都是值得珍惜的美好瞬间。',
    content: '夕阳缓缓落下，如同一首优美的诗篇，将无尽的温柔洒满了广袤的大地。金色的余晖轻轻抚摸着村庄的每一寸土地，仿佛给这片宁静的乡村披上了一层金色的薄纱。微风轻轻吹过，带来了远处花草的淡淡香气，这香气与夕阳的温暖交织在一起，让人心旷神怡。村庄里的房屋在夕阳的映照下显得古朴而宁静，炊烟袅袅升起，为这幅美丽的画卷增添了几分生活的气息。整个村庄都沉浸在这份宁静与美好之中，仿佛时间在这一刻静止，让人流连忘返。',
    image: 'avatar.png'
  },
]);

const loadMoreShow = ref(true)
const loadMore = async () => {
  _list.value = [..._list.value, _list.value[0]]
  if (_list.value.length >= 5) {
    loadMoreShow.value = false
  }
}

const stats = [
  {
    name: 'list',
    instructions: '列表信息',
    type: 'array',
    optional: '-',
    default: '-',
  },
  {
    name: 'list:avatar',
    instructions: '头像地址',
    type: 'string',
    optional: '-',
    default: 'default.png',
  },
  {
    name: 'list:name',
    instructions: '名称',
    type: 'string',
    optional: '-',
    default: '-',
  },
  {
    name: 'list:desc',
    instructions: '描述',
    type: 'string',
    optional: '-',
    default: '-',
  },
  {
    name: 'list:content',
    instructions: '内容',
    type: 'string',
    optional: '-',
    default: '-',
  },
  {
    name: 'type',
    instructions: '列表类型',
    type: 'string',
    optional: 'list1,list2,list3',
    default: 'list1',
  }
]

const slots = [
  {
    name: 'operation',
    details: '操作扩展'
  },
  {
    name: 'image',
    details: '图片扩展'
  }
]
</script>

<template>
  <ve-page id="ve-list" :_slots="slots" :code="code" :stats="stats" title="ve-list 列表">
    <template #default>
      <el-divider content-position="left">list1</el-divider>
      <ve-list v-for="(item, index) in _list" :key="index" :data="item" type="list1">
        <template #operation>
          <el-link :underline="false" size="mini" type="primary">修改</el-link>
          <el-link :underline="false" size="mini" type="primary">更多</el-link>
        </template>
      </ve-list>
      <ve-load-more v-show="_list.length <= 5" :loading="loadMoreShow" @handle-click="loadMore"></ve-load-more>
      <el-divider content-position="left">list2</el-divider>
      <ve-list v-for="(item, index) in _list" :key="index" :data="item" type="list2">
        <template #operation>
          <el-link :underline="false" size="mini" type="primary">修改</el-link>
          <el-link :underline="false" size="mini" type="primary">更多</el-link>
        </template>
      </ve-list>
      <ve-load-more v-show="_list.length <= 5" :loading="loadMoreShow" @handle-click="loadMore"></ve-load-more>
      <el-divider content-position="left">list3</el-divider>
      <ve-list v-for="(item, index) in _list" :key="index" :data="item" type="list3">
        <template #operation>
          <el-link :underline="false" size="mini" type="primary">修改</el-link>
          <el-link :underline="false" size="mini" type="primary">更多</el-link>
        </template>
        <template #image>
          <el-image :src="item.image || 'default.png'" class="custom-image" fit="cover"></el-image>
        </template>
      </ve-list>
      <ve-load-more v-show="_list.length <= 5" :loading="loadMoreShow" @handle-click="loadMore"></ve-load-more>
    </template>
  </ve-page>
</template>

<style lang="scss" scoped>
.custom-image {
  width: 300px;
  height: 150px;
  border-radius: 5px
}
</style>
