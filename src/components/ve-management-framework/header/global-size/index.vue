<script lang="ts" setup>
import IcOutlineFormatSize from '~icons/ic/outline-format-size'
import CarbonBoxSmall from '~icons/carbon/box-small'
import CarbonBoxLarge from '~icons/carbon/box-large'
import CarbonBoxMedium from '~icons/carbon/box-medium'
import {useStore} from '@/vuex/store'

const store = useStore()
const handleCommand = (command: string) => {
  store.commit('globalSize', command)
}
</script>

<template>
  <div class="global-size">
    <el-dropdown trigger="hover" @command="handleCommand">
        <span>
          <el-icon><IcOutlineFormatSize/></el-icon>
        </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item :disabled="store.state.globalSize === 'large'" command="large">
            <el-icon>
              <CarbonBoxLarge/>
            </el-icon>
            {{$t('message.large')}}
          </el-dropdown-item>
          <el-dropdown-item :disabled="store.state.globalSize === 'default'" command="default">
            <el-icon>
              <CarbonBoxMedium/>
            </el-icon>
            {{$t('message.default')}}
          </el-dropdown-item>
          <el-dropdown-item :disabled="store.state.globalSize === 'small'" command="small">
            <el-icon>
              <CarbonBoxSmall/>
            </el-icon>
            {{$t('message.small')}}
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<style lang="less" scoped>
.global-size {
  .el-icon {
    font-size: 20px;
    padding: 20px 10px 19px;

    &:hover {
      background-color: var(--el-menu-hover-bg-color);
    }
  }

  .el-dropdown {
    color: var(--color);
  }
}
</style>
