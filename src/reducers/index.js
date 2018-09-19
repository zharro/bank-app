import { combineReducers } from 'redux'
import cards from './CardReducer'
import user from './UserReducer'
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
    cards,
    user,
    routing: routerReducer
})

export default rootReducer