<script lang="ts" setup>
import {ElCol, ElImage, ElLink, ElRow, ElText} from 'element-plus'
import 'element-plus/es/components/col/style/css'
import 'element-plus/es/components/image/style/css'
import 'element-plus/es/components/link/style/css'
import 'element-plus/es/components/row/style/css'
import 'element-plus/es/components/text/style/css'

import {PropType, reactive} from 'vue'

defineProps({
  // 语言 'zhCn'|'en'
  language: {
    type: String as PropType<'zhCn' | 'en'>,
    required: false,
    default: () => 'zhCn'
  }
})

const content = reactive<any>([
  {
    zhCn: '产品',
    en: 'product',
    list: [
      {
        zhCn: '前端框架',
        en: 'Front-end frame',
        link: 'front-framework',
      },
      {
        zhCn: '后端框架',
        en: 'Back-end frame',
        link: 'backend-framework',
      }
    ]
  },
  {
    zhCn: '解决方案',
    en: 'solution',
    list: [
      {
        zhCn: '多租户运维平台',
        en: 'Multi-tenant O&M platform',
        link: 'solution',
      }
    ]
  },
  {
    zhCn: '支持',
    en: 'support',
    list: [
      {
        zhCn: 'API支持',
        en: 'API support',
        link: 'tutorial',
      },
      {
        zhCn: '使用说明',
        en: 'Instructions for use',
        link: 'tutorial',
      },
      {
        zhCn: '社区',
        en: 'community',
        link: 'https://bbs.csdn.net/forums/liulingfengyu',
      },
      {
        zhCn: '产品更新日志',
        en: 'Product update log',
        link: 'update-log',
      }
    ]
  },
  {
    zhCn: '关联产品',
    en: 'associated product',
    list: [
      {
        zhCn: '插件市场',
        en: 'Plug-in market',
        link: 'search',
      },
      {
        zhCn: 'element-plus-pro',
        en: 'element-plus-pro',
        link: 'https://epp.liulingfengyu.cn/',
      }
    ]
  },
  {
    zhCn: '工作室',
    en: 'studio',
    list: [
      {
        zhCn: '官方博客',
        en: 'Official blog',
        link: 'https://blog.csdn.net/qq_38036909?type=blog',
      }
    ]
  }
])

const contactUs = reactive<any>({
  zhCn: '联系我们',
  en: 'Contact us'
})

const publicAccount = reactive<any>({
  zhCn: '公众号',
  en: 'Public account'
})

const mailbox = reactive<any>({
  zhCn: '邮箱',
  en: 'mailbox'
})

const communicationGroup = reactive<any>({
  zhCn: '交流群（QQ）',
  en: 'Communication group（QQ）'
})

const emits = defineEmits(['handleClick'])

const handleClick = (link: string) => {
  emits('handleClick', link)
}
</script>

<template>
  <div class="ve-official-website-footer">
    <div class="default-layout">
      <el-row :gutter="20">
        <el-col v-for="(item, index) in content" :key="index" :lg="4" :md="4" :sm="8" :xl="4" :xs="24">
          <p><strong>{{ item[language] }}</strong></p>
          <p v-for="(o, index) in item.list" :key="index">
            <el-link @click="handleClick(o.link)">{{ o[language] }}</el-link>
          </p>
        </el-col>
        <el-col :lg="4" :md="4" :sm="8" :xl="4" :xs="24">
          <p><strong>{{ contactUs[language] }}</strong></p>
          <div class="public-account">
            <el-image
                :preview-src-list="['https://resource.liulingfengyu.cn/img/公众号二维码.jpg']"
                src="https://resource.liulingfengyu.cn/img/公众号二维码.jpg"
            />
            <div>
              <el-text>{{ publicAccount[language] }}</el-text>
            </div>
          </div>
          <p><strong>{{ mailbox[language] }}</strong></p>
          <p>
            <el-text>1305156911@qq.com</el-text>
          </p>
          <p><strong>{{ communicationGroup[language] }}</strong></p>
          <p>
            <el-text>676175491</el-text>
          </p>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.ve-official-website-footer {
  background-color: var(--el-color-primary-light-7);
  box-shadow: var(--el-box-shadow-lighter);
  text-align: center;
  padding: 30px 15%;

  .public-account {
    display: inline-block;
    text-align: center;

    .el-image {
      height: 100px;
      width: 100px;
      border-radius: 5px
    }
  }
}
</style>
