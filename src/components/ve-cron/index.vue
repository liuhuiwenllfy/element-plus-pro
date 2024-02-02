<script lang="ts" setup>
import {ref, watch} from 'vue'
import Seconds from '@/components/ve-cron/seconds/index.vue'
import Minutes from '@/components/ve-cron/minutes/index.vue'
import Hour from '@/components/ve-cron/hour/index.vue'
import Day from '@/components/ve-cron/day/index.vue'
import Month from '@/components/ve-cron/month/index.vue'
import Weeks from '@/components/ve-cron/weeks/index.vue'
import Years from '@/components/ve-cron/years/index.vue'

const props = defineProps({
  value: {
    type: String,
    required: false,
    default: () => "* * * * * ? *"
  }
})

watch(() => props.value, () => {
  cron.value = props.value.split(' ')
})

const activeName = ref('seconds')
const emits = defineEmits(['change'])

const cron = ref(['*', '*', '*', '*', '*', '?', '*'])

const handleChange = (index: number, value: string) => {
  cron.value[index] = value
  emits('change', cron.value.join(' ').trim())
}

</script>

<template>
  <el-tabs v-model="activeName">
    <el-tab-pane label="秒" name="seconds">
      <seconds :value="cron[0]" @change="handleChange(0, $event)"/>
    </el-tab-pane>
    <el-tab-pane label="分钟" name="minutes">
      <minutes :value="cron[1]" @change="handleChange(1, $event)"/>
    </el-tab-pane>
    <el-tab-pane label="小时" name="Hour">
      <hour :value="cron[2]" @change="handleChange(2, $event)"/>
    </el-tab-pane>
    <el-tab-pane label="日" name="day">
      <day :value="cron[3]" @change="handleChange(3, $event)"/>
    </el-tab-pane>
    <el-tab-pane label="月份" name="month">
      <month :value="cron[4]" @change="handleChange(4, $event)"/>
    </el-tab-pane>
    <el-tab-pane label="周（星期）" name="weeks">
      <weeks :value="cron[5]" @change="handleChange(5, $event)"/>
    </el-tab-pane>
    <el-tab-pane label="年份" name="years">
      <years :value="cron[6]" @change="handleChange(6, $event)"/>
    </el-tab-pane>
  </el-tabs>
</template>

<style lang="less" scoped>

</style>
