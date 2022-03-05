import { FC } from 'react'
import { __auth } from 'context/exports'
import { Nav, SideNav } from 'styles/header.module'

import Logo from 'components/logo/Logo'
import ShoppingCard from 'components/caddy/ShoppingCard'
import AccountDropDown from 'components/buttons/AccountDropDown'
import AuthHeaderButton from 'components/buttons/AuthHeaderButton'

const NavBar: FC = () => {
  const { isSubscribed } = __auth()
  return (
    <Nav>
      <Logo />
      <SideNav>
        <ShoppingCard />
        {isSubscribed ? <AccountDropDown /> : <AuthHeaderButton />}
      </SideNav>
    </Nav>
  )
}

export default NavBar
