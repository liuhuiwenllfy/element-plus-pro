# ve-icon

## 功能描述

---

## 使用说明

### 安装

```shell
npm install ve-icon
```

### 卸载

```shell
npm uninstall ve-icon
```

### 注册

```ts
// main.ts中注册（按需注册）
import * as SvgSpinnersList from '/ve-icon/svg-spinners/components'
// 注册全局 ve-icon 组件（svg-spinners）
Object.keys(SvgSpinnersList).forEach((key) => {
    app.component(key, SvgSpinnersList[key as keyof typeof SvgSpinnersList])
})

import * as OtherList from '/ve-icon/other/components'
// 注册全局 ve-icon 组件（other）
Object.keys(OtherList).forEach((key) => {
    app.component(key, OtherList[key as keyof typeof OtherList])
})

import * as MdiLightList from '/ve-icon/mdi-light/components'
// 注册全局 ve-icon 组件（mdi-light）
Object.keys(MdiLightList).forEach((key) => {
    app.component(key, MdiLightList[key as keyof typeof MdiLightList])
})
```

---

## 作者信息

Author：刘凌枫羽

邮箱：1305156911@qq.com

Blog：[刘凌枫羽博客](https://blog.csdn.net/qq_38036909?type=blog)

公众号

[![](https://resource.liulingfengyu.cn/img/公众号二维码.jpg)](https://mp.weixin.qq.com/s?__biz=MzkxNDI2OTM0Nw==&mid=2247483939&idx=1&sn=ee8438a9047d92798765cd502820c67c&chksm=c171b7eff6063ef9a41b34f61ff6ac8c73259917505eb5d9a5b9a17e9ab3653da999e48a98d5#rd)

---

官网地址：https://www.liulingfengyu.cn/

插件市场：https://pm.liulingfengyu.cn/

Element Plus pro：https://epp.liulingfengyu.cn/