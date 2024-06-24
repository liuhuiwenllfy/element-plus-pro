```ts

const _cron = ref("* * * * * ? *")
```

```vue

<ve-cron-select :cron="_cron" style="margin: 20px" @change="(e)=> {console.log(e)}"/>
```
