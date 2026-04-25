<script lang="ts" setup>

import VePage from '@/components/ve-page/index.vue'
import VeMdEditor from '@/components/ve-md-editor/ve-md-editor/index.vue'
import VeMdPreview from '@/components/ve-md-editor/ve-md-preview/index.vue'
import {ref} from "vue";
import {useCommonStore} from "@/pinia/common.ts";
import readme from './index.md?raw'
import json from '@/components/ve-md-editor/package.json'
import {Anchor} from "@/components/ve-anchor/Anchor.ts";
import VeAnchor from '@/components/ve-anchor/index.vue'

const _value = ref('# **1024程序员节：致敬数字世界的创造者**  \n' +
    '\n' +
    '每年的**10月24日**，是中国互联网行业特有的节日——**“1024程序员节”**。这个节日源于计算机科学中的二进制世界（因为 \\(2^{10} = 1024\\)，是计算机存储容量的重要单位），逐渐演变成程序员们自嘲、庆祝和放松的日子。  \n' +
    '\n' +
    '---\n' +
    '\n' +
    '## **一、1024节的由来**  \n' +
    '### **1. 1024的计算机意义**  \n' +
    '在计算机领域，1024 是一个特殊的数字：  \n' +
    '- **1 KB = 1024 Bytes**（二进制存储单位）  \n' +
    '- **1 MB = 1024 KB**  \n' +
    '- **1 GB = 1024 MB**  \n' +
    '因此，1024 象征着计算机科学的基础，也是程序员日常工作的核心。  \n' +
    '\n' +
    '### **2. 中国程序员的自创节日**  \n' +
    '由于程序员长期加班、熬夜写代码，中国互联网从业者自发将 **10月24日** 定为“程序员节”，既是对职业的认可，也是一种幽默的自嘲。  \n' +
    '\n' +
    '---\n' +
    '\n' +
    '## **二、程序员节的庆祝方式**  \n' +
    '1024节虽然没有法定假期，但程序员们会用各种有趣的方式庆祝：  \n' +
    '1. **公司福利**  \n' +
    '   - 部分互联网公司会发放 **1024元红包**、**零食大礼包** 或 **弹性放假**。  \n' +
    '   - 老板请客吃饭，或者组织技术分享会。  \n' +
    '\n' +
    '2. **程序员专属梗**  \n' +
    '   - **“Hello World”蛋糕**（程序员的第一个程序）  \n' +
    '   - **“代码无 Bug”祈福**（虽然基本不可能）  \n' +
    '   - **“格子衫派对”**（程序员的经典穿搭）  \n' +
    '\n' +
    '3. **网络狂欢**  \n' +
    '   - 社交媒体上刷屏 **#1024程序员节#** 话题。  \n' +
    '   - GitHub、CSDN、掘金等技术社区会有特别活动。  \n' +
    '\n' +
    '---\n' +
    '\n' +
    '## **三、程序员的幽默与自嘲**  \n' +
    '1024节不仅是庆祝，也是程序员们调侃自己的机会：  \n' +
    '- **“面向对象编程”**（指面向工资编程）  \n' +
    '- **“产品经理和程序员的关系”**（相爱相杀）  \n' +
    '- **“程序员的头发”**（日渐稀疏的梗）  \n' +
    '\n' +
    '---\n' +
    '\n' +
    '## **四、致敬每一位程序员**  \n' +
    '程序员是数字世界的建筑师，他们用代码改变世界：  \n' +
    '- **开发软件**（微信、支付宝、抖音等）  \n' +
    '- **推动AI发展**（ChatGPT、自动驾驶）  \n' +
    '- **维护网络安全**（防火墙、加密技术）  \n' +
    '\n' +
    '在1024节这一天，不妨对你的程序员朋友说一句：  \n' +
    '**“辛苦了，你的代码真棒！（虽然可能有 Bug）”**  \n' +
    '\n' +
    '---\n' +
    '\n' +
    '## **五、结语**  \n' +
    '1024节不仅是一个节日，更是对程序员辛勤付出的认可。无论是996、脱发，还是改不完的需求，程序员们依然用代码书写未来。  \n' +
    '\n' +
    '**祝所有程序员：**  \n' +
    '**代码无 Bug，需求不改稿，头发永不掉！🎉**  \n' +
    '\n' +
    '（P.S. 如果你是程序员，今天记得摸鱼庆祝！）  \n' +
    '\n' +
    '---\n' +
    '\n' +
    '### **相关趣味内容**  \n' +
    '- **程序员专属笑话**：  \n' +
    '  > 问：程序员最讨厌的天气是什么？  \n' +
    '  > 答：**“NaN”**（Not a Number，不是数字）  \n' +
    '\n' +
    '- **1024节礼物推荐**：机械键盘、升降桌、防脱洗发水……  \n' +
    '\n' +
    '希望这篇文章能让你更了解1024节！如果你是程序员，祝你节日快乐！💻🎉')
const stats = [
  {
    name: 'editorId',
    instructions: '唯一标识',
    type: 'string',
    optional: '-',
    default: 'md-ve-editor-v3',
  },
  {
    name: 'modelValue',
    instructions: '内容',
    type: 'string',
    optional: '-',
    default: '-',
  },
  {
    name: 'showCodeRowNumber',
    instructions: '代码区域是否展示行号',
    type: 'boolean',
    optional: 'true-是；false-否',
    default: 'false',
  },
  {
    name: 'previewTheme',
    instructions: '主题',
    type: 'string',
    optional: 'default，github，vuepress，mk-cute，smart-blue，cyanosis',
    default: 'github',
  },
  {
    name: 'noMermaid',
    instructions: '是否用图表展示内容',
    type: 'boolean',
    optional: 'true-是；false-否',
    default: 'false',
  },
  {
    name: 'codeTheme',
    instructions: '代码样式',
    type: 'string',
    optional: 'atom，a11y，github，gradient，kimbie，paraiso，qtcreator，stackoverflow',
    default: 'github',
  },
  {
    name: 'placeholder',
    instructions: '占位信息',
    type: 'string',
    optional: '-',
    default: '请输入...',
  },
  {
    name: 'footers',
    instructions: '页脚',
    type: 'array<Footers>',
    optional: '-',
    default: '[]',
  },
  {
    name: 'noUploadImg',
    instructions: '是否显示上传图片',
    type: 'boolean',
    optional: 'true-是；false-否',
    default: 'false',
  },
  {
    name: 'maxLength',
    instructions: '内容长度限制',
    type: 'number',
    optional: '-',
    default: '65535',
  },
  {
    name: 'showToolbarName',
    instructions: '是否显示按钮文字',
    type: 'boolean',
    optional: 'true-是；false-否',
    default: 'false',
  },
  {
    name: 'uploadUrl',
    instructions: '上传地址',
    type: 'string',
    optional: '-',
    default: '-',
  },
  {
    name: 'authorization',
    instructions: '上传token',
    type: 'string',
    optional: '-',
    default: '-',
  },
  {
    name: 'addressPrefix',
    instructions: '上传展示地址前缀',
    type: 'string',
    optional: '-',
    default: '-',
  },
  {
    name: 'language',
    instructions: '国际化',
    type: 'string',
    optional: 'zh-CN，en-US',
    default: 'zh-CN',
  },
  {
    name: 'theme',
    instructions: '夜间模式',
    type: 'string',
    optional: 'dark，light',
    default: 'dark',
  },
  {
    name: 'idPrefix',
    instructions: '锚点前缀',
    type: 'string',
    optional: '-',
    default: 'anchor-',
  }
]

const incident = [
  {
    name: 'getText',
    instructions: '通过ref主动获取文本',
    callback: 'modelValue',
  },
]

const commonStore = useCommonStore();

const items = ref<Anchor[]>([])
</script>

<template>
  <ve-page :incident="incident" :json="json" :readme="readme" :stats="stats">
    <template #default>
      <h3>编辑区域</h3>
      <ve-md-editor :model-value="_value" :theme="commonStore.getDark? 'dark':'light'"></ve-md-editor>
      <h3>预览区域</h3>
      <ve-anchor :items="items">
        <template #default>
          <ve-md-preview :model-value="_value" :theme="commonStore.getDark? 'dark':'light'"
                         @on-get-catalog="items = $event"></ve-md-preview>
        </template>
      </ve-anchor>
    </template>
  </ve-page>
</template>

<style lang="scss" scoped>

</style>
