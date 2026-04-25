> 使用方法

```ts
import VeHeaderPortal from 've-header-portal/index.vue'

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
    :list="userInfo"
    :menu="menu"
    :name="Element plus pro"
    avatar="avatar.png"
    logo="logo.png"/>
```
