<script lang="ts" setup>
import {reactive, ref, watch} from "vue";
import {Cycle} from "@/components/ve-cron/Cycle";
import {InitiationCycle} from "@/components/ve-cron/InitiationCycle";

const props = defineProps({
  value: {
    type: String,
    required: false,
    default: () => "*"
  }
})
const _value = ref('*')

watch(() => props.value, () => {
  _value.value = props.value
})

const radio = ref(1)

const _cycle = reactive<Cycle>({
  end: 2, start: 1
})

const _initiationCycle = reactive<InitiationCycle>({
  cycle: 1,
  initiation: 1
})
const workingDay = ref(1)
const checkList = ref([1])
const emits = defineEmits(['change'])

const handleChange = (value: number) => {
  switch (value) {
    case 1:
      _value.value = '*'
      break
    case 2:
      _value.value = '?'
      break
    case 3:
      _value.value = `${_cycle.start}-${_cycle.end}`
      break
    case 4:
      _value.value = `${_initiationCycle.initiation}/${_initiationCycle.cycle}`
      break
    case 5:
      _value.value = `${workingDay.value}W`
      break
    case 6:
      _value.value = `L`
      break
    case 7:
      _value.value = checkList.value.sort((a, b) => a - b).join(',')
      break
  }
  emits('change', _value.value)
}

const handleChangeCheckbox = () => {
  if (radio.value === 7) {
    handleChange(7)
  }
}
</script>

<template>
  <el-radio-group v-model="radio" @change="handleChange">
    <el-radio :label="1">每日 允许的通配符[, - * / L W]</el-radio>
    <el-radio :label="2">不指定</el-radio>
    <el-radio :label="3">
      <el-space>
        <el-text>周期 从</el-text>
        <el-input-number
            v-model="_cycle.start"
            :max="31"
            :min="1"
            controls-position="right"
            size="small"
            @change="handleChange(radio)"/>
        <el-text>-</el-text>
        <el-input-number
            v-model="_cycle.end"
            :max="31"
            :min="2"
            controls-position="right"
            size="small"
            @change="handleChange(radio)"/>
        <el-text>日</el-text>
      </el-space>
    </el-radio>
    <el-radio :label="4">
      <el-space>
        <el-text>从</el-text>
        <el-input-number
            v-model="_initiationCycle.initiation"
            :max="31"
            :min="1"
            controls-position="right"
            size="small"
            @change="handleChange(radio)"/>
        <el-text>日开始,每</el-text>
        <el-input-number
            v-model="_initiationCycle.cycle"
            :max="31"
            :min="1"
            controls-position="right"
            size="small"
            @change="handleChange(radio)"/>
        <el-text>天执行一次</el-text>
      </el-space>
    </el-radio>
    <el-radio :label="5">
      <el-space>
        <el-text>每月</el-text>
        <el-input-number
            v-model="workingDay"
            :max="31"
            :min="1"
            controls-position="right"
            size="small"
            @change="handleChange(radio)"/>
        <el-text>号最近的那个工作日</el-text>
      </el-space>
    </el-radio>
    <el-radio :label="6">本月最后一天</el-radio>
    <el-radio :label="7">指定</el-radio>
    <el-checkbox-group v-model="checkList" @change="handleChangeCheckbox">
      <el-checkbox v-for="index in 31" :key="index" :label="index"/>
    </el-checkbox-group>
  </el-radio-group>
</template>

<style lang="less" scoped>
.el-radio {
  width: 100%;
}

.el-input-number {
  width: 80px;
}

.el-checkbox {
  width: 40px;
  margin-right: 10px;
}
</style>
