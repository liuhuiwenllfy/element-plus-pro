```ts
import VeError403 from 've-error/403/index.vue'
import router from '@/router'
import {useCommonStore} from "@/pinia/common.ts";

const back = () => {
    router.go(-1)
}
```

```vue
<ve-error403 :language="commonStore.getLocale" @handle-back="back"/>
```
