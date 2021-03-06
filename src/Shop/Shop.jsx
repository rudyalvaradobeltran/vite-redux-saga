import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addToCartAction, removeFromCartAction } from '../Redux/Actions/CartActions'
import { setAlertAction } from '../Redux/Actions/AlertActions'
import { findEmployee, findCustomer } from '../Redux/Actions/UserActions'
import { Items } from './ShopItems'

const Shop = () => {
  const { cart, cartTotal } = useSelector((state) => state.CartReducer)
  const { alert } = useSelector((state) => state.AlertReducer)
  const { employee, customer } = useSelector((state) => state.UserReducer)
  const employeeFirstName = employee.name.first
  const customerFirstName = customer.name.first
  const dispatch = useDispatch()

  const addToCart = (newItem) => {
    let addIt = true

    for (let item of cart) {
      if(item.id === newItem.id) addIt = false
    }

    if (addIt) { 
      dispatch(addToCartAction(newItem, cart))
      dispatch(setAlertAction(''))
    } else dispatch(setAlertAction(`${newItem.name} is already in your cart`))
  }

  const removeFromCart = (item) => {
    dispatch(removeFromCartAction(item, cart))
    dispatch(setAlertAction(''))
  }

  const listItems = Items.map((newItem) => (
    <div key={newItem.id}>
      {`${newItem.name}: $${newItem.price}`}
      <input type='submit' value='add' onClick={() => addToCart(newItem)} />
    </div>
  ))

  const cartItems = cart.map((newItem) => (
    <div key={newItem.id}>
      {`${newItem.name}: $${newItem.price}`}
      <input type='submit' value='remove' onClick={() => removeFromCart(newItem)} />
    </div>
  ))

  const callForEmployee = () => {
    dispatch(findEmployee())
  }

  const callForCustomer = () => {
    dispatch(findCustomer())
  }

  return (
    <div>
      STORE
      <div>
        Employee name: { employeeFirstName }
        <input
          type="submit"
          value="Find employee"
          onClick={() => callForEmployee()}
        />
      </div>
      <div>{listItems}</div>
      <div>CART</div>
      <div>
        Customer name: { customerFirstName }
        <input
          type="submit"
          value="Find customer"
          onClick={() => callForCustomer()}
        />
      </div>
      <div>{cartItems}</div>
      <div>Total: ${cartTotal}</div>
      <div>Alert Message: {alert}</div>
    </div>
  );
}

export default Shop