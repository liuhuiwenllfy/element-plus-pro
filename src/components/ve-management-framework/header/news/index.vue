<script lang="ts" setup>
import DashiconsBell from '~icons/dashicons/bell'
import useWebSocket from '@/assets/js/webSocketService'
import { useStore } from '@/vuex/store'
import { onMounted, watch } from 'vue'
import { resData } from '@/entity/res'
import { queryLatestNewsCount } from '@/api/result/news'

const { message } = useWebSocket()

const store = useStore()
const click = () => {
  store.commit('drawerNews', true)
}

watch(message, () => {
  if (message.value.includes('STATION_MESSAGE')) {
    latestNewsCount()
  }
})

onMounted(() => {
  latestNewsCount()
})

const latestNewsCount = async () => {
  const res = <resData>await queryLatestNewsCount()
  if (res.ok) {
    store.commit('isNews', res.data > 0)
  }
}
</script>

<template>
  <div class="news" @click="click">
    <el-icon>
      <el-badge :is-dot="store.state.isNews" class="item">
        <DashiconsBell/>
      </el-badge>
    </el-icon>
  </div>
</template>

<style lang="less" scoped>
.news {
  .el-icon {
    font-size: 20px;
    padding: 20px 10px 19px;

    &:hover {
      background-color: var(--el-menu-hover-bg-color);
    }
  }
}
</style>
