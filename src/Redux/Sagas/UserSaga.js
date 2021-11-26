import { put, takeEvery, call, all } from 'redux-saga/effects'
import { FIND_EMPLOYEE, FIND_CUSTOMER, FIND_USERS_SAGA } from '../Types'

export function* findUsers() {
  const url = 'https://randomuser.me/api/'
  const setHeaders = { headers: { 'Content-Type': 'application/json' } }
  let [employeeFinder, customerFinder] = yield all([
    call(fetch, url, setHeaders),
    call(fetch, url, setHeaders)
  ]);
  [employeeFinder, customerFinder] = yield all([
    employeeFinder.json(),
    customerFinder.json()
  ]);
  [employeeFinder, customerFinder] = yield all([
    employeeFinder.results[0],
    customerFinder.results[0]
  ]);
  yield all([
    put({ type: FIND_EMPLOYEE, payload: employeeFinder }),
    put({ type: FIND_CUSTOMER, payload: customerFinder })
  ])
}

export function* watchFindUsersSaga() {
  yield takeEvery(FIND_USERS_SAGA, findUsers)
}