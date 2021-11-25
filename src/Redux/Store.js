import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import RootReducer from './RootReducer'
import ReduxThunk from 'redux-thunk'

const middleware = [ReduxThunk]
const Store = createStore(
  RootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default Store
