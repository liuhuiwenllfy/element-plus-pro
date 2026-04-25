> 使用方法

```ts

const scrollbarRef = ref<InstanceType<typeof ElScrollbar>>()

const _isShowBack = ref(false)

const scroll = (scroll: any) => {
    _isShowBack.value = scroll.scrollTop > 80
}

const backTop = () => {
    if (scrollbarRef && scrollbarRef.value) {
        scrollbarRef.value.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
}
```

```vue
<ve-back-top :is-show-back="_isShowBack" class="back-top" @back-top="backTop">
  <template #default>
    <div :class="_isShowBack? 'bottom-color':''" class="weixin">
      <el-icon>
        <VeWeixin/>
      </el-icon>
    </div>
  </template>
</ve-back-top>
```

```scss
.back-top {

  .weixin {
    font-size: 24px;
    padding: 8px 13px 7px;

    &:hover {
      .el-icon {
        color: #66b1ff;
      }
    }
  }

  .bottom-color {
    border-bottom: 1px solid $light-border;

  }
}
```