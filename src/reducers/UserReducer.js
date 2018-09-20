import { REGISTER, UPDATE_USER } from '../actions/user'

export default function user(
  state = {
    //for development
    name: 'Артем',
    lastName: 'Дзюба',
    middleName: 'Иванович',
    phone: '89111392332',
    email: 'dz',

    //опции по умолчанию
      sms: true,
      push: true,
      internetOperations: true
  },
  action
) {
  switch (action.type) {
    case REGISTER:
      return Object.assign({}, state, {
        ...state, ...action.user
      })
    case UPDATE_USER:
      return Object.assign({}, state, {
        ...state, [action.update.name]: action.update.value
      })
    default:
      return state
  }
}

