import React from 'react'
import styled from 'styled-components'
import { motion as m } from 'framer-motion'
import { RiShoppingBasketLine } from 'react-icons/ri'
import Badge from 'components/status/Badge'

const Cart: React.FC = () => {
  const array: any[] = [1, 2, 3] // this will indicate if there is data

  return (
    <Button whileTap={{ scale: 0.8 }} aria-label='check your cart'>
      <RiShoppingBasketLine className='icon' />
      {array.length !== 0 && <Badge totale={15} />}
    </Button>
  )
}

export default Cart

const Button = styled(m.button)`
  border: none;
  display: flex;
  outline: none;
  cursor: pointer;
  background: none;
  margin: 0rem 0.126rem;
  justify-content: flex-end;

  .icon {
    font-size: ${(props) => props.theme.fontSize.heading};
  }
`
