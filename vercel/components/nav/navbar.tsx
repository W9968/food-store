import { FC } from 'react'
import Logo from 'components/logo/logo'
import Menu from 'components/menu/menu'
import { Cart } from 'components/export'
import Login from 'components/buttons/login'
import { Header, Row } from 'styles/nav.module'

const Navbar: FC = () => {
  return (
    <>
      <Header>
        <Row>
          <Logo />
          <Menu />
        </Row>
        <Row>
          <Cart />
          <Login />
        </Row>
      </Header>
    </>
  )
}

export default Navbar
