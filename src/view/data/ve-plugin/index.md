```vue

<ve-plugin id="123456" @handle-click="console.log($event)">
  <template #preview>
    <el-image src="avatar.png"></el-image>
  </template>
  <template #title>Cron表达式选择器</template>
  <template #tag>
    <el-space>
      <el-tag>时间选择器</el-tag>
      <el-tag>定时器</el-tag>
      <el-tag>cron</el-tag>
    </el-space>
  </template>
  <template #description>
    Cron表达式选择器是用于定时任务调度的一种常见工具，通常用于指定任务的执行时间。Cron表达式由一系列时间单位和对应的时间值组成，用于指定任务的执行时间。
  </template>
  <template #author>张三</template>
  <template #releaseTime>2024-02-14 18:13:54</template>
  <template #clickVolume>99+</template>
  <template #readingQuantity>99+</template>
  <template #download>99+</template>
  <template #comment>99+</template>
  <template #collect>99+</template>
</ve-plugin>
```
