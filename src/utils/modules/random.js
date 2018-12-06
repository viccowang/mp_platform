/**
 * Utils - Random
 * =============================================
 * Author: Vicco Wang
 * Date: 2018.07.09
 */
import _random from 'lodash/random'

// 随机数字
function randomNumber (min = 0, max = 1, isFloating) {
  return _random(min, max, isFloating)
}

// 随机字符串
function randomString (len = 32) {
  const char = 'Aa1Bb2Cc3Dd4Ee5Ff6Gg7Hh8Ii9Jj0KkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz'
  let randomChar = ''
  for (let i = 0; i < len; i++) {
    randomChar += char.charAt(randomNumber(0, 62))
  }
  return randomChar
}

export {
  randomNumber,
  randomString
}
