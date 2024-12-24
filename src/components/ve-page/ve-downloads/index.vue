<script lang="ts" setup>
import * as echarts from 'echarts';
import {onMounted, ref, watch} from 'vue'
import {useCommonStore} from "@/pinia/common.ts";
import moment from 'moment';
import {getNpmStat} from "@/api/result/npmStat.ts";
import {resData} from "@/entity/res.ts";

const props = defineProps({
  id: {
    type: String,
    required: true,
    default: () => ""
  },
})

const store = useCommonStore()
const chartDom = ref<any>()

let myChartDom = <any>null

onMounted(() => {
  downloads()
})

watch(() => store.dark, () => {
  myChartDom?.dispose()
  initChartDom()
})
watch(() => store.sidebar, () => {
  setTimeout(() => {
    myChartDom?.resize()
  }, 150)
})

const xData = ref<string[]>([])
const yData = ref<any[]>([])

// 绘制图表
const initChartDom = () => {
  myChartDom = echarts.init(chartDom.value, store.dark ? 'dark' : null);
  myChartDom.setOption({
    backgroundColor: '',
    title: {
      text: 'Npm-Stat'
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['Downloads']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: xData.value
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: 'Downloads',
        type: 'line',
        stack: 'Total',
        data: yData.value
      }
    ]
  });
}

const downloads = async () => {
  const currentDate = moment();
  const oneMonthAgoDate = moment().subtract(1, 'year');

  const currentDateFormatted = currentDate.format('YYYY-MM-DD');
  const oneMonthAgoDateFormatted = oneMonthAgoDate.format('YYYY-MM-DD');
  const res = <resData>await getNpmStat({
    packageName: props.id,
    startData: oneMonthAgoDateFormatted,
    endData: currentDateFormatted
  });
  if (res.ok) {
    // @ts-ignore
    const map = new Map(Object.entries(res.data[props.id]));
    xData.value = Array.from(map.keys())
    yData.value = Array.from(map.values())
    initChartDom()
    window.addEventListener('resize', () => {
      myChartDom?.resize()
    })
  }
}
</script>

<template>
  <el-card>
    <div ref="chartDom" style="max-width: 100%; height: 400px"></div>
  </el-card>
</template>

<style lang="scss" scoped>

</style>