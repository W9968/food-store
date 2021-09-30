// @ts-nocheck
import React, { useContext, useReducer } from 'react'

const Storage = (cartItems) => {
  localStorage.setItem(
    'cart',
    JSON.stringify(cartItems.length > 0 ? cartItems : [])
  )
}

export const sumItems = (cartItems) => {
  Storage(cartItems)
  let itemCount = cartItems.reduce(
    (total, product) => total + product.quantity,
    0
  )
  let total = cartItems
    .reduce((total, product) => total + product.price * product.quantity, 0)
    .toFixed(2)
  return { itemCount, total }
}

export const CartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      if (!state.cartItems.find((item) => item.id === action.payload.id)) {
        state.cartItems.push({
          ...action.payload,
          quantity: 1,
        })
      }

      return {
        ...state,
        ...sumItems(state.cartItems),
        cartItems: [...state.cartItems],
      }
    case 'REMOVE_ITEM':
      return {
        ...state,
        ...sumItems(
          state.cartItems.filter((item) => item.id !== action.payload.id)
        ),
        cartItems: [
          ...state.cartItems.filter((item) => item.id !== action.payload.id),
        ],
      }
    case 'INCREASE':
      state.cartItems[
        state.cartItems.findIndex((item) => item.id === action.payload.id)
      ].quantity++
      return {
        ...state,
        ...sumItems(state.cartItems),
        cartItems: [...state.cartItems],
      }
    case 'DECREASE':
      state.cartItems[
        state.cartItems.findIndex((item) => item.id === action.payload.id)
      ].quantity--
      return {
        ...state,
        ...sumItems(state.cartItems),
        cartItems: [...state.cartItems],
      }
    case 'CHECKOUT':
      return {
        cartItems: [],
        checkout: true,
        ...sumItems([]),
      }
    case 'CLEAR':
      return {
        cartItems: [],
        ...sumItems([]),
      }
    default:
      return state
  }
}

const CartContext = React.createContext()
export const __cart = () => useContext(CartContext)

const storage = localStorage.getItem('cart')
  ? JSON.parse(localStorage.getItem('cart'))
  : []

const intialState = {
  cartItems: storage,
  ...sumItems(storage),
  checkout: false,
}

const _CartContext: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, intialState)

  const increase = (payload) => {
    dispatch({ type: 'INCREASE', payload })
  }

  const decrease = (payload) => {
    dispatch({ type: 'DECREASE', payload })
  }

  const addProduct = (payload) => {
    dispatch({ type: 'ADD_ITEM', payload })
  }

  const removeProduct = (payload) => {
    dispatch({ type: 'REMOVE_ITEM', payload })
  }

  const clearCart = () => {
    dispatch({ type: 'CLEAR' })
  }

  const handleCheckout = () => {
    console.log('CHECKOUT', state)
    dispatch({ type: 'CHECKOUT' })
  }

  return (
    <CartContext.Provider
      value={{
        removeProduct,
        addProduct,
        increase,
        decrease,
        clearCart,
        handleCheckout,
        ...state,
      }}>
      {children}
    </CartContext.Provider>
  )
}

export default _CartContext
