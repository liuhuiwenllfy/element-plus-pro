```ts
const _isShowBack = ref(false)

const scrollbarRef = ref<InstanceType<typeof ElScrollbar>>()

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

<el-scrollbar ref="scrollbarRef"
              @scroll="scroll">
  <router-view/>
</el-scrollbar>
<ve-back-top :is-show-back="_isShowBack" class="back-top" @back-top="backTop">
  <template #default>
    <el-popover
        :width="200"
        placement="left"
        trigger="hover">
      <el-image
          :preview-src-list="['https://resource.liulingfengyu.cn/img/公众号二维码.jpg']"
          src="https://resource.liulingfengyu.cn/img/公众号二维码.jpg"
      />
      <div style="text-align: center">关注公众号</div>
      <template #reference>
        <el-button>
          <el-icon>
            <VeWeixin/>
          </el-icon>
        </el-button>
      </template>
    </el-popover>
    <div class="line"></div>
    <el-tooltip
        class="box-item"
        effect="dark"
        placement="left">
      <template #content>
        反馈
      </template>
      <el-button :icon="InfoFilled"></el-button>
    </el-tooltip>
  </template>
</ve-back-top>
```

```scss
.back-top {

  .el-button {
    height: 50px;
    width: 50px;
    border: none;
    background-color: var(--el-bg-color);
    color: var(--el-text-color-placeholder);
    font-size: 20px;

    &:hover {
      color: var(--el-color-primary);
      background-color: transparent;
    }
  }

  .line {
    width: 50px;
    border-top: 1px solid;
    border-color: var(--el-border-color-lighter);
  }
}
```