<script lang="ts" setup>
import {ElPopover, ElScrollbar, ElTabPane, ElTabs, ElText} from 'element-plus'
import 'element-plus/es/components/tabs/style/css'
import 'element-plus/es/components/tab-pane/style/css'
import 'element-plus/es/components/scrollbar/style/css'
import 'element-plus/es/components/text/style/css'
import 'element-plus/es/components/popover/style/css'
import 'element-plus/es/components/input/style/css'
import 'element-plus/es/components/button/style/css'
import {ref} from "vue";

const list = [
  '😀',
  '😃',
  '😄',
  '😁',
  '😆',
  '😅',
  '🤣',
  '😂',
  '🙂',
  '🙃',
  '🫠',
  '😉',
  '😊',
  '😇',
  '🥰',
  '😍',
  '🤩',
  '😘',
  '😗',
  '😚',
  '😙',
  '🥲',
  '😋',
  '😛',
  '😜',
  '🤪',
  '😝',
  '🤑',
  '🤗',
  '🤭',
  '🫢',
  '🫣',
  '🤫',
  '🤔',
  '🫡',
  '🤐',
  '🤨',
  '😐',
  '😑',
  '😶',
  '🫥',
  '😶‍🌫️',
  '😏',
  '😒',
  '🙄',
  '😬',
  '😮‍💨',
  '🤥',
  '🫨',
  '😌',
  '😔',
  '😪',
  '🤤',
  '😴',
  '😷',
  '🤒',
  '🤕',
  '🤢',
  '🤮',
  '🤧',
  '🥵',
  '🥶',
  '🥴',
  '😵',
  '😵‍💫',
  '🤯',
  '🤠',
  '🥳',
  '🥸',
  '😎',
  '🤓',
  '🧐',
  '😕',
  '🫤',
  '😟',
  '🙁',
  '☹',
  '😮',
  '😯',
  '😲',
  '😳',
  '🥺',
  '🥹',
  '😦',
  '😧',
  '😨',
  '😰',
  '😥',
  '😢',
  '😭',
  '😱',
  '😖',
  '😣',
  '😞',
  '😓',
  '😩',
  '😫',
  '🥱',
  '😤',
  '😡',
  '😠',
  '🤬',
  '😈',
  '👿',
  '💀',
  '☠',
  '💩',
  '🤡',
  '👹',
  '👺',
  '👻',
  '👽',
  '👾',
  '🤖',
  '😺',
  '😸',
  '😹',
  '😻',
  '😼',
  '😽',
  '🙀',
  '😿',
  '😾',
  '🙈',
  '🙉',
  '🙊',
  '💌',
  '💘',
  '💝',
  '💖',
  '💗',
  '💓',
  '💞',
  '💕',
  '💟',
  '❣',
  '💔',
  '❤️‍🔥',
  '❤️‍🩹',
  '❤',
  '🧡',
  '💛',
  '🩷',
  '💚',
  '💙',
  '💜',
  '🤎',
  '🖤',
  '🤍',
  '🩵',
  '🩶',
  '💋',
  '💯',
  '💢',
  '💥',
  '💫',
  '💦',
  '💨',
  '🕳️',
  '💬',
  '👁️‍🗨️',
  '🗨️',
  '🗯️',
  '💭',
  '💤',
]

const activeName = ref('emote')

const emits = defineEmits(['change'])

const handleClick = (val: string) => {
  emits('change', val)
}
</script>

<template>
  <el-popover
      :width="476"
      placement="bottom"
      trigger="click">
    <el-tabs v-model="activeName">
      <el-tab-pane label="表情" name="emote">
        <el-scrollbar height="300">
          <el-text v-for="(item, index) in list"
                   :key="index"
                   class="emoji"
                   @click="handleClick(item)">{{ item }}
          </el-text>
        </el-scrollbar>
      </el-tab-pane>
    </el-tabs>
    <template #reference>
      <slot name="default"></slot>
    </template>
  </el-popover>
</template>

<style lang="scss" scoped>
.emoji {
  cursor: pointer;
  font-size: 30px;

  &:hover {
    border-radius: 4px;
    border: 1px solid var(--el-border-color);
    font-size: 28px;
  }
}
</style>
