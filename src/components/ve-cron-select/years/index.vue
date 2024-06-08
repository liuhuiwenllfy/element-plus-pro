<script lang="ts" setup>
import {reactive, ref, watch} from 'vue'
import {Cycle} from '../Cycle'
import {ElInputNumber, ElRadio, ElRadioGroup, ElSpace, ElText} from 'element-plus'
import 'element-plus/es/components/radio-group/style/css'
import 'element-plus/es/components/radio/style/css'
import 'element-plus/es/components/space/style/css'
import 'element-plus/es/components/text/style/css'
import 'element-plus/es/components/input-number/style/css'

const props = defineProps({
  value: {
    type: String,
    required: false,
    default: () => '*'
  }
})
const _value = ref('*')

const radio = ref(2)

const _cycle = reactive<Cycle>({
  end: 2025,
  start: 2024
})

watch(() => props.value, () => {
  _value.value = props.value
  if (props.value === "") {
    radio.value = 1
  } else if (props.value === "*") {
    radio.value = 2
  } else if (props.value.includes("-")) {
    const arr = props.value.split("-");
    if (arr.length === 2) {
      radio.value = 3
      _cycle.start = !isNaN(parseInt(arr[0])) ? parseInt(arr[0]) : 2024
      _cycle.end = !isNaN(parseInt(arr[1])) ? parseInt(arr[1]) : 2025
    }
  }
}, {immediate: true})

const emits = defineEmits(['change'])

const handleChange = (value: any) => {
  switch (value) {
    case 1:
      _value.value = ''
      _cycle.start = 2024
      _cycle.end = 2025
      break
    case 2:
      _value.value = '*'
      _cycle.start = 2024
      _cycle.end = 2025
      break
    case 3:
      _value.value = `${_cycle.start}-${_cycle.end}`
      break
  }
  emits('change', _value.value)
}

</script>

<template>
  <el-radio-group v-model="radio" @change="handleChange">
    <el-radio :value="1">不指定</el-radio>
    <el-radio :value="2">每年</el-radio>
    <el-radio :value="3">
      <el-space>
        <el-text>周期 从</el-text>
        <el-input-number
            v-model="_cycle.start"
            :max="9999"
            :min="2024"
            controls-position="right"
            size="small"
        />
        <el-text>-</el-text>
        <el-input-number
            v-model="_cycle.end"
            :max="9999"
            :min="2024"
            controls-position="right"
            size="small"
        />
      </el-space>
    </el-radio>
  </el-radio-group>
</template>

<style lang="scss" scoped>
.el-radio {
  width: 100%;
}

.el-input-number {
  width: 100px;
}

.el-checkbox {
  width: 40px;
  margin-right: 10px;
}
</style>
