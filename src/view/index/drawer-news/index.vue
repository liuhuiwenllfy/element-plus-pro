<script lang="ts" setup>
import {ChatLineRound, Close} from '@element-plus/icons-vue'
import {ref, watch} from 'vue'
import {LatestNewsVo} from '@/entity/vo/LatestNewsVo'
import {ElMessageBox} from 'element-plus'
import {useI18n} from 'vue-i18n'
import {VeClearOutlined} from "@/components/ve-icon/components.ts";
import {useCommonStore} from "@/pinia/common.ts";

const commonStore = useCommonStore();

const {t} = useI18n()

const data = ref<LatestNewsVo[]>([
  {
    id: '1',
    isRead: false,
    receiverId: '1',
    sender: 'element-plus-pro',
    sendingTime: '2024-6-12 22:03:58',
    title: "欢迎使用Element plus pro",
    type: 1,
    typeCh: '系统通知'
  }
])

const onDelete = () => {
  ElMessageBox.confirm(
      t('message.isDelete'),
      t('message.warning'),
      {
        confirmButtonText: t('message.confirm'),
        cancelButtonText: t('message.cancel'),
        type: 'warning',
      }).then(async () => {
  }).catch(() => {
  })
}

const onReset = () => {
  ElMessageBox.confirm(
      t('message.isDelete'),
      t('message.warning'),
      {
        confirmButtonText: t('message.confirm'),
        cancelButtonText: t('message.cancel'),
        type: 'warning',
      }).then(async () => {
  }).catch(() => {
  })
}

const _drawer = ref(commonStore.getDrawerNews)

watch(() => commonStore.getDrawerNews, () => {
  _drawer.value = commonStore.getDrawerNews
})

const handleClose = () => {
  commonStore.changeDrawerNews(false)
}
</script>

<template>
  <div class="drawer-news">
    <el-drawer
        v-model="_drawer"
        :size="390"
        :with-header="false"
        direction="rtl"
        @close="handleClose">
      <el-row>
        <el-col :span="12">
          <el-text>
            <el-icon>
              <ChatLineRound/>
            </el-icon>
            {{ $t('message.message') }}
          </el-text>
        </el-col>
        <el-col v-if="data.length > 0" :span="12" style="text-align: right">
          <el-link :icon="VeClearOutlined" :underline="false" class="close-news" type="primary" @click="onReset">
            {{ $t('message.reset') }}
          </el-link>
        </el-col>
      </el-row>
      <el-divider style="margin: 10px 0"/>
      <el-scrollbar height="calc(100% - 34px)">
        <el-empty v-if="data.length === 0" :description="$t('message.noData')"/>
        <el-card v-for="(item, index) in data" :key="index" :body-style="{padding:'15px'}" class="news-card"
                 shadow="hover">
          <el-link :icon="Close" :underline="false" class="close-news" type="primary"
                   @click="onDelete"></el-link>
          <div style="margin-bottom: 5px">
            <el-space>
              <el-avatar :size="20" src="avatar.png"/>
              <el-space direction="vertical" fill>
                <el-space>
                  <el-text>{{ item.sender }}</el-text>
                  <el-tag size="small">{{ item.typeCh }}</el-tag>
                  <el-tag :type="item.isRead ?'success':'danger'" size="small">
                    {{ item.isRead ? $t('message.haveRead') : $t('message.unread') }}
                  </el-tag>
                </el-space>
              </el-space>
            </el-space>
          </div>
          <el-link :underline="false">{{ item.title }}</el-link>
        </el-card>
      </el-scrollbar>
    </el-drawer>
  </div>
</template>

<style lang="scss" scoped>
.drawer-news {
  :deep(.el-drawer__body) {
    overflow: hidden;
  }

  .header {
    display: flex;
    align-items: center;
    font-size: 22px;

    .el-icon {
      margin-right: 5px
    }
  }

  .news-card {
    position: relative;
    margin-bottom: 10px;

    .close-news {
      position: absolute;
      right: 15px
    }
  }
}
</style>
