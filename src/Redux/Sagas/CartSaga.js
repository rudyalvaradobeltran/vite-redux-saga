import {
  put,
  takeEvery,
  all,
  takeLatest,
} from 'redux-saga/effects'
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ADD_TO_CART_SAGA,
  REMOVE_FROM_CART_SAGA,
} from '../Types'

const wait = ms => new Promise((resolve) => setTimeout(resolve, ms))

const total = (newCart) => {
  let totalVal = 0
  for (let item of newCart) {
    totalVal += item.price
  }
  return totalVal
}

export function* addToCartSaga(action) {
  const { cart, item } = action.payload
  const newCart = [...cart, item]
  const newTotal = total(newCart)
  yield wait(1000)
  yield put({ type: ADD_TO_CART, payload: { newCart, newTotal } })
}

export function* removeFromCartSaga(action) {
  const { cart, item } = action.payload
  let hardCopy = [...cart]
  hardCopy = hardCopy.filter((cartItem) => cartItem.id !== item.id)
  const newTotal = total(hardCopy) 
  yield put({ type: REMOVE_FROM_CART, payload: { hardCopy, newTotal } })
}

export function* watchAddToCartSaga() {
  yield takeLatest(ADD_TO_CART_SAGA, addToCartSaga)
}

export function* watchRemoveFromCartSaga() {
  yield takeEvery(REMOVE_FROM_CART_SAGA, removeFromCartSaga)
}