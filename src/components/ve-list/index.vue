<script lang="ts" setup>
import {h} from 'vue'
import {ElDivider, ElSpace, ElAvatar, ElText} from 'element-plus'
import 'element-plus/es/components/divider/style/css'
import 'element-plus/es/components/space/style/css'
import 'element-plus/es/components/avatar/style/css'
import 'element-plus/es/components/text/style/css'

const props = defineProps({
  type: {
    type: String,
    required: false,
    default: () => 'list1',
    validator: (value: string) => {
      const validSizes = ['list1', 'list2', 'list3'];
      return validSizes.includes(value);
    }
  },
  data: {
    type: Object as any,
    required: true,
    default: () => {
    }
  }
})
const spacer = h(ElDivider, {direction: 'vertical'})
</script>

<template>
  <p class="ve-list">
    <el-space v-if="type === 'list1'" alignment="stretch" direction="vertical">
      <el-text class="ve-list-title">
        <el-space alignment="center">
          <el-avatar :size="40" :src="data.avatar || '/img/default.png'"></el-avatar>
          <el-space alignment="stretch" direction="vertical">
            <el-text tag="b">{{ data.name }}</el-text>
            <el-text class="description">{{ data.desc }}</el-text>
          </el-space>
        </el-space>
        <el-space :spacer="spacer">
          <slot name="operation"></slot>
        </el-space>
      </el-text>
      <el-text type="info">
        {{ data.content }}
      </el-text>
    </el-space>
    <el-space v-else-if="type === 'list2'" alignment="normal" size="large">
      <el-image :src="data.avatar || '/img/default.png'" class="list2-image" fit="cover"></el-image>
      <el-space alignment="stretch" direction="vertical">
        <el-text tag="b">{{ data.name }}</el-text>
        <el-text type="info">{{ data.desc }}</el-text>
        <el-text line-clamp="3" type="info">{{ data.content }}</el-text>
        <el-space :spacer="spacer">
          <slot name="operation"></slot>
        </el-space>
      </el-space>
    </el-space>
    <el-space v-else-if="type === 'list3'">
      <el-space alignment="stretch" direction="vertical">
        <el-text class="ve-list-title">
          <el-space alignment="center">
            <el-avatar :size="40" :src="data.avatar || '/img/default.png'"></el-avatar>
            <el-space alignment="stretch" direction="vertical">
              <el-text tag="b">{{ data.name }}</el-text>
              <el-text class="description">{{ data.desc }}</el-text>
            </el-space>
          </el-space>
        </el-text>
        <el-text type="info">
          {{ data.content }}
        </el-text>
        <el-space :spacer="spacer">
          <slot name="operation"></slot>
        </el-space>
      </el-space>
      <slot name="image"></slot>
    </el-space>
  </p>
</template>

<style lang="scss" scoped>
.ve-list {
  padding: 10px;
  border-bottom: 1px solid var(--el-border-color);

  .ve-list-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .description {
    color: var(--el-text-color-secondary);
  }

  .list2-image {
    width: 150px;
    height: 150px;
    border-radius: 5px
  }

  .list3-image {
    width: 300px;
    height: 150px;
    border-radius: 5px
  }
}
</style>
