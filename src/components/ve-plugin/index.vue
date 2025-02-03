<script lang="ts" setup>
import {PropType, reactive} from "vue";
import {ElDivider, ElSpace, ElText} from 'element-plus'
import 'element-plus/es/components/text/style/css'
import 'element-plus/es/components/space/style/css'
import 'element-plus/es/components/divider/style/css'

const props = defineProps({
  id: {
    type: String,
    required: true
  },
  language: {
    type: String as PropType<'zhCn' | 'en' | string>,
    required: false,
    default: () => 'zhCn'
  },
})

const emits = defineEmits(['handleClick'])

const handleClick = () => {
  emits('handleClick', props.id)
}

const content = reactive<any>({
  author: {
    zhCn: '作者',
    en: 'Author'
  },
  releaseTime: {
    zhCn: '发布时间',
    en: 'Release time'
  },
  clickVolume: {
    zhCn: '点击量',
    en: 'Click volume'
  },
  readingQuantity: {
    zhCn: '阅读量',
    en: 'Reading quantity'
  },
  download: {
    zhCn: '下载',
    en: 'Download'
  },
  comment: {
    zhCn: '评论',
    en: 'Comment'
  },
  collect: {
    zhCn: '收藏',
    en: 'collect'
  },
  originalPrice: {
    zhCn: '原价',
    en: 'originalPrice'
  },
  currentPrice: {
    zhCn: '现价',
    en: 'currentPrice'
  },
  salesVolume: {
    zhCn: '销量',
    en: 'Sales volume'
  }
})
</script>

<template>
  <div class="ve-plugin">
    <div class="plugin">
      <el-space size="large">
        <div class="plugin-preview">
          <slot name="preview"/>
        </div>
        <div class="plugin-main" @click="handleClick">
          <p class="text-flow-ellipsis-multiple_1">
            <strong>
              <slot name="title"/>
            </strong>
          </p>
          <p>
            <el-space>
              <slot name="tag"/>
            </el-space>
          </p>
          <p class="text-flow-ellipsis-multiple_2" style="height: 39px">
            <el-text type="info">
              <slot name="description"/>
            </el-text>
          </p>
          <p>
            <el-space size="large">
              <el-space>
                <el-text type="info">{{ content.author[language] }}</el-text>
                <el-text type="info">
                  <slot name="author"/>
                </el-text>
              </el-space>
              <el-space>
                <el-text truncated type="info">{{ content.releaseTime[language] }}</el-text>
                <el-text truncated type="info">
                  <slot name="releaseTime"/>
                </el-text>
              </el-space>
            </el-space>
          </p>
          <el-space>
            <el-space>
              <el-text truncated type="info">{{ content.clickVolume[language] }}</el-text>
              <el-text truncated type="info">
                <slot name="clickVolume"/>
              </el-text>
            </el-space>
            <el-space>
              <el-text truncated type="info">{{ content.readingQuantity[language] }}</el-text>
              <el-text truncated type="info">
                <slot name="readingQuantity"/>
              </el-text>
            </el-space>
            <el-space>
              <el-text truncated type="info">{{ content.download[language] }}</el-text>
              <el-text truncated type="info">
                <slot name="download"/>
              </el-text>
            </el-space>
            <el-space>
              <el-text truncated type="info">{{ content.comment[language] }}</el-text>
              <el-text truncated type="info">
                <slot name="comment"/>
              </el-text>
            </el-space>
            <el-space>
              <el-text truncated type="info">{{ content.collect[language] }}</el-text>
              <el-text truncated type="info">
                <slot name="collect"/>
              </el-text>
            </el-space>
            <el-space>
              <el-text truncated type="info">{{ content.originalPrice[language] }}</el-text>
              <el-text truncated type="info">
                <slot name="originalPrice"/>
              </el-text>
            </el-space>
            <el-space>
              <el-text truncated type="danger">{{ content.currentPrice[language] }}</el-text>
              <el-text truncated type="danger">
                <slot name="currentPrice"/>
              </el-text>
            </el-space>
            <el-space>
              <el-text truncated type="info">{{ content.salesVolume[language] }}</el-text>
              <el-text truncated type="info">
                <slot name="salesVolume"/>
              </el-text>
            </el-space>
            <el-space>
              <slot name="buy"></slot>
            </el-space>
          </el-space>
        </div>
      </el-space>

    </div>
    <el-divider class="plugin-divider"></el-divider>
  </div>
</template>

<style lang="scss" scoped>
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
      background-color: var(--el-fill-color-lighter);
    }
  }

  .plugin-divider {
    margin: 0;
    border-color: var(--el-border-color);
  }
}

//一行省略
.text-flow-ellipsis-multiple_1 {
  /* 多余内容省略号处理-多行 */
  word-break: break-all;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
}

//一行省略
.text-flow-ellipsis-multiple_2 {
  /* 多余内容省略号处理-多行 */
  word-break: break-all;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
</style>
