<template>
  <div class="row">
    <div class="col-4 left-panel">
      <div><h4>Folder</h4></div>
      <ItemLeft
        :folder="folders"
        :typeIcons="typeIcons"
        @getFolder="selectFolder"
      />
    </div>
    <div class="col-8">
      <RightPanel
        :folders="folderParent.childFolders"
        :titleFolder="title"
        :typeIcons="typeIcons"
        @getFolder="selectFolder"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps } from 'vue'
import RightPanel from './RightPanel.vue'
import ItemLeft from './ItemLeft.vue'
import { useGetFolderParentStore } from '../stores/folderStore'
import type { Folder as FolderType } from '../service/type'

let title = ref<string>()

const props = defineProps<{
  folders: FolderType[]
  // selectedFolder: FolderType | null
}>()

const folderParent = useGetFolderParentStore()

let typeIcons = [
  {
    name: 'folder',
    icon: 'folder',
  },
  {
    name: 'exe',
    icon: 'file',
  },
  {
    name: 'pdf',
    icon: 'file-pdf',
  },
  {
    name: 'word',
    icon: 'file-word',
  },
]

const selectFolder = (folderId: number, folderName: string) => {
  title.value = folderName
  folderParent.fetchFolders(folderId)
}
</script>

<style scoped>
.left-panel {
  border-right: 1px solid #ddd;
  margin: 0px;
  padding: 0px;
}
.btn:hover {
  color: #000000 !important;
  background-color: #ddd !important;
  border-color: var(--bs-btn-hover-border-color) !important;
}
</style>
