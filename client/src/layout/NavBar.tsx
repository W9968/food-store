import React from 'react'
import { useHistory } from 'react-router'
import { NavContainer } from 'styles/Nav.element'
import { useMediaQuery } from 'hooks/useMediaQuery'
import { NavBarLogo, MenuDesktop, MobileMenu } from 'components/exports'

const NavBar: React.FC = () => {
  console.log(useMediaQuery(769))

  const history = useHistory()
  return (
    <NavContainer>
      <NavBarLogo
        onClick={(): void => history.push('/')}
        title={'koul & wakel'}
      />
      {useMediaQuery(769) ? <MobileMenu /> : <MenuDesktop />}
    </NavContainer>
  )
}

export default NavBar
