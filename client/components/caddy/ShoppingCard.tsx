import { FC, useState } from 'react'
import Link from 'next/link'
import { BiBasket } from 'react-icons/bi'
import { Badge, IconCart } from 'styles/cart.module'
import { AnimatePresence } from 'framer-motion'

const ShoppingCard: FC = () => {
  const [count, setCount] = useState<number>(10)

  return (
    <Link href={'/cart'} passHref>
      <IconCart>
        <BiBasket size={28} />
        <AnimatePresence>
          {count !== 0 && (
            <Badge
              style={{
                x: '-120%',
                y: '-130%',
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}>
              {count}
            </Badge>
          )}
        </AnimatePresence>
      </IconCart>
    </Link>
  )
}

export default ShoppingCard
