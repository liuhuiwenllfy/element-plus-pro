<script lang="ts" setup>
import {Close, Search} from '@element-plus/icons-vue'
import {PropType, reactive, ref} from 'vue'
import {ElIcon, ElSpace, ElText} from 'element-plus'
import 'element-plus/es/components/space/style/css'
import 'element-plus/es/components/icon/style/css'
import 'element-plus/es/components/text/style/css'

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

const handleClick = (type: string) => {
  switch (type) {
    case 'clear':
      _val.value = ''
      break
    case 'search':
      break
  }
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
  <div class="ve-search">
    <el-space>
      <input v-model="_val" :placeholder="content.siteSearch[language]" class="search-input"/>
      <el-icon @click="handleClick('clear')" size="12" class="clear">
        <Close/>
      </el-icon>
      <button @click="handleClick('search')" class="search-button">
        <el-text>
          <el-icon>
            <Search/>
          </el-icon>
          {{ content.search[language] }}
        </el-text>
      </button>
    </el-space>
  </div>
</template>

<style lang="scss" scoped>
.ve-search {
  width: 300px;
  //去掉浏览器 :focus 黑边
  :focus-visible {
    outline: none;
  }

  border-radius: 30px;
  background-color: var(--el-color-info-light-9);
  border: 2px solid transparent;
  border-right: none;

  &:focus-within {
    border-color: var(--el-color-primary);
    transition: all 0.3s ease
  }

  // 失去焦点时的过渡动画
  &:not(:focus-within) {
    transition: all 0.3s ease;
  }

  .search-input {
    width: 154px;
    margin: 3px 15px;
    height: 20px;
    border: none;
    background-color: var(--el-color-info-light-9);
  }

  .clear {
    cursor: pointer;
    padding: 2px;
    border-radius: 4px;

    &:hover {
      background-color: var(--el-color-info-light-7);
    }
  }

  .search-button {
    margin-top: -2px;
    margin-bottom: -2px;
    border: none;
    height: 32px;
    width: 80px;
    border-radius: 0 30px 30px 0;
    background-color: var(--el-color-primary);
    color: white;
    font-weight: bold;

    &:hover {
      background-color: #66b1ff;
      cursor: pointer;
    }
  }
}
</style>
