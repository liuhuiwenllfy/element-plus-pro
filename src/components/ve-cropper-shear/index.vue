<script lang="ts" setup>
import 'vue-cropper/dist/index.css'
// @ts-ignore
import VueCropper from "vue-cropper/lib/vue-cropper.vue";
import {nextTick, ref} from "vue";
import {ElButton, ElRadio, ElRadioGroup} from 'element-plus'
import {RefreshLeft, RefreshRight} from '@element-plus/icons-vue'
import 'element-plus/es/components/radio-group/style/css'
import 'element-plus/es/components/radio/style/css'
import 'element-plus/es/components/button/style/css'

const props = defineProps({
  img: {
    type: String,
    required: true
  },
  fixed: {
    type: Boolean,
    required: false,
    default: () => true
  },
  fixedNumber: {
    type: Array<any>,
    required: false,
    default: () => [1, 1]
  },
  fixedNumberList: {
    type: Array<any>,
    default: () => [[1, 1]]
  }
})
const _fixedNumber = ref(props.fixedNumber)
const handleChange = (fixedNumber: any) => {
  _fixedNumber.value = fixedNumber
  reload()
}

const reFresh = ref(true)

const reload = () => {
  reFresh.value = false;
  nextTick(() => {
    reFresh.value = true;
  });
}

const cropper = ref()
const rotateRight = () => {
  cropper.value.rotateRight();
}
const rotateLeft = () => {
  cropper.value.rotateLeft();
}

const emits = defineEmits(['getCropData', 'getCropBlob'])
const getCropData = () => {
  cropper.value.getCropData((data: string) => {
    emits("getCropData", data);
  });
}
const getCropBlob = () => {
  cropper.value.getCropBlob((data: string) => {
    emits("getCropBlob", data);
  });
}

defineExpose({
  getCropData,
  getCropBlob
})

const _radio = ref(0)
</script>

<template>
  <div class="assembly-vue-cropper">
    <el-space alignment="normal">
      <el-space direction="vertical">
        <div class="vue-cropper">
          <vueCropper
              v-if="reFresh"
              ref="cropper"
              :canMove="false"
              :canScale="false"
              :fixed="fixed"
              :fixedNumber="_fixedNumber"
              :full="true"
              :img="img"
              :info="false"
              :infoTrue="true"
              :outputSize="1"
              autoCrop
              autoCropHeight="300"
              autoCropWidth="300"
              centerBox
              outputType="png"
          ></vueCropper>
        </div>
        <div class="operation">
          <el-button :icon="RefreshLeft" @click="rotateLeft">向左边旋转90度</el-button>
          <el-button :icon="RefreshRight" @click="rotateRight">向右边旋转90度</el-button>
        </div>
      </el-space>
      <el-scrollbar v-if="fixed" class="proportion">
        <el-radio-group v-model="_radio">
          <el-space alignment="normal" direction="vertical">
            <el-radio v-for="(item, index) in fixedNumberList" :key="index" :value="index" @change="handleChange(item)">
              裁剪比例为<strong>{{ `${item[0]}:${item[1]}` }}</strong></el-radio>
          </el-space>
        </el-radio-group>
      </el-scrollbar>
    </el-space>
  </div>
</template>

<style lang="scss" scoped>
.assembly-vue-cropper {
  .vue-cropper {
    width: 500px;
    height: 500px;
  }

  .operation {
    margin-top: 10px;
  }

  .proportion {
    height: 500px;
    padding-right: 20px;
  }
}
</style>
