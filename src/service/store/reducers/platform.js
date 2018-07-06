import { handleActions } from 'redux-actions'
import { SET_USER_INFO } from '../types'
import _assign from 'lodash'

export default handleActions({
  [SET_USER_INFO] (state, action) {
    return {
      ...state,
      userInfo: _assign(action.payload, state.userInfo)
    }
  }
},
  {
    // init props
    userInfo: {
      userName: 'Your name'
    }
  })
