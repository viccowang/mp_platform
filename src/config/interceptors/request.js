/**
 * Wepy Request Global Interceptors Configuration
 * =================================
 * Author: Vicco Wang
 * Date: 2018.07.06
 */
import wepy from 'wepy'
/**
 *
 *
 * @export
 * @param {*} config
 * @returns
 */
export function requestRequestSucessFunc (config) {
  // dosth before request
  return config
}

/**
 *
 *
 * @export
 * @param {*} response
 * @returns
 */
export function requestResponseSucessFunc (response) {
  /**
   * response 基本格式如下
   * {
   *  ...
   *  status: 200,
   *  data: {
   *    head: { success: 'true' },
   *    data: { some data here }
   *  }
   *  ...
   * }
   */
  // response by remote server
  if (response.statusCode === 200) {
    const {data, head} = response.data
    if (head.success === 'true') {
      return data
    } else {
      wepy.showToast({
        title: '服务器响应数据出错.',
        icon: 'none',
        duration: 2000,
        complete () {
          return { error: true }
        }
      })
    }
  }
}

export function requestResponseFailFunc (error) {
  return Promise.reject(error).catch(err => { console.warn(err) })
}
