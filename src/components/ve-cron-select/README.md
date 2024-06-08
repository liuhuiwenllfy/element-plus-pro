# Cron表达式选择器

## 功能描述

Cron表达式选择器是用于定时任务调度的一种常见工具，通常用于指定任务的执行时间。Cron表达式由一系列时间单位和对应的时间值组成，用于指定任务的执行时间。下面是一个Cron表达式的示例

```latex
0 0 12 * * ?
```

这个表达式的含义是每天中午12点执行任务。
Cron表达式的格式如下

```latex
秒 分 时 日 月 周 年（可选）
```

每个时间单位和对应的时间值可以是以下几种情况：

- 数字：表示具体的时间值。例如，0表示秒数为0，12表示小时数为12。
- 特殊字符：
    - `*`：表示该时间单位可以是任何值。例如，在分钟位置上的*表示每分钟。
    - `?`：用于不指定值。例如，在星期位置上的?表示不指定星期几。
    - `-`：表示时间范围。例如，10-12表示从10点到12点。
    - `/`：表示时间间隔。例如，0/15表示从0分钟开始，每隔15分钟。

通过组合这些时间单位和时间值，可以创建不同的Cron表达式，以满足不同的任务调度需求。

---

## 使用说明

> 该组件依赖[element plus](https://element-plus.org/zh-CN/guide/installation.html)组件库

### 安装

```shell
npm install ve-cron-select
```

### 卸载

```shell
npm uninstall ve-cron-select
```

---

## Api

在需要使用该组件的 Vue 文件中，引入组件：

```vue

<ve-cron @change="handleChangeCron"/>
```

### 事件

| 事件名    | 说明          | 回调参数    |
|--------|-------------|---------|
| change | 在组件中选项变化时触发 | cron字符串 |

## Assets

[源码：Github](https://github.com/liuhuiwenllfy/element-plus-pro/tree/master/src/components/ve-cron)

[源码：Gitee](https://gitee.com/liu-ling-feng-yu/element-plus-pro/tree/master/src/components/ve-cron)

[组件库演示地址](https://epp.liulingfengyu.cn/preview/#/ve-cron)

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
