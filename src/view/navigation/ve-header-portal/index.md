```ts
const userInfo = computed(() => {
    return reactive([
        {
            code: 'userInfo',
            name: '个人中心',
            icon: 'User'
        }
    ])
})

const menu = computed(() => {
    return reactive([
        {
            name: '产品',
            children: [
                {
                    name: '产品1',
                    describe: '产品描述',
                    route: '#'
                },
                {
                    name: '产品2',
                    describe: '产品描述',
                    route: '#'
                },
            ]
        },
        {
            name: '解决方案',
            route: '#'
        },
    ])
})
```

```vue

<ve-header-portal
    :dark="commonStore.getDark"
    :language="commonStore.getLocale"
    :list="userInfo"
    :menu="menu"
    :name="commonStore.getName"
    :newsNum="commonStore.getNewsNum"
    avatar="avatar.png"
    logo="logo.png"
    @handle-menu-click="console.log($event)"
    @handle-logo-click="console.log('home')"
    @handle-night-change="commonStore.changeDark($event)"
    @handle-language-change="commonStore.changeLocale($event)"
    @handle-sign-out="console.log('登出')"
    @handle-user-click="console.log($event)"
    @handle-login="console.log('登录')"
    @handle-register="console.log('注册')"/>
```
