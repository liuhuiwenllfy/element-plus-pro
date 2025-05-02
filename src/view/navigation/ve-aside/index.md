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
<ve-aside
    :layout="7"
    :menu="menuList"
    :sidebar="false"
    default-active="workbench"
    language="zhCn"
    logo="logo.png"
    name="Demo"
    @handle-active-change="(index)=>{console.log(index)}"
>
</ve-aside>
```
