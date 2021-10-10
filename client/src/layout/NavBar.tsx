import React from 'react'
import { useHistory } from 'react-router'
import { MenuWidh, NavContainer } from 'styles/Nav.element'
import { useMediaQuery } from 'hooks/useMediaQuery'
import { NavBarLogo, MenuDesktop, MobileMenu } from 'components/exports'

const NavBar: React.FC = () => {
  const history = useHistory()
  return (
    <NavContainer>
      <MenuWidh>
        <NavBarLogo onClick={(): void => history.push('/')} />
        {useMediaQuery(769) ? <MobileMenu /> : <MenuDesktop />}
      </MenuWidh>
    </NavContainer>
  )
}

export default NavBar
