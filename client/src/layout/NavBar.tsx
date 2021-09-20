import React from 'react'
import { useHistory } from 'react-router-dom'
import { NavContainer } from 'styles/Nav.element'
import { NavBarLogo, MenuDesktop } from 'components/exports'

const NavBar: React.FC = () => {
  const history = useHistory()
  return (
    <NavContainer>
      <NavBarLogo
        onClick={(): void => history.push('/')}
        title={'koul & wakel'}
      />
      <MenuDesktop />
    </NavContainer>
  )
}

export default NavBar
