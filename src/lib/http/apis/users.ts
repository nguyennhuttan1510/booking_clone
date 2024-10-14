import axios from "axios";
import {User} from "@/app/(layout-public)/signin/page";
import instance from "@/lib/http/instance";
import {ProfileType} from "@/lib/http/apis/users.d";
import {Response} from "@/lib/http/apis/common/response.d";

const getProfile = (profileID: string) => {
  if(!profileID) throw new Error('Not found profile ID')
  return instance.get<Response<ProfileType>>(`/profiles/${profileID}/`)
}

const updateProfile = (profileID: string, payload: Partial<ProfileType>) => {
  return instance.patch<Response<ProfileType>>(`/profiles/${profileID}/`, payload)
}

const getToken = (account: User) => {
  const body = {
    username: account.email,
    password: account.password
  }
  return instance.post(`/token/`, body)
}

const signUp = (body: {username: string, password: string}) => {
  if(!body) throw new Error('not found information register')
  return instance.post('/authentications/', body)
}

const verifyToken = (token: string) => {
  if(!token) {
    console.error('Not found token')
    return
  }
  const body = {
    token: token
  }
  return instance.post(`/token/verify/`, body)
}

// const verifySession = (token: string) => {
//   if(!token) {
//     console.error('Not found token')
//     return
//   }
//   return instance.post(`/clerk/verify/`, {}, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     }
//   })
// }

const UserAPI = {
  getProfile,
  updateProfile,
  getToken,
  signUp,
  verifyToken,
  // verifySession
}

export default UserAPI