import { SET_ALERT } from '../Types'

const initialState = {
  alert: ''
}

const AlertReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_ALERT:
      return {
        ...state,
        alert: payload
      }
    default:
      return state
  }
}

export default AlertReducer