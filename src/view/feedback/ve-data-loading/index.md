```ts
const size = ref(9)

const currentTotal = ref(3)

const loadMoreShow = ref(true)

const skeletonShow = ref(false)

const loadMore = async () => {
    currentTotal.value += 3
    skeletonShow.value = true
    setTimeout(() => {
        skeletonShow.value = false
        loadMoreShow.value = currentTotal.value < size.value
    }, 500)
}
```

```vue
<p v-for="item in currentTotal" :key="item" class="scrollbar-demo-item">{{ item }}</p>
<ve-data-loading
    :load-more-show="loadMoreShow"
    :size="size"
    :skeleton-show="skeletonShow"
    @load-more="loadMore"/>
```
