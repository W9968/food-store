import React from 'react'
import { __auth } from 'global/exports'
import { Iarray, Items } from '../items'
import { RiShieldUserLine } from 'react-icons/ri'
import { Cart, DropDownMenu } from 'components/exports'
import { MenuContainer, MenuItems } from 'styles/Nav.element'

const Menu: React.FC = () => {
  const { isSubscribed } = __auth()
  return (
    <MenuContainer>
      {Items.map((el: Iarray, index: number) => {
        return (
          <MenuItems key={index} to={el.path}>
            {el.name}
          </MenuItems>
        )
      })}
      <Cart />
      {isSubscribed ? (
        <DropDownMenu />
      ) : (
        <MenuItems to='/login'>
          <RiShieldUserLine style={{ display: 'flex', fontSize: '1.5rem' }} />
        </MenuItems>
      )}
    </MenuContainer>
  )
}

export default Menu
