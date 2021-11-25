import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import RootReducer from './RootReducer'
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from './Sagas/RootSaga'

const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware]
const Store = createStore(
  RootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
)

sagaMiddleware.run(rootSaga)

export default Store
