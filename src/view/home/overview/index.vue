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
</script>

<template>
  <h2>Overview 组件总览</h2>
  <el-text>以下是 Element Plus 提供的所有组件。</el-text>
  <div style="margin-top: 20px">
    <el-input
        v-model="search"
        :prefix-icon="Search"
        placeholder="Search Components"
        size="large"
    />
  </div>
  <el-divider/>
  <div v-for="(item, index) in <any>menuList" :key="index">
    <div v-if="index > 0">
      <el-space>
        <component :is="item.menuIcon" class="el-icon"/>
        <h3>{{ getMenuName(item) }}</h3>
        <el-tag effect="dark" round type="primary">
          {{ item.children.length }}
        </el-tag>
      </el-space>
      <el-row :gutter="20">
        <el-col v-for="(item1, index1) in item.children" :key="index1" :span="6">
          <el-card v-if="!search || getMenuName(item1).includes(search)" shadow="hover" style="margin: 10px 0"
                   @click="router.push(item1.menuCode)">
            <template #header>
              <div>
                <span>{{ getMenuName(item1) }}</span>
              </div>
            </template>
            <div class="card-body">
              <component :is="item1.menuIcon" class="el-icon"/>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card-body {
  margin: 20px;
  text-align: center;
  font-size: 40px;
  color: $brand;
}
</style>
