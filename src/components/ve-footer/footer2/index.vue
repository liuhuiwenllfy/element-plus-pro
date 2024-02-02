<!--
网站页脚
-->
<script lang="ts" setup>
import {store} from "@/vuex/store";
import {useI18n} from "vue-i18n";
import {computed, reactive} from "vue";
import {routerPushOfName} from "@/assets/js/common";

const {t} = useI18n()

const product = computed(() => {
  return reactive([
    {
      title: t('portal.footer_product_title1'),
      link: 'front-framework',
    },
    {
      title: t('portal.footer_product_title2'),
      link: 'backend-framework',
    }
  ])
})

const solution = computed(() => {
  return reactive([
    {
      title: t('portal.footer_solution_title1'),
      link: 'solution',
    }
  ])
})

const support = computed(() => {
  return reactive([
    {
      title: t('portal.footer_support_title1'),
      link: 'tutorial',
    },
    {
      title: t('portal.footer_support_title2'),
      link: 'tutorial',
    },
    {
      title: t('portal.footer_support_title3'),
      link: 'https://bbs.csdn.net/forums/liulingfengyu',
    },
    {
      title: t('portal.footer_support_title4'),
      link: 'update-log',
    },
  ])
})

const relatedProducts = computed(() => {
  return reactive([
    {
      title: t('portal.footer_relatedProducts_title1'),
      link: 'search',
    }
  ])
})

const studio = computed(() => {
  return reactive([
    {
      title: t('portal.footer_studio_title1'),
      link: 'https://blog.csdn.net/qq_38036909?type=blog',
    },
    {
      title: t('portal.footer_studio_title2'),
      link: 'https://www.zhihu.com/people/xi-li-ge-99-49',
    },
  ])
})
</script>

<template>
  <div class="footer2">
    <div :style="{paddingLeft: ['default'].includes(store.state.responsiveLayout)?'15%':'20px',paddingRight: ['default'].includes(store.state.responsiveLayout)?'15%':'20px'}" style="padding-top: 30px; text-align: center">
      <el-row :gutter="20">
        <el-col :lg="4" :md="4" :sm="4" :xl="4" :xs="24">
          <p><strong>{{ $t('portal.footer_header_title1') }}</strong></p>
          <p v-for="(item, index) in product" :key="index">
            <el-link :underline="false" @click="routerPushOfName(item.link)">
              <el-text>{{ item.title }}</el-text>
            </el-link>
          </p>
        </el-col>
        <el-col :lg="4" :md="4" :sm="4" :xl="4" :xs="24">
          <p><strong>{{ $t('portal.footer_header_title2') }}</strong></p>
          <p v-for="(item, index) in solution" :key="index">
            <el-link :underline="false" @click="routerPushOfName(item.link)">
              <el-text>{{ item.title }}</el-text>
            </el-link>
          </p>
        </el-col>
        <el-col :lg="4" :md="4" :sm="4" :xl="4" :xs="24">
          <p><strong>{{ $t('portal.footer_header_title3') }}</strong></p>
          <p v-for="(item, index) in support" :key="index">
            <el-link :underline="false" @click="routerPushOfName(item.link)">
              <el-text>{{ item.title }}</el-text>
            </el-link>
          </p>
        </el-col>
        <el-col :lg="4" :md="4" :sm="4" :xl="4" :xs="24">
          <p><strong>{{ $t('portal.footer_header_title4') }}</strong></p>
          <p v-for="(item, index) in relatedProducts" :key="index">
            <el-link :underline="false" @click="routerPushOfName(item.link)">
              <el-text>{{ item.title }}</el-text>
            </el-link>
          </p>
        </el-col>
        <el-col :lg="4" :md="4" :sm="4" :xl="4" :xs="24">
          <p><strong>{{ $t('portal.footer_header_title5') }}</strong></p>
          <p v-for="(item, index) in studio" :key="index">
            <el-link :href="item.link" :underline="false">
              <el-text>{{ item.title }}</el-text>
            </el-link>
          </p>
        </el-col>
        <el-col :lg="4" :md="4" :sm="4" :xl="4" :xs="24">
          <p><strong>{{ $t('portal.footer_contactUs_title1') }}</strong></p>
          <div style="display: inline-block;text-align: center">
            <el-image src="https://resource.liulingfengyu.cn/img/公众号二维码.jpg"
                      style="height: 100px; width: 100px; border-radius: 5px"></el-image>
            <div>
              <el-text>{{ $t('portal.footer_contactUs_title1') }}</el-text>
            </div>
          </div>
          <p><strong>{{ $t('portal.footer_contactUs_title2') }}</strong></p>
          <p>
            <el-text>1305156911@qq.com</el-text>
          </p>
          <p><strong>{{ $t('portal.footer_contactUs_title3') }}</strong></p>
          <p>
            <el-text>676175491</el-text>
          </p>
        </el-col>
      </el-row>
    </div>
    <div class="container">
      <el-space :direction="['xs'].includes(store.state.responsiveLayout)? 'vertical':'horizontal'">
        <el-space>
          <el-image src="/img/备案图标.png" style="width: 16px; height: 17px"></el-image>
          <el-link href="https://beian.mps.gov.cn/#/query/webSearch?code=12010302002465" rel="noreferrer" target="_blank">津公网安备12010302002465</el-link>
        </el-space>
        <el-text size="default" type="info">Copyright © 2023 刘凌枫羽工作室所有</el-text>
        <el-link href="https://beian.miit.gov.cn">津ICP备2023000715号-1</el-link>
      </el-space>

    </div>
  </div>
</template>

<style lang="less" scoped>
.footer2 {
  background-color: @brand4;
  box-shadow: var(--el-box-shadow-lighter);

  .container {
    padding: 20px;
    text-align: center
  }
}
</style>
