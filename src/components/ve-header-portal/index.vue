<script lang="ts" setup>
import {PropType, reactive, ref} from 'vue'
import {ElDropdown, ElDropdownItem, ElDropdownMenu, ElIcon, ElImage, ElSpace, ElSwitch, ElText} from "element-plus";
import {VeEnglishInput, VeEnglishToChinese, VeLetterChineseA, VeMdCloudyNight, VeSunny} from 've-icon/other/components'
import 'element-plus/es/components/icon/style/css'
import 'element-plus/es/components/dropdown/style/css'
import 'element-plus/es/components/dropdown-menu/style/css'
import 'element-plus/es/components/dropdown-item/style/css'
import 'element-plus/es/components/avatar/style/css'
import 'element-plus/es/components/space/style/css'
import 'element-plus/es/components/text/style/css'
import 'element-plus/es/components/image/style/css'
import 'element-plus/es/components/switch/style/css'
import 'element-plus/es/components/badge/style/css'
import {DropdownItem} from "./DropdownItem";
import VeDefaultLogin from 've-login/ve-default-login/index.vue'
import VeUserInfo from 've-login/ve-user-info/index.vue'
import {ArrowDown, Menu, TopRight} from '@element-plus/icons-vue'

const props = defineProps({
  language: {
    type: String as PropType<'zhCn' | 'en' | string>,
    required: false,
    default: () => 'zhCn'
  },
  logo: {
    type: String,
    required: false,
    default: () => ''
  },
  name: {
    type: String,
    required: false,
    default: () => ''
  },
  drawerNews: {
    type: Boolean,
    required: false,
    default: () => false
  },
  newsNum: {
    type: Number,
    required: false,
    default: () => 0
  },
  dark: {
    type: Boolean,
    required: false,
    default: () => false
  },
  avatar: {
    type: String,
    required: false,
    default: () => ''
  },
  username: {
    type: String,
    required: false,
    default: () => ''
  },
  list: {
    type: Array<DropdownItem>,
    required: false,
    default: () => []
  },
  menu: {
    type: Array<any>,
    required: false,
    default: () => []
  }
})

const emits = defineEmits([
  'handleLogoClick',
  'handleLanguageChange',
  'handleUserClick',
  'handleSignOut',
  'handleNightChange',
  'handleLogin',
  'handleRegister',
  'handleMenuClick',
])

const handleLogoClick = () => {
  emits('handleLogoClick')
}

const _language = ref<string>(props.language)

const handleLanguageChange = (command: string) => {
  _language.value = command
  emits('handleLanguageChange', command)
}

const _dark = ref<boolean>(props.dark)

const handleNightChange = (command: any) => {
  _dark.value = command
  emits('handleNightChange', command)
}

const handleUserClick = (code: string) => {
  emits('handleUserClick', code)
}

const signOut = async () => {
  emits('handleSignOut')
}

const handleLogin = async () => {
  emits('handleLogin')
}

const handleRegister = async () => {
  emits('handleRegister')
}

const handleMenuClick = async (menuItem: any) => {
  emits('handleMenuClick', menuItem)
}

const content = reactive<any>({
  chinese: {
    zhCn: '中文',
    en: 'Chinese'
  },
  english: {
    zhCn: '英文',
    en: 'English'
  },
  light: {
    zhCn: '白天',
    en: 'Light'
  },
  dark: {
    zhCn: '黑夜',
    en: 'Dark'
  },
  logout: {
    zhCn: '登出',
    en: 'Log out'
  }
})
</script>

<template>
  <div class="header noSelect">
    <ul>
      <li class="text" style="cursor: pointer" @click="handleLogoClick">
        <el-space class="logo">
          <el-image :src="logo"/>
          <strong class="logo-text">{{ name }}</strong>
        </el-space>
      </li>
      <template v-if="menu.length > 0">
        <template v-for="(item, index) in menu" :key="index">
          <el-dropdown v-if="item.children && item.children.length > 0">
            <li class="menu1">
              <el-text truncated>
                {{ item.name }}&nbsp;<el-icon size="12">
                <ArrowDown/>
              </el-icon>
              </el-text>
            </li>
            <template #dropdown>
              <el-dropdown-menu style="max-width: 300px">
                <el-dropdown-item v-for="(item1, index1) in item.children" :key="index1">
                  <el-space direction="vertical" alignment="normal">
                    <el-text>{{ item1.name }}
                      <el-icon>
                        <TopRight/>
                      </el-icon>
                    </el-text>
                    <el-text style="max-width: 270px" truncated type="info">{{ item1.describe }}</el-text>
                  </el-space>
                </el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
          <li v-else class="menu1" @click="handleMenuClick(item)">
            <el-text truncated>{{ item.name }}</el-text>
          </li>
        </template>
      </template>
    </ul>
    <ul style="float: right">
      <template v-if="menu.length > 0">
        <el-dropdown>
          <li class="menu2">
            <el-text truncated>
              <el-icon size="24">
                <Menu/>
              </el-icon>
            </el-text>
          </li>
          <template #dropdown>
            <el-dropdown-menu>
              <template v-for="(item, index) in menu" :key="index">
                <el-dropdown-item v-if="!item.children || item.children.length === 0"
                                  @click="handleMenuClick(item)">
                  {{ item.name }}
                </el-dropdown-item>
                <template v-for="(item1) in item.children" :key="item1.route">
                  <el-dropdown-item @click="handleMenuClick(item1)">
                    {{ item1.name }}
                  </el-dropdown-item>
                </template>
              </template>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </template>
      <li class="text menu3" style="padding: 0">
        <slot name="search"></slot>
      </li>
      <li class="menu3" style="padding: 0">
        <el-dropdown trigger="hover" @command="handleLanguageChange">
          <el-icon class="dropdown-icon" size="20" style="padding: 20px">
            <VeEnglishToChinese/>
          </el-icon>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item :disabled="_language === 'zhCn'" command="zhCn">
                <el-icon>
                  <VeLetterChineseA/>
                </el-icon>
                {{ content.chinese[language] }}
              </el-dropdown-item>
              <el-dropdown-item :disabled="_language === 'en'" command="en">
                <el-icon>
                  <VeEnglishInput/>
                </el-icon>
                {{ content.english[language] }}
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </li>
      <li class="text menu3">
        <div class="night">
          <el-switch
              v-model="_dark"
              :active-icon="VeMdCloudyNight"
              :inactive-icon="VeSunny"
              inline-prompt
              size="default"
              @change="handleNightChange"
          />
        </div>
      </li>
      <li v-if="username" class="text menu3">
        <ve-user-info
            :avatar="avatar"
            :language="_language"
            :list="list"
            :username="username"
            @handle-click="handleUserClick"
            @handle-sign-out="signOut"></ve-user-info>
      </li>
      <li v-else class="text menu3">
        <ve-default-login
            :avatar="avatar"
            :language="_language" @handle-login="handleLogin"
            @handle-register="handleRegister"></ve-default-login>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.header {
  height: 59px;
  border-bottom: 1px solid var(--el-border-color);
  display: flex;
  justify-content: space-between;

  .logo {
    .el-image {
      height: 40px;
      width: 40px;
    }

    .logo-text {
      width: 200px;
      font-size: 20px;
    }
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;

    li {
      .el-icon {
        font-size: 20px;
        color: var(--el-text-color-primary);
      }

      padding: 0 20px;
      display: flex;
      align-items: center;

      &:hover:not(.text) {
        background-color: var(--el-color-primary-light-9);
        cursor: pointer;
      }
    }
  }

  //禁止选中
  .noSelect {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  //去掉浏览器 :focus 黑边
  :focus-visible {
    outline: none;
  }
}

.popper-class {
  .el-card {
    border: none;
    cursor: pointer;
    border-radius: 8px;

    .title {
      font-size: 18px;
      margin-bottom: 10px;
    }

    &:hover {
      background-color: var(--el-color-primary-light-9);
    }
  }
}

.menu2 {
  display: none !important;
}

@media screen and (max-width: 1365px) {
  .menu1 {
    display: none !important;
  }
  .menu2 {
    display: flex !important;
  }
}

@media screen and (max-width: 650px) {
  .menu1, .menu3 {
    display: none !important;
  }
  .menu2 {
    display: flex !important;
  }
}
</style>
