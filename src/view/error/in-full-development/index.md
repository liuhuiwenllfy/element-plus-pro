```ts
import InFullDevelopment from "ve-error/in-full-development/index.vue";
import router from '@/router'
import {useCommonStore} from "@/pinia/common.ts";

const back = () => {
    router.go(-1)
}
```

```vue

<in-full-development :language="commonStore.getLocale" @handle-back="back"/>
```
