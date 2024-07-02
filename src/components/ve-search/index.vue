<script lang="ts" setup>
import {Search} from '@element-plus/icons-vue'
import {PropType, reactive, ref} from 'vue'
import {ElIcon, ElSpace} from 'element-plus'
import 'element-plus/es/components/space/style/css'
import 'element-plus/es/components/icon/style/css'

const props = defineProps({
  val: {
    type: String,
    required: false,
    default: () => ''
  },
  language: {
    type: String as PropType<'zhCn' | 'en' | string>,
    required: false,
    default: () => 'zhCn'
  },
})

const _val = ref(props.val)

const emits = defineEmits(['handleClick'])

const handleClick = () => {
  emits('handleClick', _val.value)
}

const content = reactive<any>({
  siteSearch: {
    zhCn: '全站搜索',
    en: 'Full site search'
  },
  search: {
    zhCn: '查询',
    en: 'Search'
  },

})
</script>

<template>
  <el-space :size="[0, 0]" class="ve-search">
    <div class="search-input-area">
      <input v-model="_val" :placeholder="content.siteSearch[language]" class="search-input"/>
    </div>
    <div class="search-button-area" @click="handleClick">
      <button class="search-button">
        <el-space :size="[3, 0]">
          <el-icon>
            <Search/>
          </el-icon>
          <span>{{ content.search[language] }}</span>
        </el-space>
      </button>
    </div>
  </el-space>
</template>

<style lang="scss" scoped>
.ve-search {
  //去掉浏览器 :focus 黑边
  :focus-visible {
    outline: none;
  }

  .search-input-area {
    margin-right: 0;
    border-radius: 30px 0 0 30px;
    background-color: var(--el-color-info-light-9);
    border: 1px solid transparent;
    border-right: none;

    &:hover {
      border-color: var(--el-color-primary);
    }

    .search-input {
      margin: 3px 20px;
      height: 20px;
      border: none;
      max-width: 300px;
      background-color: var(--el-color-info-light-9);
    }
  }

  .search-button-area {
    margin-left: 0;
    border-radius: 30px;
    background-color: var(--el-color-info-light-9);
    border: 1px solid transparent;
    border-left: none;

    .search-button {
      border: none;
      height: 30px;
      width: 80px;
      border-radius: 0 30px 30px 0;
      background-color: var(--el-color-primary);
      color: white;

      &:hover {
        background-color: #66b1ff;
        cursor: pointer;
      }
    }
  }
}
</style>
