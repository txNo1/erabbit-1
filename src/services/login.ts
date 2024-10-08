import type { LoginResult } from "@/types/member"
import { http } from "@/utils/http"

type LoginParams = {
  code: string,
  encryptedData: string,
  iv: string
}
export const LoginWxAPI = (data: LoginParams) => {
  return http<LoginResult>({
    method: 'POST',
    url: '/login/wxMin',
    data
  })
}


// 小程序登录内测版
export const postLoginWxMinSimpleAPI = (phoneNumber: string) => {
  return http<LoginResult>({
    method: 'POST',
    url: '/login/wxMin/simple',
    data: {
      phoneNumber,
    }
  })
}