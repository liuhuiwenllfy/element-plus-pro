<script lang="ts" setup>

import {ref, watch} from 'vue'
import {ElMessageBox, TabsPaneContext} from 'element-plus'
import {resData} from '@/entity/res'
import {
  deleteRichTextTemplate,
  getRichTextTemplateList,
  insertRichTextTemplate,
  updatePublish,
  updateRichTextTemplate
} from '@/api/result/richTextTemplate'
import {RichTextTemplateInfoVo} from '@/entity/vo/system/RichTextTemplateInfoVo'
import {Delete, Download, EditPen, More, Plus, Search, Upload} from '@element-plus/icons-vue'
import {RichTextTemplateInfoDto} from '@/entity/dto/system/RichTextTemplateInfoDto'
import {RichTextTemplateInfoSaveDto} from '@/entity/dto/system/RichTextTemplateInfoSaveDto'
import Add from '@/components/ve-md-editor/richTextTemplate/add/index.vue'
import Edit from '@/components/ve-md-editor/richTextTemplate/edit/index.vue'
import {useI18n} from 'vue-i18n'
import VeMdPreview from '@/components/ve-md-preview/index.vue'

const props = defineProps({
  dialogVisible: {
    type: Boolean,
    required: true,
    default: () => false
  }
})

const emits = defineEmits(['closed', 'onSubmit'])

const closed = () => {
  emits('closed')
}

const submitForm = () => {
  emits('onSubmit', selectedTemplate.value.content)
}

const activeName = ref('first')

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}

watch(() => props.dialogVisible, () => {
  if (props.dialogVisible) {
    getSysRichTextTemplateData()
    getOtherRichTextTemplateData()
    getMyRichTextTemplateData()
  }
})

const title = ref()
const title1 = ref()

const sysRichTextTemplate = ref<RichTextTemplateInfoVo[]>([])

const getSysRichTextTemplateData = async () => {
  const richTextTemplateInfoDto = <RichTextTemplateInfoDto>{}
  richTextTemplateInfoDto.isPublish = true
  richTextTemplateInfoDto.type = 1
  richTextTemplateInfoDto.title = title.value
  const res = <resData>await getRichTextTemplateList(richTextTemplateInfoDto)
  if (res.ok) {
    sysRichTextTemplate.value = res.data
  }
}

const otherRichTextTemplate = ref<RichTextTemplateInfoVo[]>([])

const getOtherRichTextTemplateData = async () => {
  const richTextTemplateInfoDto = <RichTextTemplateInfoDto>{}
  richTextTemplateInfoDto.isPublish = true
  richTextTemplateInfoDto.type = 2
  richTextTemplateInfoDto.isMyOwn = false
  richTextTemplateInfoDto.title = title.value
  const res = <resData>await getRichTextTemplateList(richTextTemplateInfoDto)
  if (res.ok) {
    otherRichTextTemplate.value = res.data
  }
}

const myRichTextTemplate = ref<RichTextTemplateInfoVo[]>([])

const getMyRichTextTemplateData = async () => {
  const richTextTemplateInfoDto = <RichTextTemplateInfoDto>{}
  richTextTemplateInfoDto.isMyOwn = true
  richTextTemplateInfoDto.title = title1.value
  const res = <resData>await getRichTextTemplateList(richTextTemplateInfoDto)
  if (res.ok) {
    myRichTextTemplate.value = res.data
  }
}


const selectedTemplate = ref<RichTextTemplateInfoVo>()
const handleMenuClick = (data: RichTextTemplateInfoVo) => {
  selectedTemplate.value = data
}

const addTemplate = () => {
  addDialogVisible.value = true
}

const updateTemplate = (id: string) => {
  editDialogVisible.value = true
  selected.value = id
}

const {t} = useI18n();

const onDelete = (id: String) => {
  ElMessageBox.confirm(
      t('message.isDelete'),
      t('message.warning'),
      {
        confirmButtonText: t('message.confirm'),
        cancelButtonText: t('message.cancel'),
        type: 'warning',
      }).then(async () => {
    const res = <resData>await deleteRichTextTemplate({idList: id})
    if (res.ok) {
      await getMyRichTextTemplateData()
    }
  }).catch(() => {
  })
}

const onChangeShow = async (id: string, isPublish: boolean) => {
  const res = <resData>await updatePublish({
    id: id,
    isPublish: isPublish
  })
  if (res.ok) {
    await getSysRichTextTemplateData()
    await getOtherRichTextTemplateData()
    await getMyRichTextTemplateData()
  }
}

const addDialogVisible = ref(false)

const editDialogVisible = ref(false)

const selected = ref()

const onAdd = async (richTextTemplateInfoSaveDto: RichTextTemplateInfoSaveDto) => {
  const res = <resData>await insertRichTextTemplate(richTextTemplateInfoSaveDto)
  if (res.ok) {
    addDialogVisible.value = false
  }
}

//修改角色
const onEdit = async (richTextTemplateInfoSaveDto: RichTextTemplateInfoSaveDto) => {
  const res = <resData>await updateRichTextTemplate(richTextTemplateInfoSaveDto)
  if (res.ok) {
    editDialogVisible.value = false
  }
}

const searchTemplate = () => {
  getSysRichTextTemplateData()
  getOtherRichTextTemplateData()
}
const searchTemplate1 = () => {
  getMyRichTextTemplateData()
}
</script>

<template>
  <el-dialog
      v-model="props.dialogVisible"
      class="richTextTemplate"
      fullscreen
      @closed="closed">
    <template #header>
      {{ $t('message.selectTemplate') }}
    </template>
    <el-row :gutter="20">
      <el-col :span="16">
        <el-empty v-if="!selectedTemplate"
                  :description="$t('message.selectParameter', {parameter: $t('message.template')})"></el-empty>
        <ve-md-preview v-if="selectedTemplate" :modelValue="selectedTemplate?.content" editor-id="richTextTemplate-editor-id"
                       height="calc(100vh - 110px)"/>
      </el-col>
      <el-col :span="8">
        <el-button :disabled="!selectedTemplate" style="width: 100%" type="primary" @click="submitForm">
          {{ $t('message.useThisTemplate') }}
        </el-button>
        <el-tabs v-model="activeName" style="margin-top: 20px" @tab-click="handleClick">
          <el-tab-pane :label="$t('message.recommend')" name="first">
            <el-input v-model="title" :suffix-icon="Search" @change="searchTemplate"/>
            <el-menu
                class="el-menu-vertical">
              <el-sub-menu index="1">
                <template #title>
                  <span>{{ $t('message.systemTemplate') }}</span>
                </template>
                <el-menu-item v-for="(item, index) in sysRichTextTemplate" :key="index" :index="item.id"
                              @click="handleMenuClick(item)">
                  <el-text truncated type="info">{{ item.title }}</el-text>
                </el-menu-item>
              </el-sub-menu>
              <el-sub-menu index="2">
                <template #title>
                  <span>{{ $t('message.otherTemplates') }}</span>
                </template>
                <el-menu-item v-for="(item, index) in otherRichTextTemplate" :key="index" :index="item.id"
                              @click="handleMenuClick(item)">
                  <el-text truncated type="info">{{ item.title }}</el-text>
                </el-menu-item>
              </el-sub-menu>
            </el-menu>
          </el-tab-pane>
          <el-tab-pane :label="$t('message.mine')" name="second">
            <el-input v-model="title1" :suffix-icon="Search" @change="searchTemplate1"/>
            <el-menu
                class="el-menu-vertical1"
                default-active="1-1">
              <el-menu-item v-for="(item, index) in myRichTextTemplate" :key="index" :index="item.id">
                <el-text style="width: calc(100% - 30px)" truncated type="info" @click="handleMenuClick(item)">
                  {{ item.title }}
                </el-text>
                <el-dropdown trigger="click">
                  <span class="el-dropdown-link">
                    <el-link :icon="More" :underline="false"></el-link>
                  </span>
                  <template #dropdown>
                    <el-dropdown-menu>
                      <el-dropdown-item :icon="EditPen" @click="updateTemplate(item.id)">{{ $t('message.edit') }}
                      </el-dropdown-item>
                      <el-dropdown-item :icon="Delete" @click="onDelete(item.id)">{{ $t('message.delete') }}
                      </el-dropdown-item>
                      <el-dropdown-item v-if="item.isPublish" :icon="Upload"
                                        @click="onChangeShow(item.id, !item.isPublish)">{{ $t('message.unpublish') }}
                      </el-dropdown-item>
                      <el-dropdown-item v-else :icon="Download" @click="onChangeShow(item.id, !item.isPublish)">
                        {{ $t('message.release') }}
                      </el-dropdown-item>
                    </el-dropdown-menu>
                  </template>
                </el-dropdown>
              </el-menu-item>
            </el-menu>
            <el-button :icon="Plus" style="width: 100%" text type="primary" @click="addTemplate">
              {{ $t('message.newTemplate') }}
            </el-button>
          </el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>
  </el-dialog>
  <Add
      :dialogVisible="addDialogVisible"
      @closed="addDialogVisible = false"
      @onSubmit="onAdd"/>
  <Edit
      :id="selected"
      :dialogVisible="editDialogVisible"
      @closed="editDialogVisible = false"
      @onSubmit="onEdit"/>
</template>

<style lang="less" scoped>
.richTextTemplate {

  .el-menu-vertical {
    margin-top: 5px;
    height: 362px;
    overflow: auto;
    border-right: none;
  }

  .el-menu-vertical1 {
    margin-top: 5px;
    height: calc(100vh - 330px);
    overflow: auto;
    border-right: none;

  }
}

::v-deep(.el-tabs__nav-wrap::after) {
  height: 0;
}
</style>
