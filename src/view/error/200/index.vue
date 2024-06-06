<script lang="ts" setup>
import router from '@/router'

const back = () => {
  router.go(-1)
}
</script>

<template>
  <div class="no-permission">
    <el-result
        :sub-title="$t('message.200')"
        icon="success"
        title="200">
      <template #extra>
        <el-button type="primary" @click="back">
          {{ $t('message.back') }}
        </el-button>
      </template>
    </el-result>
  </div>
</template>

<style lang="scss" scoped>
.no-permission {
  .el-result {
    height: 100%;
  }
}
</style>
