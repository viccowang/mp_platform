/**
 * Global Redux Store
 * =================================
 * Author: Vicco Wang
 * Date: 2018.07 10
 */
import { createStore, applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise'
import rootReducer from '@/service/store/reducers'

export default function configStore () {
  const store = createStore(rootReducer, applyMiddleware(promiseMiddleware))
  return store
}
