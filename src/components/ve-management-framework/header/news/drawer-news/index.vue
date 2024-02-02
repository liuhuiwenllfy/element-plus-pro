<script lang="ts" setup>
import AntDesignClearOutlined from '~icons/ant-design/clear-outlined'
import {ChatLineRound, Close} from '@element-plus/icons-vue'
import {useStore} from '@/vuex/store'
import {resData} from '@/entity/res'
import {deleteMyAllNews, deleteMyNews, queryLatestNews} from '@/api/result/news'
import {ref, watch} from 'vue'
import {LatestNewsVo} from '@/entity/vo/system/LatestNewsVo'
import {ElMessageBox} from 'element-plus'
import {useI18n} from 'vue-i18n'
import {useRouter} from 'vue-router'

const store = useStore()
const router = useRouter()
const {t} = useI18n()

watch(() => store.state.drawerNews, () => {
  if (store.state.drawerNews) {
    latestNews()
  }
})

const data = ref<LatestNewsVo[]>([])

const latestNews = async () => {
  const res = <resData>await queryLatestNews()
  if (res.ok) {
    data.value = res.data
  }
}

const onDelete = (id: string) => {
  ElMessageBox.confirm(
      t('message.isDelete'),
      t('message.warning'),
      {
        confirmButtonText: t('message.confirm'),
        cancelButtonText: t('message.cancel'),
        type: 'warning',
      }).then(async () => {
    const res = <resData>await deleteMyNews({idList: id})
    if (res.ok) {
      await latestNews()
    }
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
    const res = <resData>await deleteMyAllNews()
    if (res.ok) {
      await latestNews()
    }
  }).catch(() => {
  })
}

const toMyNews = () => {
  router.replace('myNews').catch()
  store.commit('drawerNews', false);
}
</script>

<template>
  <div class="drawer-news">
    <el-drawer
        v-model="store.state.drawerNews"
        :size="390"
        :with-header="false"
        direction="rtl">
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
          <el-link :icon="AntDesignClearOutlined" :underline="false" class="close-news" type="primary" @click="onReset">
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
                   @click="onDelete(item.receiverId)"></el-link>
          <div style="margin-bottom: 5px">
            <el-space>
              <el-avatar :size="20" src="/img/header.png"/>
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
          <el-link :underline="false" @click="toMyNews">{{ item.title }}</el-link>
        </el-card>
      </el-scrollbar>
    </el-drawer>
  </div>
</template>

<style lang="less" scoped>
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
