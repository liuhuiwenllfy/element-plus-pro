> 使用方法

```ts
import VeCronSelect from 've-cron-select/index.vue'

const _cron = ref("* * * * * ? *")

const handleChange = (e: string) => {
    console.log(e)
}
```

```vue
<ve-cron-select :cron="_cron" style="margin: 20px" @change="handleChange"/>
```
