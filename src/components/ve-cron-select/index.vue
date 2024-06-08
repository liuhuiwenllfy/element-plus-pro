<script lang="ts" setup>
import {ref, watch} from 'vue'
import Seconds from './seconds/index.vue'
import Minutes from './minutes/index.vue'
import Hour from './hour/index.vue'
import Day from './day/index.vue'
import Month from './month/index.vue'
import Weeks from './weeks/index.vue'
import Years from './years/index.vue'
import {ElInput, ElPopover, ElTabPane, ElTabs} from 'element-plus'
import 'element-plus/es/components/tabs/style/css'
import 'element-plus/es/components/tab-pane/style/css'
import 'element-plus/es/components/popover/style/css'
import 'element-plus/es/components/input/style/css'

const props = defineProps({
  cron: {
    type: String,
    required: false,
    default: () => "* * * * * ? *"
  }
})
const _cron = ref<string[]>([])
const _cronStr = ref('')

watch(() => props.cron, () => {
  _cron.value = props.cron.split(' ')
  _cronStr.value = props.cron
}, {immediate: true})

const activeName = ref('seconds')
const emits = defineEmits(['change'])


const handleChange = (index: number, value: string) => {
  if (_cron.value) {
    _cron.value[index] = value
  } else {
    _cron.value = [value]
  }
  _cronStr.value = _cron.value.join(' ').trim()
  emits('change', _cron.value.join(' ').trim())
}
</script>

<template>
  <el-input v-model="_cronStr"
            placeholder="请选择cron"
            readonly
            style="width: 300px;">
    <template #append>
      <el-popover
          :width="476"
          placement="bottom"
          trigger="click">
        <el-tabs v-model="activeName">
          <el-tab-pane label="秒" name="seconds">
            <seconds :value="_cron[0]" @change="handleChange(0, $event)"/>
          </el-tab-pane>
          <el-tab-pane label="分钟" name="minutes">
            <minutes :value="_cron[1]" @change="handleChange(1, $event)"/>
          </el-tab-pane>
          <el-tab-pane label="小时" name="Hour">
            <hour :value="_cron[2]" @change="handleChange(2, $event)"/>
          </el-tab-pane>
          <el-tab-pane label="日" name="day">
            <day :value="_cron[3]" @change="handleChange(3, $event)"/>
          </el-tab-pane>
          <el-tab-pane label="月份" name="month">
            <month :value="_cron[4]" @change="handleChange(4, $event)"/>
          </el-tab-pane>
          <el-tab-pane label="周（星期）" name="weeks">
            <weeks :value="_cron[5]" @change="handleChange(5, $event)"/>
          </el-tab-pane>
          <el-tab-pane label="年份" name="years">
            <years :value="_cron[6]" @change="handleChange(6, $event)"/>
          </el-tab-pane>
        </el-tabs>
        <template #reference>
          <div style="cursor: pointer">选择</div>
        </template>
      </el-popover>
    </template>
  </el-input>
</template>

<style lang="scss" scoped>

</style>
