/**
 * Global Injector
 * =======================================================
 * 全局注入器,这里注入全局request拦截器以及将通用服务和工具
 * =======================================================
 * Author: Vicco Wang
 * Date: 2018.07.10
 */
import wepy from 'wepy'
import requestInterceptor from '@/plugins/request'
import * as settings from '@/config'
import ajax from '@/plugins/api'
import utils from '@/utils'

export default {
  inject (wepyInstance) {
    // 注册全局请求拦截器
    wepyInstance.intercept('request', requestInterceptor)
    // 全局request请求服务
    wepy.component.prototype.$ajax = wepy.page.prototype.$ajax = ajax
    // 全局环境配置变量访问
    wepy.component.prototype.$settings = wepy.page.prototype.$settings = settings
    // 全局通用工具类服务
    wepy.component.prototype.$utils = wepy.page.prototype.$utils = utils
  }
}
