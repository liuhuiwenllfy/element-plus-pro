<script lang="ts" setup>
import 'vue-cropper/dist/index.css'
import {VueCropper} from "vue-cropper";
import {nextTick, ref} from "vue";

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
  cropper.value.getCropData(data => {
    emits("getCropData", data);
  });
}
const getCropBlob = () => {
  cropper.value.getCropBlob(data => {
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
    <div class="vue-cropper">
      <vueCropper
          v-if="reFresh"
          ref="cropper"
          :canMove="false"
          :canScale="false"
          :fixed="fixed"
          :fixedNumber="fixedNumber"
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
    <div class="proportion">
      <div v-if="fixed">
        <el-radio-group v-model="_radio">
          <el-radio v-for="(item, index) in fixedNumberList" :key="index" :value="index" @change="handleChange(item)">
            裁剪比例为<strong>{{ `${item[0]}:${item[1]}` }}</strong></el-radio>
        </el-radio-group>
      </div>
      <div style="padding-bottom: 10px">
        <el-button icon="el-icon-refresh-left" @click="rotateLeft">向左边旋转90度</el-button>
      </div>
      <div style="padding-bottom: 10px">
        <el-button icon="el-icon-refresh-right" @click="rotateRight">向右边旋转90度</el-button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.assembly-vue-cropper {
  .vue-cropper {
    display: inline-block;
    width: 500px;
    height: 500px;
  }

  .proportion {
    display: inline-block;
    vertical-align: top;
    padding: 10px;
  }
}
</style>
