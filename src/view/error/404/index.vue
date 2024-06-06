<script lang="ts" setup>
import router from '@/router'

const back = () => {
  router.go(-1)
}
</script>

<template>
  <div class="not-found">
    <el-result
        :sub-title="$t('message.404')"
        icon="warning"
        title="404">
      <template #extra>
        <el-button type="primary" @click="back">
          {{ $t('message.back') }}
        </el-button>
      </template>
    </el-result>
  </div>
</template>

<style lang="scss" scoped>
.not-found {
  .el-result {
    height: 100%;
  }
}
</style>
