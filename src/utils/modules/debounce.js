/**
 * 函数调用n秒后才会执行，如果函数在n秒内被调用的话则函数不执行，重新计算执行时间
 * @param { } method  需要去抖的函数体
 * @param {*} delay   在多少秒内该函数只能触发一次.默认2秒内.防止多次触发
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
 * actionMethods: this.$utils.debounce((params) => {
 *   alert('abc')
 * },500)
 *
 *
 */

export default function debounce(method, delay = 300) {
  let timer = null
  return function() {
    const context = this
    const args = arguments
    clearTimeout(timer)
    timer = setTimeout(function() {
      method.apply(context, args)
    }, delay)
  }
}
