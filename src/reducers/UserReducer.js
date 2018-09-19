import { REGISTER } from '../actions/user'
  
  export default function user (
    state = {
    },
    action
  ) {
    switch (action.type) {
      case REGISTER:
        return Object.assign({}, state, {
          ...state, ...action.user
        })
      default:
        return state
    }
  }
  
    