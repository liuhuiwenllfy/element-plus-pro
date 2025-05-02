```ts
import VeError200 from 've-error/200/index.vue'
import router from '@/router'
import {useCommonStore} from "@/pinia/common.ts";

const back = () => {
    router.go(-1)
}
```

```vue
<ve-error200 :language="commonStore.getLocale" @handle-back="back"/>
```
