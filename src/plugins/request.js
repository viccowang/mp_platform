import {
  requestRequestSucessFunc,
  requestResponseSucessFunc,
  requestResponseFailFunc }
  from '@/config/interceptors/request'

export default {
  config: requestRequestSucessFunc,
  success: requestResponseSucessFunc,
  fail: requestResponseFailFunc
}
