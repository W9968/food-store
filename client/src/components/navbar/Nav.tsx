import React from 'react'
import { useHistory } from 'react-router'
import { NavContainer } from 'styles/Navbar.styles'

import NavLogo from 'components/logo/NavLogo'
import Desktop from './desktop/Desktop'
import Cart from 'components/cart/Cart'
import User from './desktop/User'

const Nav: React.FC = () => {
  const history = useHistory()
  return (
    <>
      <NavContainer>
        <NavLogo onClick={() => history.push('/')} logotypo='koul & wakel' />
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
