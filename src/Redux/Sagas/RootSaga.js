import { all } from 'redux-saga/effects'
import { watchAddToCartSaga, watchRemoveFromCartSaga } from './CartSaga'
import { watchFindUsersSaga } from './UserSaga'

export function* rootSaga() {
  yield all([
    watchAddToCartSaga(),
    watchRemoveFromCartSaga(),
    watchFindUsersSaga(),
  ])
}