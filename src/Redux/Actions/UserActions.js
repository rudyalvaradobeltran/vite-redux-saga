import { FIND_EMPLOYEE, FIND_CUSTOMER } from '../Types'

export const findEmployee = () => async dispatch => {
  const url = 'https://randomuser.me/api/'
  const setHeaders = { headers: { 'Content-Type': 'application/json' } }
  let res = await fetch(url, { setHeaders })
  res = await res.json()
  let employee = res.results[0]
  dispatch({ type: FIND_EMPLOYEE, payload: employee })
}

export const findCustomer = () => async dispatch => {
  const url = 'https://randomuser.me/api/'
  const setHeaders = { headers: { 'Content-Type': 'application/json' } }
  let res = await fetch(url, { setHeaders })
  res = await res.json()
  let customer = res.results[0]
  dispatch({ type: FIND_CUSTOMER, payload: customer })
}