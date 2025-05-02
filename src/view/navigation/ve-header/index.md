```ts
const menuList = [
    {
        "id": "e9ffbd2bb49d540d5544ce735522b190",
        "menuCode": "home",
        "menuName": "首页",
        "menuNameEn": "Home",
        "parentId": "0",
        "menuLevel": 0,
        "menuSort": 0,
        "menuIcon": "HomeFilled",
        "menuPath": "/home",
        "children": [
            {
                "id": "a4f34cc62d2a4680b602531b5c5a0126",
                "menuCode": "overview",
                "menuName": "Overview 组件总览",
                "menuNameEn": "Overview Component overview",
                "parentId": "e9ffbd2bb49d540d5544ce735522b190",
                "menuLevel": 1,
                "menuSort": 0,
                "menuIcon": "Shop",
                "menuPath": "/overview",
                "menuComponent": "home/overview",
                "children": []
            }
        ]
    }
]
```

```vue
<ve-header
    :dark="false"
    :drawerNews="false"
    :fullScreen="false"
    :layout="7"
    :list="[{
              code:'userInfo',
              name:'个人中心',
              icon:'User'
            }]"
    :menu="menuList"
    :newsNum="1"
    :sidebar="false"
    avatar="avatar.png"
    defaultActive="home"
    globalSize="default"
    language="en"
    logo="logo.png"
    name="CodeEase"
    navigation="工作台"
    tenantName="刘凌枫羽工作室" username="sysadmin"
    @handle-default-active-change="console.log($event)"
    @handle-night-change="console.log($event)"
    @handle-collapse-change="console.log($event)"
    @handle-full-screen-change="console.log($event)"
    @handle-global-size-change="console.log($event)"
    @handle-language-change="console.log($event)"
    @handle-news-change="console.log($event)"
    @handle-sign-out="console.log('登出')"
    @handle-user-click="console.log($event)"
    @handle-global-setting-click="console.log('全局设置')"
/>
```
