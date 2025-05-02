```ts
import VeError401 from 've-error/401/index.vue'
import router from '@/router'
import {useCommonStore} from "@/pinia/common.ts";

const back = () => {
    router.go(-1)
}
```

```vue
<ve-error401 :language="commonStore.getLocale" @handle-back="back"/>
```
