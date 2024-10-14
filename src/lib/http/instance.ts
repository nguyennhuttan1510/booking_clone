import axios, {AxiosInstance} from "axios";
import {FIELD_ACCESS_TOKEN, TOKEN_TYPE} from "@/constants";

// export const initInstance = (): AxiosInstance => {
//   const instance = axios.create({
//     baseURL: 'http://localhost:8000',
//     headers: {
//       'Content-Type': "application/json",
//       'Authorization': token ? `${TOKEN_TYPE} ${token}` : ''
//     }
//   })
//   return instance
// }

// const instance = initInstance()

const instance = axios.create({
  baseURL: 'http://localhost:8000',
  headers: {
    'Content-Type': "application/json",
  }
})


export const setAuthorizationHeader = (token: string, tokenType = TOKEN_TYPE) => {
  instance.defaults.headers.common['Authorization'] = `${tokenType} ${token}`
}

export default instance
