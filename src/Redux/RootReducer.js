import { combineReducers } from 'redux'
import CartReducer from './Reducers/CartReducer'
import AlertReducer from './Reducers/AlertReducer'

const RootReducer = combineReducers({
  CartReducer,
  AlertReducer
})

export default RootReducer