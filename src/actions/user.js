// import { API } from '../config'
import history from '../history';

export const REGISTER = 'REGISTER';
export function register(user) {
  history.push('home');
  return {
    type: REGISTER,
    user,
  };
}

export const UPDATE_USER = 'UPDATE_USER';
export function updateUser(update) {
  return {
    type: UPDATE_USER,
    update,
  };
}
