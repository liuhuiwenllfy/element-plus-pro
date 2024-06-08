# ve-list 列表

## 功能描述

1. 最基础的列表展示，可承载文字、列表、图片、段落，常用于后台数据展示页面。

---

## 使用说明

### 安装

```shell
npm install ve-list
```

### 卸载

```shell
npm uninstall ve-list
```

---

## Api

```vue

<ve-list v-for="(item, index) in _list" :key="index" :data="item" type="list3">
  <template #operation>
    <el-link :underline="false" size="mini" type="primary">修改</el-link>
    <el-link :underline="false" size="mini" type="primary">更多</el-link>
  </template>
  <template #image>
    <el-image :src="item.image || '/img/default.png'" class="custom-image" fit="cover"></el-image>
  </template>
</ve-list>
```

#### 属性

| 属性名          | 说明   | 类型     | 可选值               | 默认值              |
|--------------|------|--------|-------------------|------------------|
| list         | 列表信息 | array  | -                 | -                |
| list:avatar  | 头像地址 | string | -                 | /img/default.png |
| list:name    | 名称   | string | -                 | -                |
| list:desc    | 描述   | string | -                 | -                |
| list:content | 内容   | string | -                 | -                |
| type         | 列表类型 | string | list1,list2,list3 | list1            |

### Slots

| 名称        | 详情   |
|-----------|------|
| operation | 操作扩展 |
| image     | 图片扩展 |

## Assets

[源码：Github](https://github.com/liuhuiwenllfy/element-plus-pro/tree/master/src/components/ve-list)

[源码：Gitee](https://gitee.com/liu-ling-feng-yu/element-plus-pro/tree/master/src/components/ve-list)

[组件库演示地址](https://epp.liulingfengyu.cn/preview/#/ve-list)

## Warn

1. 该组件是基于element-plus开发，需要在此基础上使用。

---

## 作者信息

Author：刘凌枫羽

邮箱：1305156911@qq.com

Blog：[刘凌枫羽博客](https://blog.csdn.net/qq_38036909?type=blog)

公众号

[![](https://resource.liulingfengyu.cn/img/公众号二维码.jpg)](https://mp.weixin.qq.com/s?__biz=MzkxNDI2OTM0Nw==&mid=2247483939&idx=1&sn=ee8438a9047d92798765cd502820c67c&chksm=c171b7eff6063ef9a41b34f61ff6ac8c73259917505eb5d9a5b9a17e9ab3653da999e48a98d5#rd)

---

官网地址：https://www.liulingfengyu.cn/
