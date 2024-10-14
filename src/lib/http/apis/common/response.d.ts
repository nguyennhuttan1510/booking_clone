export interface Response<T extends any> {
  data: T
  message?: string
  status?: boolean
}