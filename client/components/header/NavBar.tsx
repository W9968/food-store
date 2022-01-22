import AuthHeaderButton from 'components/buttons/AuthHeaderButton'
import ShoppingCard from 'components/caddy/ShoppingCard'
import Logo from 'components/logo/Logo'
import { FC } from 'react'
import { Nav, SideNav } from 'styles/header.module'

const NavBar: FC = () => {
  return (
    <Nav>
      <Logo />
      <SideNav>
        <ShoppingCard />
        <AuthHeaderButton />
      </SideNav>
    </Nav>
  )
}

export default NavBar
