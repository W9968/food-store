import { FC } from 'react'
import { Header, Row } from 'styles/nav.module'
import { useMediaQuery } from 'hooks/useMedia'
import { Cart, MenuIcon } from 'components/export'

import Logo from 'components/logo/logo'
import Menu from 'components/menu/menu'
import Login from 'components/buttons/login'
import Search from 'components/search/Search'

const Navbar: FC = () => {
  return (
    <>
      <Header>
        <Row>
          <Logo />
          {!useMediaQuery(768) && <Menu />}
        </Row>
        <Row>
          {!useMediaQuery(768) && <Search />}
          <Cart />
          {useMediaQuery(768) && <MenuIcon />}
          <Login />
        </Row>
      </Header>
    </>
  )
}

export default Navbar
