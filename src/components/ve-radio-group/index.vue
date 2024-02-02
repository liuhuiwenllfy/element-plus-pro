<!--
带有label的单选插件（插件市场专用）
-->
<script lang="ts" setup>
import {ref} from "vue";

const prop = defineProps({
  labelName: {
    "type": String,
    required: true,
    default: () => ''
  },
  checked: {
    type: String,
    required: false,
    default: () => ''
  }
})
const emits = defineEmits(['handleChecked'])

const checked = ref(prop.checked)

const handleChange = (val: string) => {
  emits('handleChecked', val)
}
</script>

<template>
  <el-space class="ve-radio-group" size="default">
    <el-text v-if="labelName" class="sort-label" truncated>{{ labelName }}：</el-text>
    <el-radio-group v-model="checked" @change="handleChange">
      <el-radio label="update_time,collect,download,comment">{{ $t('message.comprehensiveSort') }}</el-radio>
      <el-radio label="download,update_time">{{ $t('message.topDownloads') }}</el-radio>
      <el-radio label="update_time">{{ $t('message.latestUpload') }}</el-radio>
      <el-radio label="comment,update_time">{{ $t('message.favorites') }}</el-radio>
    </el-radio-group>
  </el-space>
</template>

<style lang="less" scoped>
.ve-radio-group {
  font-size: 14px;

  .sort-label {
    font-weight: bold;
  }

  .el-radio {
    margin-right: 15px;

    ::v-deep(.el-radio__input) {
      display: none;
    }

    ::v-deep(.el-radio__label) {
      padding-left: 0;
    }
  }
}
</style>
