<template>
  <div>
    <div class="folder-item" v-for="item in folder" :key="item.id">
      <div v-if="item.fileType === 'folder'">
        <div v-for="icon in typeIcons" :key="icon.name">
          <div v-if="item.fileType && icon.name == item.fileType">
            <button class="btn" @click="toggleFolder(item.id)">
              <span
                class="arrow"
                :class="expandedFolders.includes(item.id) ? 'expanded' : ''"
                v-if="item.children.length > 0"
              ></span>
              <span v-else class="arrowElse"></span>
            </button>
            <span
              class="folder-name rounded p-1"
              :class="itemSelected == item.id ? 'bg-selected' : ''"
              @click="getFolder(item.id, item.name)"
            >
              <font-awesome-icon :icon="['fas', icon.icon]" />
              {{ item.name }}
            </span>
          </div>
        </div>
        <div
          v-if="item.children.length > 0 && expandedFolders.includes(item.id)"
        >
          <ItemLeft
            :folder="item.children"
            :typeIcons="typeIcons"
            @getFolder="getFolder"
            class="px-4"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { BlobOptions } from 'buffer'

const { folder, typeIcons } = defineProps({
  folder: Array,
  typeIcons: Array,
})
const emit = defineEmits(['getFolder'])
const expandedFolders = ref<number[]>([])
const itemSelected = ref<number>()

function getFolder(id: number, name: string) {
  emit('getFolder', id, name)
}

const toggleFolder = (folderId: number) => {
  if (expandedFolders.value.includes(folderId)) {
    expandedFolders.value = expandedFolders.value.filter(id => id !== folderId)
  } else {
    expandedFolders.value.push(folderId)
  }
}

const isExpanded = (folderId: number) =>
  expandedFolders.value.includes(folderId)

// function findValue(arr: array, key: string){
//   return arr.find(function(o){ return o.key===key }).value;
// }
</script>

<style scoped>
.arrow {
  display: inline-block;
  width: 8px;
  height: 8px;
  margin-right: 8px;
  border-left: 2px solid #333;
  border-bottom: 2px solid #333;
  transform: rotate(-135deg);
  transition: transform 0.2s;
}
.arrowElse {
  display: inline-block;
  width: 8px;
  height: 8px;
  margin-right: 8px;
  transform: rotate(-135deg);
  transition: transform 0.2s;
}
.arrow.expanded {
  transform: rotate(-45deg);
}
.folder-item {
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 4px 8px;
}
.folder-name {
  color: #333;
}
.bg-selected {
  background-color: #cecece;
}
</style>
