import { combineReducers } from 'redux'
import CartReducer from './Reducers/CartReducer'
import AlertReducer from './Reducers/AlertReducer'
import UserReducer from './Reducers/UserReducer'

const RootReducer = combineReducers({
  CartReducer,
  AlertReducer,
  UserReducer
})

export default RootReducer