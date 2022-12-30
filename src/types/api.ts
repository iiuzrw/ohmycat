export interface Article {
  _id: string
  title: string
  content: string
  label: string
  createTime: string
  updateTime: string
  state: 0 | 1
  cover?: string
}

export interface LoginForm {
  username: string
  password: string
}

export interface User {
  _id: string
  username: string
  role: string
  isDeleted: number
  createTime: string
  updateTime: string
}

export interface ArticleForm {
  _id: string
  title: string
  content: string
  label?: string
}

export interface Image {
  _id?: string
  name: string
  url: string
  articleId?: string
  description?: string
  createTime?: string
  state?: number
}

export interface Picture {
  _id?: string
  nickname: string
  url: string
  labels: string[]
  description?: string
  createTime?: string
  updateTime?: string
  state?: number
}

export interface PictureMessage {
  _id?: string
  pictureId: string
  nickname: string
  content: string
  createTime?: string
  updateTime?: string
  state?: number
}