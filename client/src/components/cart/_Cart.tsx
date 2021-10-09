import React, { useState } from 'react'
import { Cart, CartCountTotel } from 'styles/Cart.element'
import { RiShoppingBag3Line } from 'react-icons/ri'
import { AnimatePresence } from 'framer-motion'
import { __cart } from 'global/exports'

import Overlay from './delta/Overlay'
import Basket from './delta/Basket'

const _Cart: React.FC = () => {
  /// @ts-ignore
  const { itemCount } = __cart()
  const [active, setActive] = useState(false)

  return (
    <>
      <Cart onClick={(): void => setActive(true)}>
        <RiShoppingBag3Line style={{ display: 'flex', fontSize: '1.5rem' }} />
        <AnimatePresence>
          {itemCount !== 0 && (
            <CartCountTotel
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ type: 'just' }}>
              {itemCount}
            </CartCountTotel>
          )}
        </AnimatePresence>
      </Cart>
      <AnimatePresence>
        {active && (
          <>
            <span onClick={(): void => setActive(false)}>
              <Overlay />
            </span>
            <Basket func={(): void => setActive(false)} />
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default _Cart
