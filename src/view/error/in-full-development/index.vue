<script lang="ts" setup>
import router from '@/router'

const back = () => {
  router.go(-1)
}
</script>

<template>
  <div class="in-full-development">
    <el-result
        :sub-title="$t('message.in-full-development')"
        :title="$t('message.in-full-development')"
        icon="warning">
      <template #extra>
        <el-button type="primary" @click="back">
          {{ $t('message.back') }}
        </el-button>
      </template>
    </el-result>
  </div>
</template>

<style lang="scss" scoped>
.in-full-development {
  .el-result {
    height: 100%;
  }
}
</style>
