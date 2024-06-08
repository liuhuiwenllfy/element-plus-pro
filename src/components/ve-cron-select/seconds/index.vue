<script lang="ts" setup>
import {reactive, ref, watch} from 'vue'
import {Cycle} from '../Cycle'
import {InitiationCycle} from '../InitiationCycle'
import {ElCheckbox, ElCheckboxGroup, ElInputNumber, ElRadio, ElRadioGroup, ElSpace, ElText} from 'element-plus'
import 'element-plus/es/components/radio-group/style/css'
import 'element-plus/es/components/radio/style/css'
import 'element-plus/es/components/space/style/css'
import 'element-plus/es/components/text/style/css'
import 'element-plus/es/components/input-number/style/css'
import 'element-plus/es/components/checkbox-group/style/css'
import 'element-plus/es/components/checkbox/style/css'

const props = defineProps({
  value: {
    type: String,
    required: false,
    default: () => '*'
  }
})
const _value = ref('*')
const radio = ref(1)
const _cycle = reactive<Cycle>({
  end: 2,
  start: 1
})

const _initiationCycle = reactive<InitiationCycle>({
  cycle: 1,
  initiation: 0
})

const checkList = ref<number[]>([])

watch(() => props.value, () => {
  _value.value = props.value
  if (props.value === "*") {
    radio.value = 1
  } else if (props.value.includes("-")) {
    const arr = props.value.split("-");
    if (arr.length === 2) {
      radio.value = 2
      _cycle.start = !isNaN(parseInt(arr[0])) ? parseInt(arr[0]) : 1
      _cycle.end = !isNaN(parseInt(arr[1])) ? parseInt(arr[1]) : 2
    }
  } else if (props.value.includes("/")) {
    const arr = props.value.split("/");
    if (arr.length === 2) {
      radio.value = 3
      _initiationCycle.initiation = !isNaN(parseInt(arr[0])) ? parseInt(arr[0]) : 0
      _initiationCycle.cycle = !isNaN(parseInt(arr[1])) ? parseInt(arr[1]) : 1
    }
  } else {
    radio.value = 4
    checkList.value = []
    const strings = props.value.split(',');
    strings.forEach(item => {
      if (!isNaN(parseInt(item))) {
        checkList.value.push(parseInt(item))
      }
    })
  }
}, {immediate: true})


const emits = defineEmits(['change'])

const handleChange = (value: any) => {
  switch (value) {
    case 1:
      _value.value = '*'
      _cycle.start = 1
      _cycle.end = 2
      _initiationCycle.initiation = 0
      _initiationCycle.cycle = 1
      checkList.value = []
      break
    case 2:
      _value.value = `${_cycle.start}-${_cycle.end}`
      _initiationCycle.initiation = 0
      _initiationCycle.cycle = 1
      checkList.value = []
      break
    case 3:
      _value.value = `${_initiationCycle.initiation}/${_initiationCycle.cycle}`
      _cycle.start = 1
      _cycle.end = 2
      checkList.value = []
      break
    case 4:
      _value.value = checkList.value.sort((a, b) => a - b).join(',')
      _cycle.start = 1
      _cycle.end = 2
      _initiationCycle.initiation = 0
      _initiationCycle.cycle = 1
      break
  }
  emits('change', _value.value)
}

</script>

<template>
  <el-radio-group v-model="radio" @change="handleChange">
    <el-radio :value="1">每秒</el-radio>
    <el-radio :value="2">
      <el-space>
        <el-text>周期 从</el-text>
        <el-input-number
            v-model="_cycle.start"
            :max="59"
            :min="1"
            controls-position="right"
            size="small"
        />
        <el-text>-</el-text>
        <el-input-number
            v-model="_cycle.end"
            :max="59"
            :min="2"
            controls-position="right"
            size="small"
        />
        <el-text>秒</el-text>
      </el-space>
    </el-radio>
    <el-radio :value="3">
      <el-space>
        <el-text>从</el-text>
        <el-input-number
            v-model="_initiationCycle.initiation"
            :max="59"
            :min="0"
            controls-position="right"
            size="small"
        />
        <el-text>秒开始,每</el-text>
        <el-input-number
            v-model="_initiationCycle.cycle"
            :max="59"
            :min="1"
            controls-position="right"
            size="small"
        />
        <el-text>秒执行一次</el-text>
      </el-space>
    </el-radio>
    <el-radio :value="4">指定</el-radio>
    <el-checkbox-group v-model="checkList" @change="handleChange(4)">
      <el-checkbox v-for="index in 60" :key="index" :value="index-1">{{ index - 1 }}</el-checkbox>
    </el-checkbox-group>
  </el-radio-group>
</template>

<style lang="scss" scoped>
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
