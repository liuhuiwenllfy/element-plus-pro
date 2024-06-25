```ts
import VeError404 from 've-error/404/index.vue'
import router from '@/router'
import {useCommonStore} from "@/pinia/common.ts";

const back = () => {
    router.go(-1)
}
```

```vue

<ve-error404 :language="commonStore.getLocale" @handle-back="back"/>
```
