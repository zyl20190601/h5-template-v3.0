import type { AxiosRequestConfig } from 'axios'
import type { RequestParam } from '@/typings/server.d'
import { transformRequestParam } from './transform'
import CustomAxiosInstance from './instance'

/**
 * 创建请求
 * @param axiosConfig - axios配置
 * @param backendConfig - 后端接口字段配置
 */
export function createRequest(axiosConfig: AxiosRequestConfig): any {
  const customInstance = new CustomAxiosInstance(axiosConfig)

  /**
   * 异步promise请求
   * @param param - 请求参数
   * - url: 请求地址
   * - method: 请求方法(默认get)
   * - data: 请求的body的data
   * - axiosConfig: axios配置
   */
  function request(param: RequestParam): Promise<any> {
    const { instance } = customInstance
    const handleConfig = transformRequestParam(param)
    return new Promise((resolve, reject) => {
      instance(handleConfig)
        .then((response) => {
          const {
            config: { url },
            data: { result },
          } = response
          console.log(
            `%c 接收 api_${url}`,
            'background:#2472C8;color:#fff',
            result,
          )
          //对接口错误码做处理
          resolve(result)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

  return {
    request,
  }
}
