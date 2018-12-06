/**
 * Utils - Cookies
 * =============================================
 * Author: Vicco Wang
 * Date: 2018.07.09
 */
import Cookie from 'vue-cookie'

function getCookie (key) {
  return Cookie.get(key)
}

function setCookie (key, token) {
  Cookie.set(key, token, 7)
}

function removeCookie (key) {
  Cookie.delete(key)
}

export { getCookie, setCookie, removeCookie }
