import { ADD_TO_CART, REMOVE_FROM_CART } from '../Types'

const initialState = {
  cart: [],
  cartTotal: 0
}

const CartReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: payload.newCart,
        cartTotal: payload.newTotal
      }
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: payload.newCart,
        cartTotal: payload.newTotal
      }
    default:
      return state
  }
}

export default CartReducer