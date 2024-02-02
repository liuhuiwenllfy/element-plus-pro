<!--
夜间模式
-->
<script lang="ts" setup>
import MdiThemeLightDark from '~icons/mdi/theme-light-dark'
import MaterialSymbolsSunny from '~icons/material-symbols/sunny'
import IonMdCloudyNight from '~icons/ion/md-cloudy-night'
import {useStore} from "@/vuex/store";
import {onBeforeMount} from "vue";

const store = useStore()

onBeforeMount(() => {
  handleCommand(store.state.dark)
})
const handleCommand = (command: Boolean) => {
  const html = document.querySelector('html')
  if (command) {
    html.classList.add('dark')
  } else {
    html.classList.remove('dark')
  }
  store.commit('dark', command)
}
</script>

<template>
  <div class="night">
    <el-dropdown trigger="hover" @command="handleCommand">
        <span class="el-dropdown-link">
          <el-icon><MdiThemeLightDark/></el-icon>
        </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item :command="false" :disabled="!store.state.dark">
            <el-icon style="font-size: 16px">
              <MaterialSymbolsSunny/>
            </el-icon>
            {{ $t('message.light') }}
          </el-dropdown-item>
          <el-dropdown-item :command="true" :disabled="store.state.dark">
            <el-icon style="font-size: 16px">
              <IonMdCloudyNight/>
            </el-icon>
            {{ $t('message.dark') }}
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<style lang="less" scoped>
.night {
  text-align: right;

  .el-icon {
    font-size: 20px;

    &:hover {
      color: @brand;
    }
  }

  .el-dropdown {
    color: var(--color);
  }
}
</style>
