import { put, takeEvery, call, all, race } from 'redux-saga/effects'
import {
  FIND_EMPLOYEE_SAGA,
  FIND_EMPLOYEE,
  FIND_CUSTOMER_SAGA,
  FIND_CUSTOMER,
} from '../Types'

export function* findEmployeeSaga() {
  const url = 'https://randomuser.me/api/'
  const setHeaders = { headers: { 'Content-Type': 'application/json' } }
  let res = yield fetch(url, { setHeaders })
  res = yield res.json()
  let employee = res.results[0]
  yield put({ type: FIND_EMPLOYEE, payload: employee })
}

export function* findCustomerSaga() {
  const url = 'https://randomuser.me/api/'
  const setHeaders = { headers: { 'Content-Type': 'application/json' } }
  let res = yield fetch(url, { setHeaders })
  res = yield res.json()
  let customer = res.results[0]
  yield put({ type: FIND_CUSTOMER, payload: customer })
}

export function* watchFindEmployeeSaga() {
  yield takeEvery(FIND_EMPLOYEE_SAGA, findEmployeeSaga)
}

export function* watchFindCustomerSaga() {
  yield takeEvery(FIND_CUSTOMER_SAGA, findCustomerSaga)
}