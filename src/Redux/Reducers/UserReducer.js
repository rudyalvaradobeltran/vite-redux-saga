import { FIND_EMPLOYEE, FIND_CUSTOMER } from '../Types'

const initialState = {
  employee: { name: { first: '' } },
  customer: { name: { first: '' } }
}

const UserReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case FIND_EMPLOYEE:
      return {
        ...state,
        employee: payload
      }
    case FIND_CUSTOMER:
      return {
        ...state,
        customer: payload
      }
    default:
      return state
  }
}

export default UserReducer