<script lang="ts" setup>
import { useStore } from '@/vuex/store'
import { ref } from 'vue'
import { getSession } from '@/assets/js/sessionStorageUtils'

const store = useStore()

const tenantName = ref(getSession('tenant').tenantName)
const tenantNameEn = ref(getSession('tenant').tenantNameEn)

</script>

<template>
  <div class="tenant">
    <el-text size="default" truncated type="info">
      {{ store.state.internationalization === 'zhCn' ? tenantName : tenantNameEn }}
    </el-text>
  </div>
</template>

<style lang="less" scoped>
.tenant {
  font-size: 15px;
  padding: 20px 10px;
  width: 212px;
  text-align: right;
}
</style>
