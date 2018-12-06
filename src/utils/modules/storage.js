/**
 * Utils - Storage
 * ==================================================
 * Author: Vicco Wang
 * Date: 2018.07.09
 *
 */
function setSession(key, data) {
  if (window.sessionStorage) {
    sessionStorage.setItem(key, JSON.stringify(data))
  }
}

function getSession(key) {
  if (window.sessionStorage) {
    return JSON.parse(sessionStorage.getItem(key))
  }
}

function removeSession(key) {
  if (window.sessionStorage) {
    sessionStorage.removeItem(key)
  }
}

// Local Storage
function setLocalStorage(key, data) {
  if (window.localStorage) {
    localStorage.setItem(key, JSON.stringify(data))
  }
}

function getLocalStorage(key) {
  if (window.localStorage) {
    return JSON.parse(localStorage.getItem(key))
  }
}

function removeLocalStorage(key) {
  if (window.localStorage) {
    localStorage.removeItem(key)
  }
}

export {
  setSession,
  getSession,
  removeSession,
  setLocalStorage,
  getLocalStorage,
  removeLocalStorage
}
