/**
 * 函数节流, 防止函数在特定时间内多次执行
 * @param { } method  需要节流的函数体
 * @param {*} duration   在多少秒内该函数只能触发一次.默认1.5秒内.防止多次触发
 *
 * usage:
 *
 * old:
 *
 * actionMethods (params) {
 *   alert('abc)
 * }
 *
 * new:
 * actionMethods: this.$utils.throttle((params) => {
 *   alert('abc')
 * },2500)
 *
 *
 */

export default function throttle(method, duration = 1500) {
  let begin = new Date()
  return function() {
    const context = this
    const args = arguments
    const current = new Date()
    if (current - begin >= duration) {
      method.apply(context, args)
      begin = current
    }
  }
}
