```ts
import VeError500 from 've-error/500/index.vue'
import router from '@/router'
import {useCommonStore} from "@/pinia/common.ts";

const back = () => {
    router.go(-1)
}
```

```vue
<ve-error500 :language="commonStore.getLocale" @handle-back="back"/>
```
