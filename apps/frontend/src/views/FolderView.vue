<template>
  <div class="container p-5">
    <LeftPanel :folders="folderParent.folders" />
  </div>
</template>

<script setup lang="ts">
import Navbar from '../components/Navbar.vue'
import LeftPanel from '../components/LeftPanel.vue'

import { computed, onMounted } from 'vue'
import { useGetFolderParentStore } from '../stores/folderStore'

const folderParent = useGetFolderParentStore()
onMounted(() => {
  folderParent.fetchFolders()
})
</script>

<style scoped></style>
