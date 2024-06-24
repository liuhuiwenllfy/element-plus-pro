```vue

<ve-default-login avatar="avatar.png" @handle-login="console.log('登录')"
                  @handle-register="console.log('注册')"></ve-default-login>
<el-divider/>
<ve-user-info
    :list="[{
                    code:'userInfo',
                    name:'个人中心',
                    icon:'User'
                  }]"
    avatar="avatar.png"
    username="sysadmin"
    @handle-click="console.log($event)"
    @handle-sign-out="console.log('登出')"></ve-user-info>
```
