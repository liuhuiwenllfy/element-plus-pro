<script lang="ts" setup>
import UilEnglishToChinese from '~icons/uil/english-to-chinese'
import UilLetterChineseA from '~icons/uil/letter-chinese-a'
import RiEnglishInput from '~icons/ri/english-input'
import {useStore} from '@/vuex/store'
import {useI18n} from 'vue-i18n'

const store = useStore()
const {locale} = useI18n()
const handleCommand = (command: string) => {
  store.commit('internationalization', command)
  locale.value = command
}
</script>

<template>
  <div class="internationalization">
    <el-dropdown trigger="hover" @command="handleCommand">
        <span>
          <el-icon><UilEnglishToChinese/></el-icon>
        </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item :disabled="store.state.internationalization === 'zhCn'" command="zhCn">
            <el-icon>
              <UilLetterChineseA/>
            </el-icon>
            {{$t('message.chinese')}}
          </el-dropdown-item>
          <el-dropdown-item :disabled="store.state.internationalization === 'en'" command="en">
            <el-icon>
              <RiEnglishInput/>
            </el-icon>
            {{$t('message.english')}}
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<style lang="less" scoped>
.internationalization {
  .el-icon {
    font-size: 20px;
    padding: 20px 10px 19px;

    &:hover {
      background-color: var(--el-menu-hover-bg-color);
    }
  }

  .el-dropdown {
    color: var(--color);
  }
}
</style>
