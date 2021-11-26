import Link from 'next/link'
import { FC } from 'react'
import { AnimatePresence } from 'framer-motion'
import { CartButton, CartItemCount, ShoppingBasket } from 'styles/button.module'

const Cart: FC = () => {
  return (
    <>
      <Link href={'/cart'} passHref>
        <CartButton>
          <ShoppingBasket />
          {true && (
            <AnimatePresence>
              <CartItemCount
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ type: 'just' }}>
                10
              </CartItemCount>
            </AnimatePresence>
          )}
        </CartButton>
      </Link>
    </>
  )
}

export default Cart
