import type { AxiosRequestHeaders } from 'axios'
import hyRequest from '..'
import type { IAccount } from '@/types'
import type { HYRequestConfig } from '../request/type'
// import { localCache } from '@/utils/cache'
// import { LOGIN_TOKEN } from '@/global/constants'

export function accountLoginRequest(account: IAccount) {
  return hyRequest.post({
    url: '/login',
    data: account
  } as HYRequestConfig)
}

export function getUserInfoById(id: number) {
  return hyRequest.get({
    url: `/users/${id}`
    // headers: {
    //   Authorization: 'Bearer ' + localCache.getCache(LOGIN_TOKEN)
    // }
  } as HYRequestConfig)
}

export function getUserMenusByRoleId(id: number) {
  return hyRequest.get({
    url: `/role/${id}/menu`
  } as HYRequestConfig)
}
