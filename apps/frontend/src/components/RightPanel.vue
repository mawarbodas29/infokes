<template>
  <div>
    <div>
      <h4>{{ titleFolder }}</h4>
    </div>
    <div class="row">
      <div class="col-2 text-center" v-for="item in folders" :key="item.id">
        <div
          @click="getFolder(item.id, item.name)"
          class="card"
          style="width: 10rem"
        >
          <div class="card-body">
            <div v-for="icon in typeIcons" :key="icon.name">
              <div v-if="item.fileType && icon.name == item.fileType">
                <font-awesome-icon :icon="['fas', icon.icon]" size="3x" />
              </div>
            </div>
          </div>
          <div>{{ item.name }}</div>
        </div>
      </div>
      <div v-if="!folders.length" class="text-center mt-4"></div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useGetFolderParentStore } from '../stores/folderStore'

const folderParent = useGetFolderParentStore()
defineProps({ folders: Array, titleFolder: String, typeIcons: Array })
const emit = defineEmits(['getFolder'])

function getFolder(id: number, name: string) {
  emit('getFolder', id, name)
}
</script>
<style scoped>
.card {
  --bs-card-border-color: #fff;
}
</style>
