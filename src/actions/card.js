// import { API } from '../config' 
import history from '../history' 

export const ADD_BY_NUMBER = 'ADD_BY_NUMBER'
export function addByNumber(card) {
    history.push('/home')
    return {
    type: ADD_BY_NUMBER,
    card
  }
}
