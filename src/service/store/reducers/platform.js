import { handleActions } from 'redux-actions'
import { SET_USER_INFO, SET_NAVIGATION_SHOW_STATE } from '../types'
import _assign from 'lodash'

export default handleActions({
  [SET_NAVIGATION_SHOW_STATE] (state, action) {
    return {
      ...state,
      navigationShowState: action.payload
    }
  },
  [SET_USER_INFO] (state, action) {
    return {
      ...state,
      userInfo: _assign(action.payload, state.userInfo)
    }
  }
},
  {
    // init props
    navigationShowState: false,
    userInfo: {
      userName: 'Your name'
    }
  })
