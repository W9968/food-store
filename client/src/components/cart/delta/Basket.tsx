import React from 'react'
import { BiX } from 'react-icons/bi'
import { CartSlide, CartWrapper, CartHeader } from 'styles/Cart.element'

interface Iprop {
  func: () => void
}

const Basket: React.FC<Iprop> = ({ func }) => {
  return (
    <CartWrapper
      initial={{ opacity: 0, x: '30%' }}
      animate={{ opacity: 1, x: '0%' }}
      exit={{ opacity: 0, x: '30%' }}
      transition={{ type: 'just' }}>
      <CartSlide>
        <CartHeader>
          <h1>Caddy</h1>
          <button className='crossX' onClick={func}>
            <BiX />
          </button>
        </CartHeader>
      </CartSlide>
    </CartWrapper>
  )
}

export default Basket
