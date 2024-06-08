# ve-anchor 锚点

## 功能描述

1. 需要展现当前页面上可供跳转的锚点链接，以及快速在锚点之间跳转。

---

## 使用说明

### 安装

```shell
npm install ve-anchor
```

### 卸载

```shell
npm uninstall ve-anchor
```

---

## Api

```vue

<script lang="ts" setup>
  const items = ref([
    {
      id: 'part-1',
      title: 'part-1',
    },
    {
      id: 'part-2',
      title: 'part-2',
    },
    {
      id: 'part-3',
      title: 'part-3',
      children: [
        {
          id: 'part-3-1',
          title: 'part-3-1',
        },
        {
          id: 'part-3-2',
          title: 'part-3-2',
        },
      ],
    }
  ])
</script>
<template>
  <el-row id="parent-scroll" style="height: 300px; overflow: auto">
    <el-col :span="18">
      <div id="part-1" class="group" style="height: 300px; background: #C6E2FF"/>
      <div id="part-2" class="group" style="height: 300px; background: #F8E3C5"/>
      <div id="part-3" class="group" style="height: 300px; background: #FCD3D3"/>
      <div id="part-3-1" class="group" style="height: 300px; background: #C6E2FF"/>
      <div id="part-3-2" class="group" style="height: 300px; background: #F8E3C5"/>
    </el-col>
    <el-col :span="6">
      <ve-anchor :items="items" group="group" parent-scroll="parent-scroll"/>
    </el-col>
  </el-row>
</template>
<style lang="scss" scoped>
  #parent-scroll {
    scroll-behavior: smooth;
    overflow-y: scroll; /* 确保容器可以滚动 */
  }
</style>
```

#### 属性

| 属性名           | 说明                              | 类型     | 可选值 | 默认值 |
|---------------|---------------------------------|--------|-----|-----|
| items         | 锚点树结构                           | array  | -   | -   |
| items:id      | 锚点id，用于寻找对应的dom，该值对应锚点区域绑定的id属性 | string | -   | -   |
| items:title   | 锚点id，用于寻找对应的dom，该值对应锚点区域绑定的id属性 | string | -   | -   |
| group         | 所有锚点区域的class属性，用于获取锚点区域dom集合    | string | -   | -   |
| parent-scroll | 需要监听滚动的dom的id属性，用于获取滚动区域dom     | string | -   | -   |

## Assets

[源码：Github](https://github.com/liuhuiwenllfy/element-plus-pro/tree/master/src/components/ve-anchor)

[源码：Gitee](https://gitee.com/liu-ling-feng-yu/element-plus-pro/tree/master/src/components/ve-anchor)

[组件库演示地址](https://epp.liulingfengyu.cn/preview/#/ve-anchor)

---

## 作者信息

Author：刘凌枫羽

邮箱：1305156911@qq.com

Blog：[刘凌枫羽博客](https://blog.csdn.net/qq_38036909?type=blog)

公众号

[![](https://resource.liulingfengyu.cn/img/公众号二维码.jpg)](https://mp.weixin.qq.com/s?__biz=MzkxNDI2OTM0Nw==&mid=2247483939&idx=1&sn=ee8438a9047d92798765cd502820c67c&chksm=c171b7eff6063ef9a41b34f61ff6ac8c73259917505eb5d9a5b9a17e9ab3653da999e48a98d5#rd)

---

官网地址：https://www.liulingfengyu.cn/
