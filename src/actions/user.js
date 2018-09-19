// import { API } from '../config' 
import history from '../history' 

export const REGISTER = 'REGISTER'
export function register(user) {
    history.push('/home')
    return {
    type: REGISTER,
    user
  }
}
