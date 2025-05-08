<script lang="ts" setup>
import {ElAvatar, ElDropdown, ElDropdownItem, ElDropdownMenu, ElIcon, ElSpace, ElText} from 'element-plus'
import {VeLogOut} from 've-icon/other/components'
import {PropType, reactive} from 'vue'
import 'element-plus/es/components/avatar/style/css'
import 'element-plus/es/components/dropdown/style/css'
import 'element-plus/es/components/dropdown-item/style/css'
import 'element-plus/es/components/dropdown-menu/style/css'
import 'element-plus/es/components/space/style/css'
import 'element-plus/es/components/text/style/css'
import 'element-plus/es/components/icon/style/css'
import {DropdownItem} from "../DropdownItem";

defineProps({
  avatar: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  language: {
    type: String as PropType<'zhCn' | 'en' | string>,
    required: false,
    default: () => 'zhCn'
  },
  list: {
    type: Array<DropdownItem>,
    required: false,
    default: () => []
  },
})

const emits = defineEmits(['handleClick', 'handleSignOut'])

const handleClick = (code: string) => {
  emits('handleClick', code)

}

const signOut = async () => {
  emits('handleSignOut')
}

const content = reactive<any>({
  logout: {
    zhCn: '登出',
    en: 'logout'
  }
})

</script>

<template>
  <el-dropdown trigger="hover">
    <el-text class="el-dropdown-link" truncated>
      <el-space>
        <el-avatar :src="avatar"/>
        <el-text type="info">{{ username }}</el-text>
      </el-space>
    </el-text>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item v-for="(item, index) in list" :key="index" @click="handleClick(item.code)">
          <el-icon>
            <component :is="item.icon" class="el-icon"/>
          </el-icon>
          {{ item.name }}
        </el-dropdown-item>
        <el-dropdown-item divided @click="signOut">
          <el-icon>
            <VeLogOut/>
          </el-icon>
          {{ content.logout[language] }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<style lang="scss" scoped>
//去掉浏览器 :focus 黑边
:focus-visible {
  outline: none;
}

.el-dropdown-link {
  cursor: pointer;
}
</style>
