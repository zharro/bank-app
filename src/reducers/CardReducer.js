import { ADD_BY_NUMBER } from '../actions/card'
  
  export default function cards (
    state = {
        cards: []
    },
    action
  ) {
    switch (action.type) {
      case ADD_BY_NUMBER:
        return Object.assign({}, state, {
          cards: [...state.cards, action.card]
        })
      default:
        return state
    }
  }
  
    