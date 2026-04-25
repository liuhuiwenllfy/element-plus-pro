<script lang="ts" setup>

import {Search} from "@element-plus/icons-vue";
import {ref} from "vue";
import menuList from '@/api/json/menuList.json'
import {MenuInfoShowVo} from "@/entity/vo/MenuInfoShowVo.ts";
import {useCommonStore} from "@/pinia/common.ts";
import router from "@/router";

const search = ref()

const commonStore = useCommonStore()

const getMenuName = (item: MenuInfoShowVo) => {
  if (commonStore.getLocale === 'en') {
    return item.menuNameEn
  } else {
    return item.menuName
  }
}

const getChildLength = (item: MenuInfoShowVo) => {
  return item.children.filter(o => getMenuName(o).includes(search.value)).length
}

const menu = ref<MenuInfoShowVo[]>(<any>menuList)
</script>

<template>
  <div class="overview">
    <h2>Overview 组件总览</h2>
    <el-text>以下是 Element plus pro 提供的所有组件。</el-text>
    <div style="margin-top: 20px">
      <el-input
          v-model="search"
          :prefix-icon="Search"
          placeholder="Search Components"
          size="large"
      />
    </div>
    <el-divider/>
    <div v-for="(item, index) in menu" :key="index">
      <div v-if="index > 0">
        <div v-if="!search || getChildLength(item) > 0">
          <el-space size="small">
            <el-space>
              <component :is="item.menuIcon" class="el-icon" style="font-size: 27px"/>
              <h3 style="font-weight: bold">{{ getMenuName(item) }}</h3>
            </el-space>
            <el-tag effect="dark" round size="small" type="primary">
              {{ !search ? item.children.length : getChildLength(item) }}
            </el-tag>
          </el-space>
          <el-row :gutter="14">
            <template v-for="(item1, index1) in item.children" :key="index1">
              <el-col v-if="!search || getMenuName(item1).includes(search)" :lg="6" :md="12" :sm="24" :xl="6">
                <el-card :bodyStyle="{padding: '0px'}" shadow="hover" @click="router.push(item1.menuCode)">
                  <template #header>
                    <el-text>{{ getMenuName(item1) }}</el-text>
                  </template>
                  <div class="card-body">
                    <component :is="item1.menuIcon" class="el-icon"/>
                  </div>
                </el-card>
              </el-col>
            </template>
          </el-row>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.overview {
  .el-card {
    margin: 7px 0;

    ::v-deep(.el-card__header) {
      padding: 10px;
    }
  }
}
.card-body {
  padding: 60px 0;
  text-align: center;
  font-size: 40px;
  background-color: $light-fill;
}
</style>
