<script lang="ts" setup>
import {CaretBottom, Promotion} from '@element-plus/icons-vue'
import {openUrl} from '@/assets/js/common'
</script>

<template>
  <div class="user">
    <el-dropdown trigger="hover">
      <span class="el-dropdown-link">
        <el-avatar :size="37" src="/img/default.png"/>
        <el-icon class="el-icon--right">
          <CaretBottom/>
        </el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click="openUrl('https://www.liulingfengyu.cn')">
            <el-icon style="font-size: 16px">
              <Promotion/>
            </el-icon>
            {{ $t('message.officialWebsite') }}
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<style lang="less" scoped>
.user {
  padding: 10px 10px 9px;

  &:hover {
    background-color: var(--el-menu-hover-bg-color);
  }
}
</style>
