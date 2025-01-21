// types/api.ts
export interface Folder {
  id: number
  name: string
  fileType: string | null
  fileUrl: string | null
  size: number | null
  parentId: number
  is_deleted: number
  createdAt: string
  updatedAt: string | null
  children: Folder[] | null
}

export interface ApiResponse {
  meta: {
    success: boolean
    message: string
  }
  data: {
    folders: Folder[]
  }
}
