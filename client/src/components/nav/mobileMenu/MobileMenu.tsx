import React from 'react'
import { CgUser } from 'react-icons/cg'
import Humburger from './Hamburger/Humburger'
import { Cart, DropDownMenu } from 'components/exports'
import { MenuContainer, LoginButton } from 'styles/Nav.element'
import { __auth } from 'global/exports'

const MobileMenu: React.FC = () => {
  const { isSubscribed } = __auth()

  return (
    <>
      <MenuContainer>
        <Cart />
        <div style={{ marginRight: '1rem' }} />
        {isSubscribed ? (
          <DropDownMenu />
        ) : (
          <LoginButton to='/login'>
            <CgUser
              style={{ display: 'flex', fontSize: '20px', marginRight: '5px' }}
            />
            <p>connexion</p>
          </LoginButton>
        )}
        <Humburger />
      </MenuContainer>
    </>
  )
}

export default MobileMenu
