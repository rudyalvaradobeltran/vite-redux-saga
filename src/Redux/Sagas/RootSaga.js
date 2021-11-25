import { all } from 'redux-saga/effects'
import { watchAddToCartSaga, watchRemoveFromCartSaga } from './CartSaga'
import { watchFindEmployeeSaga, watchFindCustomerSaga } from './UserSaga'

export function* rootSaga() {
  yield all([
    watchAddToCartSaga(),
    watchRemoveFromCartSaga(),
    watchFindEmployeeSaga(),
    watchFindCustomerSaga()
  ])
}