import React from 'react'
import Humburger from './Hamburger/Humburger'
import { RiShieldUserLine } from 'react-icons/ri'
import { Cart, DropDownMenu } from 'components/exports'
import { MenuContainer, MenuItems } from 'styles/Nav.element'
import { __auth } from 'global/exports'

const MobileMenu: React.FC = () => {
  const { isSubscribed } = __auth()

  return (
    <>
      <MenuContainer>
        <Cart />
        <Humburger />
        <div style={{ marginRight: '1rem' }} />
        {isSubscribed ? (
          <DropDownMenu />
        ) : (
          <MenuItems to='/login'>
            <RiShieldUserLine style={{ display: 'flex', fontSize: '1.5rem' }} />
          </MenuItems>
        )}
      </MenuContainer>
    </>
  )
}

export default MobileMenu
