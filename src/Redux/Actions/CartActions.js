import { ADD_TO_CART, REMOVE_FROM_CART } from '../Types'

const total = (newCart) => {
  let totalVal = 0
  for (let item of newCart) {
    totalVal += item.price
  }
  return totalVal
}

export const addToCartAction = (item, cart) => {
  const newCart = [...cart, item]
  const newTotal = total(newCart)
  return { type: ADD_TO_CART, payload: { newCart, newTotal } }
}

export const removeFromCartAction = (item, cart) => {
  let hardCopy = [...cart]
  hardCopy = hardCopy.filter((cartItem) => cartItem.id !== item.id)
  const newTotal = total(hardCopy) 
  return { type: REMOVE_FROM_CART, payload: { newCart: hardCopy, newTotal } }
}