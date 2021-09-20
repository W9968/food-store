import React from 'react'
import { Cart } from 'components/exports'
import Humburger from './Hamburger/Humburger'
import { MenuContainer } from 'styles/Nav.element'

const MobileMenu: React.FC = () => {
  return (
    <>
      <MenuContainer>
        <Cart />
        <Humburger />
      </MenuContainer>
    </>
  )
}

export default MobileMenu
