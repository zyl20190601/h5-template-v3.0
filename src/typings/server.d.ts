import type { AxiosRequestConfig, ResponseType } from 'axios'

/** 后端接口返回的数据结构配置 */
export declare namespace FetchResponse {
  interface Response<T = any> {
    /** 表示后端请求状态码的属性字段 */
    code: string
    /** 表示后端消息的属性字段 */
    message: string
    /** 表示后端请求数据的属性字段 */
    result: T
    /** 后端业务上定义的成功请求的状态 */
    status: string
  }
}

// 请求方式
export type RequestMethod = 'GET' | 'POST' | 'PUT' | 'DELETE'

// content-type 类型
export type RequestContentType = 'json' | 'form-data' | 'form-urlencoded'

// 请求参数
export interface RequestParam {
  url: string
  method: RequestMethod
  data?: any
  axiosConfig?: AxiosRequestConfig
  responseType?: ResponseType
  type?: RequestContentType
}

export type RequestFunType = (options: RequestParam) => Promise<any>
