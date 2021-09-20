import React, { useState } from 'react'
import { Cart } from 'styles/Cart.element'
import { RiShoppingBag3Line } from 'react-icons/ri'
import { AnimatePresence } from 'framer-motion'

import Overlay from './delta/Overlay'
import Basket from './delta/Basket'

const _Cart: React.FC = () => {
  const [active, setActive] = useState(false)

  return (
    <>
      <Cart onClick={(): void => setActive(true)}>
        <RiShoppingBag3Line style={{ display: 'flex', fontSize: '1.5rem' }} />
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
