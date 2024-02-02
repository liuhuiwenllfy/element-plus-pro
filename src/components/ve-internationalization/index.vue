<!--
国际化下拉选择
-->
<script lang="ts" setup>
import UilEnglishToChinese from '~icons/uil/english-to-chinese'
import UilLetterChineseA from '~icons/uil/letter-chinese-a'
import RiEnglishInput from '~icons/ri/english-input'
import {useStore} from "@/vuex/store";
import {useI18n} from "vue-i18n";

const store = useStore()
const {locale} = useI18n()
const handleCommand = (command: string) => {
  store.commit('internationalization', command)
  locale.value = command
}
</script>

<template>
  <div class="ve-internationalization">
    <el-dropdown trigger="hover" @command="handleCommand">
        <span class="el-dropdown-link">
          <el-icon><UilEnglishToChinese/></el-icon>
        </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item :disabled="store.state.internationalization === 'zhCn'" command="zhCn">
            <el-icon style="font-size: 16px">
              <UilLetterChineseA/>
            </el-icon>
            {{ $t('message.chinese') }}
          </el-dropdown-item>
          <el-dropdown-item :disabled="store.state.internationalization === 'en'" command="en">
            <el-icon style="font-size: 16px">
              <RiEnglishInput/>
            </el-icon>
            {{ $t('message.english') }}
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<style lang="less" scoped>
.ve-internationalization {
  text-align: right;

  .el-icon {
    font-size: 20px;

    &:hover {
      color: @brand;
    }
  }

  .el-dropdown {
    color: var(--color);
  }
}
</style>
