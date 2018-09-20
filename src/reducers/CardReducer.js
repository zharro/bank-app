import { ADD_BY_NUMBER } from '../actions/card'
  
  export default function cards (
    state = {
        cards: [
          //for development
        //   {
        //     name: 'Мегафон Банк',
        //     shortNumber: 'Mastercard, *3245',
        //     number: 2434243323453245,
        //     money: 5433,
        //     expiresAtYear: '2019',
        //     expiresAtMonth: '04'
        // }

        ]
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
  
    