<script lang="ts" setup>

import {ElAside, ElContainer, ElFooter, ElHeader, ElMain, ElSpace} from 'element-plus'
import 'element-plus/es/components/aside/style/css'
import 'element-plus/es/components/container/style/css'
import 'element-plus/es/components/footer/style/css'
import 'element-plus/es/components/header/style/css'
import 'element-plus/es/components/main/style/css'
import 'element-plus/es/components/space/style/css'
import {PropType} from "vue";

defineProps({
  layout: {
    type: Number as PropType<1 | 2 | 3 | 4 | 5 | 6 | 7>,
    required: false,
    default: () => 7
  }
})

const emits = defineEmits(['handleSelect'])

const select = (e: number) => {
  emits('handleSelect', e)
}
</script>

<template>
  <div class="layout">
    <el-space size="large" wrap>
      <el-container
          :class="layout === 1 ? 'selected':''"
          class="layout-1"
          @click="select(1)"
      >
        <el-header/>
        <el-main/>
      </el-container>
      <el-container
          :class="layout === 2 ? 'selected':''"
          class="layout-2"
          @click="select(2)"
      >
        <el-header/>
        <el-main/>
        <el-footer/>
      </el-container>
      <el-container
          :class="layout === 3 ? 'selected':''"
          class="layout-3"
          @click="select(3)"
      >
        <el-aside/>
        <el-main/>
      </el-container>
      <el-container
          :class="layout === 4 ? 'selected':''"
          class="layout-4"
          @click="select(4)"
      >
        <el-header/>
        <el-container>
          <el-aside/>
          <el-main/>
        </el-container>
      </el-container>
      <el-container
          :class="layout === 5 ? 'selected':''"
          class="layout-5"
          @click="select(5)"
      >
        <el-header/>
        <el-container>
          <el-aside/>
          <el-container>
            <el-main/>
            <el-footer/>
          </el-container>
        </el-container>
      </el-container>
      <el-container
          :class="layout === 6 ? 'selected':''"
          class="layout-6"
          @click="select(6)"
      >
        <el-aside/>
        <el-container>
          <el-header/>
          <el-main/>
        </el-container>
      </el-container>
      <el-container
          :class="layout === 7 ? 'selected':''"
          class="layout-7"
          @click="select(7)"
      >
        <el-aside/>
        <el-container>
          <el-header/>
          <el-main/>
          <el-footer/>
        </el-container>
      </el-container>
    </el-space>
  </div>
</template>

<style lang="scss" scoped>
.layout {
  .layout-1 {
    width: 100px;
    height: 70px;

    .el-header {
      background-color: var(--el-color-primary-light-7);
      height: 20%;
      border-top-left-radius: 4px;
      border-top-right-radius: 4px
    }

    .el-main {
      background-color: var(--el-color-primary-light-9);
      height: 80%;
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px
    }
  }

  .layout-2 {
    width: 100px;
    height: 70px;

    .el-header {
      background-color: var(--el-color-primary-light-7);
      height: 20%;
      border-top-left-radius: 4px;
      border-top-right-radius: 4px
    }

    .el-main {
      background-color: var(--el-color-primary-light-9);
      height: 60%
    }

    .el-footer {
      background-color: var(--el-color-primary-light-7);
      height: 20%;
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px
    }
  }

  .layout-3 {
    width: 100px;
    height: 70px;

    .el-aside {
      background-color: var(--el-color-primary-light-8);
      height: 100%;
      width: 30%;
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px
    }

    .el-main {
      background-color: var(--el-color-primary-light-9);
      height: 100%;
      width: 70%;
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px
    }
  }

  .layout-4 {
    width: 100px;
    height: 70px;

    .el-header {
      background-color: var(--el-color-primary-light-7);
      height: 20%;
      border-top-left-radius: 4px;
      border-top-right-radius: 4px
    }

    .el-aside {
      background-color: var(--el-color-primary-light-8);
      height: 100%;
      width: 30%;
      border-bottom-left-radius: 4px
    }

    .el-main {
      background-color: var(--el-color-primary-light-9);
      height: 100%;
      width: 70%;
      border-bottom-right-radius: 4px
    }
  }

  .layout-5 {
    width: 100px;
    height: 70px;

    .el-header {
      background-color: var(--el-color-primary-light-7);
      height: 20%;
      border-top-left-radius: 4px;
      border-top-right-radius: 4px
    }

    .el-aside {
      background-color: var(--el-color-primary-light-8);
      height: 100%;
      width: 30%;
      border-bottom-left-radius: 4px
    }

    .el-main {
      background-color: var(--el-color-primary-light-9);
      height: 60%
    }

    .el-footer {
      background-color: var(--el-color-primary-light-7);
      height: 20%;
      border-bottom-right-radius: 4px
    }
  }

  .layout-6 {
    width: 100px;
    height: 70px;

    .el-aside {
      background-color: var(--el-color-primary-light-8);
      height: 100%;
      width: 30%;
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px
    }

    .el-header {
      background-color: var(--el-color-primary-light-7);
      height: 20%;
      width: 100%;
      border-top-right-radius: 4px
    }

    .el-main {
      background-color: var(--el-color-primary-light-9);
      height: 80%;
      width: 100%;
      border-bottom-right-radius: 4px
    }
  }

  .layout-7 {
    width: 100px;
    height: 70px;

    .el-aside {
      background-color: var(--el-color-primary-light-8);
      height: 100%;
      width: 30%;
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px
    }

    .el-header {
      background-color: var(--el-color-primary-light-7);
      height: 20%;
      width: 100%;
      border-top-right-radius: 4px
    }

    .el-main {
      background-color: var(--el-color-primary-light-9);
      height: 60%;
      width: 100%
    }

    .el-footer {
      background-color: var(--el-color-primary-light-7);
      height: 20%;
      width: 100%;
      border-bottom-right-radius: 4px
    }
  }

  .selected {
    border: 2px solid var(--el-color-primary);
    border-radius: 4px;
  }
}
</style>
