import { defineStore } from 'pinia'
import { ref } from 'vue'
import instance from '../service/api'
import type { ApiResponse, Folder } from '../service/type'

export const useGetFolderParentStore = defineStore(
  'getFolderParentStore',
  () => {
    const folders = ref<Folder[]>([])
    const childFolders = ref<Folder[]>([])

    const fetchFolders = async (id?: number) => {
      try {
        if (id) {
          const response = await instance.get<ApiResponse>(`/folders/${id}`)
          if (!response.data.meta.success) {
            throw new Error(response.data.meta.message)
          }
          childFolders.value = response.data.data.folders
          console.log(response.data.data.folders)
        } else {
          const response = await instance.get<ApiResponse>(`/folders`)

          if (!response.data.meta.success) {
            throw new Error(response.data.meta.message)
          }
          folders.value = response.data.data.folders
        }
      } catch (err) {
        folders.value = []
        childFolders.value = []
      }
    }

    return {
      folders,
      childFolders,
      fetchFolders,
    }
  },
)
