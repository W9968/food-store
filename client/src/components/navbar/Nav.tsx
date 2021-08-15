import React from 'react'
import { NavContainer } from 'styles/Navbar.styles'

import NavLogo from 'components/logo/NavLogo'
import Desktop from './desktop/Desktop'
import Cart from 'components/cart/Cart'
import User from './desktop/User'

const Nav: React.FC = () => {
  return (
    <>
      <NavContainer>
        <NavLogo onClick={() => alert('hello')} logotypo='koul & wakel' />
        <Desktop />
        <>
          <User />
          <Cart />
        </>
      </NavContainer>
    </>
  )
}

export default Nav
