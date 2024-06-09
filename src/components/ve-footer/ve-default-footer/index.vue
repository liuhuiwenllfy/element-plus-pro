<script lang="ts" setup>

import {ElImage, ElLink, ElSpace, ElText} from 'element-plus'
import 'element-plus/es/components/image/style/css'
import 'element-plus/es/components/link/style/css'
import 'element-plus/es/components/space/style/css'
import 'element-plus/es/components/text/style/css'

defineProps({
  nationalEmblem: {
    type: String,
    required: false,
    default: () => 'https://resource.liulingfengyu.cn/img/备案图标.png'
  },
  publicNetworkSecureLink: {
    type: String,
    required: false,
    default: () => 'https://beian.mps.gov.cn/#/query/webSearch?code=12010302002465'
  },
  publicNetworkSecureTitle: {
    type: String,
    required: false,
    default: () => '津公网安备12010302002465'
  },
  copyright: {
    type: String,
    required: false,
    default: () => 'Copyright © 2023 刘凌枫羽工作室所有'
  },
  icpReserveLink: {
    type: String,
    required: false,
    default: () => 'https://beian.miit.gov.cn'
  },
  icpReserve: {
    type: String,
    required: false,
    default: () => '津ICP备2023000715号-1'
  },
})
</script>

<template>
  <div class="ve-footer">
    <el-space>
      <el-space v-if="publicNetworkSecureLink && publicNetworkSecureTitle">
        <el-image :src="nationalEmblem" style="width: 16px; height: 17px"></el-image>
        <el-link :href="publicNetworkSecureLink" rel="noreferrer" target="_blank">{{ publicNetworkSecureTitle }}
        </el-link>
      </el-space>
      <el-text v-if="copyright" size="default" type="info">{{ copyright }}</el-text>
      <el-link v-if="icpReserveLink && icpReserve" :href="icpReserveLink">{{ icpReserve }}</el-link>
    </el-space>
  </div>
</template>

<style lang="scss" scoped>
.ve-footer {
  box-shadow: var(--el-box-shadow-lighter);
  text-align: center;
  padding: 19px;
}
</style>
