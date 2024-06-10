<script lang="ts" setup>

import {ref} from "vue";
import {Btn} from "./Btn";
import {ElBadge, ElButton, ElTooltip} from 'element-plus';
import 'element-plus/es/components/tooltip/style/css'
import 'element-plus/es/components/badge/style/css'
import 'element-plus/es/components/button/style/css'


const props = defineProps({
  openBtn: {
    type: Object as () => Btn,
    required: false,
    default: () => {
    }
  },
  foldBtn: {
    type: Array as () => Btn[],
    required: false,
    default: () => []
  }
})
const emits = defineEmits(['handleOpenClick', 'handleFoldClick'])

const _show = ref(false)

const handleClick = (key: string) => {
  if (!props.openBtn?.show) {
    _show.value = !_show.value
  }
  emits('handleOpenClick', key)
}

const handleFoldClick = (key: string) => {
  emits('handleFoldClick', key)
}
</script>

<template>
  <div class="ve-float-button">
    <transition name="el-zoom-in-bottom">
      <div v-show="(_show || openBtn?.show) && foldBtn.length > 0" class="fold-div group-shape">
        <el-tooltip
            v-for="(item, index) in foldBtn"
            :key="index"
            :content="openBtn?.tooltip"
            :disabled="!openBtn?.tooltip"
            effect="dark"
            placement="left">
          <el-badge :hidden="!openBtn?.badge && !openBtn?.isDot" :is-dot="openBtn?.isDot" :value="openBtn?.badge">
            <el-button :circle="openBtn?.shape && openBtn.shape === 'circle'|| false"
                       :disabled="item.disabled || false"
                       :icon="item.icon || 'Service'"
                       :plain="item.plain || false"
                       :round="item.shape && item.shape === 'round' || false"
                       :size="item.size || 'default'"
                       :type="item.type || 'default'"
                       @click="handleFoldClick(item.key||index)">
              <span v-if="item?.description" style="margin-left: 6px">{{ item?.description }}</span>
            </el-button>
          </el-badge>
        </el-tooltip>
      </div>
    </transition>
    <el-tooltip
        :content="openBtn?.tooltip"
        :disabled="!openBtn?.tooltip"
        effect="dark"
        placement="left">
      <el-badge :hidden="!openBtn?.badge && !openBtn?.isDot" :is-dot="openBtn?.isDot" :value="openBtn?.badge">
        <el-button
            :circle="openBtn?.shape && openBtn.shape === 'circle'|| false"
            :disabled="openBtn?.disabled || false"
            :icon="_show && foldBtn.length > 0? 'Close':(openBtn?.icon||'Service')"
            :plain="openBtn?.plain || false"
            :round="openBtn?.shape && openBtn.shape === 'round' || false"
            :size="openBtn?.size || 'default'"
            :type="openBtn?.type || 'default'"
            class="open-btn"
            @click="handleClick(openBtn?.key)">
          <span v-if="openBtn?.description" style="margin-left: 6px">{{ openBtn?.description }}</span>
        </el-button>
      </el-badge>

    </el-tooltip>
  </div>
</template>

<style lang="scss" scoped>
.ve-float-button {
  position: absolute;
  bottom: 30px;
  right: 30px;

  .fold-div {
    display: flex;
    flex-direction: column;
  }

  .el-button {
    box-shadow: var(--el-box-shadow-light);

    &:not(.open-btn) {
      margin-bottom: 10px;
    }
  }

  .el-button + .el-button {
    margin-left: 0;
  }


  ::v-deep(.el-button > span) {
    margin-left: 0;
  }
}
</style>
