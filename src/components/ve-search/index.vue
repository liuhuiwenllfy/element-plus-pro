<!--
全站搜索插件
-->
<script lang="ts" setup>
import {Search} from '@element-plus/icons-vue'
import {onMounted, ref} from "vue";
import {useRoute, useRouter} from "vue-router";
import emitter from "@/assets/js/eventBus";

const route = useRoute()
onMounted(() => {
  input.value = route.query.val
})

const input = ref()

const router = useRouter()
const submit = () => {
  router.push({name: 'search', query: {val: input.value,}})
  emitter.emit('fullSiteSearch', input.value)
}
</script>

<template>
  <el-space :size="[0, 0]" class="ve-search">
    <div class="search-input-area">
      <input v-model="input" :placeholder="$t('message.siteSearch')" class="search-input"/>
    </div>
    <div class="search-button-area" @click="submit">
      <button class="search-button">
        <el-space :size="[3, 0]">
          <el-icon>
            <Search/>
          </el-icon>
          <span>{{ $t('message.search') }}</span>
        </el-space>
      </button>
    </div>
  </el-space>
</template>

<style lang="less" scoped>
.ve-search {
  .search-input-area {
    margin-right: 0;
    border-radius: 30px 0 0 30px;
    background-color: @info6;
    border: 1px solid transparent;
    border-right: none;

    &:hover {
      border-color: @brand;
    }

    .search-input {
      margin: 3px 20px;
      height: 30px;
      border: none;
      width: 300px;
      background-color: @info6;
    }
  }

  .search-button-area {
    margin-left: 0;
    border-radius: 30px;
    background-color: @info6;
    border: 1px solid transparent;
    border-left: none;

    .search-button {
      border: none;
      height: 40px;
      width: 100px;
      border-radius: 0 30px 30px 0;
      background-color: @brand;
      color: white;

      &:hover {
        background-color: #66b1ff;
        cursor: pointer;
      }
    }
  }
}
</style>
