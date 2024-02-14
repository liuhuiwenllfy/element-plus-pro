<script lang="ts" setup>
import MaterialSymbolsSunny from '~icons/material-symbols/sunny'
import IonMdCloudyNight from '~icons/ion/md-cloudy-night'
import {useStore} from '@/vuex/store'
import {watch} from 'vue'

const store = useStore()

watch(() => store.state.dark, () => {
  const html = document.querySelector('html')
  store.commit('dark', store.state.dark)
  if (store.state.dark) {
    html.classList.add('dark')
  } else {
    html.classList.remove('dark')
  }
})

</script>

<template>
  <div class="night">
    <el-switch
        v-model="store.state.dark"
        :active-icon="IonMdCloudyNight"
        :inactive-icon="MaterialSymbolsSunny"
        inline-prompt
        size="default"/>
  </div>
</template>

<style lang="less" scoped>
.night {
}
</style>
