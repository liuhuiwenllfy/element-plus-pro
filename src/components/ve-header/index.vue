<script lang="ts" setup>
import FullScreen from './ve-full-screen/index.vue'
import Menu from './ve-menu/index.vue'
import {PropType, reactive, ref, watch} from 'vue'
import {
  ElAvatar,
  ElBadge,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu,
  ElIcon,
  ElImage,
  ElSpace,
  ElSwitch,
  ElText
} from "element-plus";
import {MenuInfoShowVo} from "./MenuInfoShowVo";
import {
  VeBell,
  VeBoxLarge,
  VeBoxMedium,
  VeBoxSmall,
  VeEnglishInput,
  VeEnglishToChinese,
  VeLetterChineseA,
  VeLogOut,
  VeMdCloudyNight,
  VeMenuFoldOutlined,
  VeMenuUnfoldOutlined,
  VeOutlineFormatSize,
  VeSunny
} from 've-icon/components'
import 'element-plus/es/components/icon/style/css'
import 'element-plus/es/components/dropdown/style/css'
import 'element-plus/es/components/dropdown-menu/style/css'
import 'element-plus/es/components/dropdown-item/style/css'
import 'element-plus/es/components/avatar/style/css'
import 'element-plus/es/components/space/style/css'
import 'element-plus/es/components/text/style/css'
import 'element-plus/es/components/image/style/css'
import 'element-plus/es/components/breadcrumb/style/css'
import 'element-plus/es/components/breadcrumb-item/style/css'
import 'element-plus/es/components/switch/style/css'
import 'element-plus/es/components/badge/style/css'
import {DropdownItem} from "./DropdownItem";

import {MoreFilled} from '@element-plus/icons-vue'

const props = defineProps({
  menu: {
    type: Array<MenuInfoShowVo>,
    required: false,
    default: () => []
  },
  sidebar: {
    type: Boolean,
    required: false,
    default: () => false
  },
  defaultActive: {
    type: String,
    required: false,
    default: () => ''
  },
  layout: {
    type: Number as PropType<1 | 2 | 3 | 4 | 5 | 6 | 7>,
    required: false,
    default: () => 7
  },
  language: {
    type: String as PropType<'zhCn' | 'en'>,
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
  navigation: {
    type: String,
    required: false,
    default: () => ''
  },
  tenantName: {
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
  fullScreen: {
    type: Boolean,
    required: false,
    default: () => false
  },
  globalSize: {
    type: String,
    required: false,
    default: () => 'default'
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
})

const emits = defineEmits([
  'handleCollapseChange',
  'handleNewsChange',
  'handleFullScreenChange',
  'handleGlobalSizeChange',
  'handleLanguageChange',
  'handleUserClick',
  'handleSignOut',
  'handleNightChange',
  'handleGlobalSettingClick',
  'handleDefaultActiveChange'
])

const _sidebar = ref(props.sidebar)

watch(() => props.sidebar, () => {
  _sidebar.value = props.sidebar
})

const handleCollapseChange = () => {
  _sidebar.value = !_sidebar.value
  emits('handleCollapseChange', _sidebar.value)
}

const _defaultActive = ref(props.defaultActive)

const handleDefaultActiveChange = (defaultActive: string) => {
  _defaultActive.value = defaultActive
  emits('handleDefaultActiveChange', _defaultActive.value)
}

const _drawerNews = ref(props.drawerNews)

const handleNewsChange = () => {
  _drawerNews.value = !_drawerNews.value
  emits('handleNewsChange', _drawerNews.value)
}

const _fullScreen = ref(props.fullScreen)

const handleFullScreenChange = (fullScreen: boolean) => {
  _fullScreen.value = fullScreen
  emits('handleFullScreenChange', _fullScreen.value)
}

const _globalSize = ref(props.globalSize)

const handleGlobalSizeChange = (command: string) => {
  _globalSize.value = command
  emits('handleGlobalSizeChange', command)
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

const handleGlobalSettingClick = async () => {
  emits('handleGlobalSettingClick')
}

const content = reactive({
  home: {
    zhCn: '首页',
    en: 'Home'
  },
  large: {
    zhCn: '较大',
    en: 'Large'
  },
  default: {
    zhCn: '默认',
    en: 'Default'
  },
  small: {
    zhCn: '较小',
    en: 'Small'
  },
  chinese: {
    zhCn: '中文',
    en: 'chinese'
  },
  english: {
    zhCn: '英文',
    en: 'english'
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
    en: 'logout'
  }
})
</script>

<template>
  <div class="header noSelect">
    <ul>
      <li v-show="[1,2,4,5].includes(layout)" class="text header-left-li-logo">
        <el-space class="logo">
          <el-image :src="logo"/>
          <strong class="logo-text">{{ name }}</strong>
        </el-space>
      </li>
      <li v-show="[4,5,6,7].includes(layout)" @click="handleCollapseChange">
        <el-icon size="20">
          <VeMenuFoldOutlined v-show="!_sidebar"/>
          <VeMenuUnfoldOutlined v-show="_sidebar"/>
        </el-icon>
      </li>
      <li v-show="[4,5,6,7].includes(layout)" class="text">
        <div class="breadcrumb">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item to="/">
              <span>{{ content.home[language] }}</span>
            </el-breadcrumb-item>
            <el-breadcrumb-item>
              <span>{{ navigation }}</span>
            </el-breadcrumb-item>
          </el-breadcrumb>
        </div>
      </li>
      <li v-show="[1,2].includes(layout)" class="text menu">
        <Menu :default-active="defaultActive"
              :language="language"
              :menu-data="menu"
              @handle-default-active-change="handleDefaultActiveChange"
        />
      </li>
    </ul>
    <ul class="header-right-ul" style="float: right">
      <li class="text">
        <el-text size="default" truncated type="info">
          {{ tenantName }}
        </el-text>
      </li>
      <li @click="handleNewsChange">
        <el-badge :hidden="newsNum === 0" :value="newsNum">
          <el-icon>
            <VeBell/>
          </el-icon>
        </el-badge>
      </li>
      <li>
        <FullScreen :full-screen="_fullScreen" @handle-full-screen="handleFullScreenChange"/>
      </li>
      <li>
        <el-dropdown trigger="hover" @command="handleGlobalSizeChange">
        <span>
          <el-icon size="20"><VeOutlineFormatSize/></el-icon>
        </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item :disabled="_globalSize === 'large'" command="large">
                <el-icon>
                  <VeBoxLarge/>
                </el-icon>
                {{ content.large[language] }}
              </el-dropdown-item>
              <el-dropdown-item :disabled="_globalSize === 'default'" command="default">
                <el-icon>
                  <VeBoxMedium/>
                </el-icon>
                {{ content.default[language] }}
              </el-dropdown-item>
              <el-dropdown-item :disabled="_globalSize === 'small'" command="small">
                <el-icon>
                  <VeBoxSmall/>
                </el-icon>
                {{ content.small[language] }}
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </li>
      <li>
        <el-dropdown trigger="hover" @command="handleLanguageChange">
        <span>
          <el-icon style="font-size: 20px">
            <VeEnglishToChinese/>
          </el-icon>
        </span>
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
      <li>
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
      <li>
        <el-dropdown trigger="hover">
          <el-text class="el-dropdown-link" truncated>
            <el-space>
              <el-avatar :src="avatar"/>
              <el-text type="info">{{ username }}</el-text>
            </el-space>
          </el-text>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item v-for="(item, index) in list" :key="index" @click="handleUserClick(item.code)">
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
      </li>
      <li>
        <div class="global-setting" @click="handleGlobalSettingClick">
          <el-icon>
            <MoreFilled/>
          </el-icon>
        </div>
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

  .breadcrumb {
    line-height: 19px;

    span {
      cursor: pointer;
    }
  }

  ul:not(.menu) {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;

    li {
      .el-icon {
        font-size: 20px;
      }

      padding: 0 20px;
      display: flex;
      align-items: center;

      &:hover:not(.text) {
        background-color: var(--el-menu-hover-bg-color);
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
</style>
