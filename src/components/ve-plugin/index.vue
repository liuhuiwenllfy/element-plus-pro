<!--
插件排版（插件市场专用）
-->
<script lang="ts" setup>

import {useI18n} from "vue-i18n";
import {useRouter} from "vue-router";
import {PluginInfoPageClientVo} from "@/entity/vo/plugIn/PluginInfoPageClientVo";
import {openCurrentUrl, spliceMongodbUrl} from "@/assets/js/common";

const prop = defineProps({
  data: {
    type: Object as () => PluginInfoPageClientVo,
    required: true,
    default: () => {
    }
  }
})

const {t} = useI18n()

const router = useRouter();
</script>

<template>
  <div class="ve-plugin">
    <div class="plugin">
      <el-space size="large">
        <ve-preview :list="data.pictureList.map(picture => spliceMongodbUrl(picture.url))" class="plugin-preview"/>
        <div class="plugin-main" @click="openCurrentUrl('plugin-details', {id: data.id})">
          <p class="text-flow-ellipsis-multiple_1"><strong>{{ data.pluginName }}</strong></p>
          <p>
            <el-space>
              <el-tag v-for="(item, index) in data.labelList" :key="index" round>{{ item }}</el-tag>
            </el-space>
          </p>
          <p class="text-flow-ellipsis-multiple_2" style="height: 39px">
            <el-text type="info">{{ data.pluginDescription }}</el-text>
          </p>
          <p>
            <el-space size="large">
              <el-space>
                <el-text type="info">{{ $t('message.author') }}</el-text>
                <el-text type="info">{{ data.updateUserName }}</el-text>
              </el-space>
              <el-space>
                <el-text truncated type="info">{{ $t('message.updated') }}</el-text>
                <el-text truncated type="info">{{ data.updateTime }}</el-text>
              </el-space>
            </el-space>
          </p>
          <p>
            <el-space>
              <el-text truncated type="info">{{ data.showNum }}</el-text>
              <el-text truncated type="info">{{ $t('message.showNum') }}</el-text>
            </el-space>
            <el-space>
              <el-text truncated type="info">{{ data.readNum }}</el-text>
              <el-text truncated type="info">{{ $t('message.readNum') }}</el-text>
            </el-space>
            <el-space>
              <el-text truncated type="info">{{ data.download }}</el-text>
              <el-text truncated type="info">{{ $t('message.download') }}</el-text>
            </el-space>
            <el-space>
              <el-text truncated type="info">{{ data.comment }}</el-text>
              <el-text truncated type="info">{{ $t('message.comment') }}</el-text>
            </el-space>
            <el-space>
              <el-text truncated type="info">{{ data.collect }}</el-text>
              <el-text truncated type="info">{{ $t('message.collect') }}</el-text>
            </el-space>
          </p>
        </div>
      </el-space>

    </div>
    <el-divider class="plugin-divider"></el-divider>
  </div>
</template>

<style lang="less" scoped>
.ve-plugin {

  .plugin {
    padding: 10px;

    .plugin-preview {
      width: 200px;
      height: 200px;
    }

    .plugin-main {
      cursor: pointer;
    }

    &:hover {
      background-color: @lighter-fill;
    }
  }

  .plugin-divider {
    margin: 0;
    border-color: @base-border;
  }
}
</style>
