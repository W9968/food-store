import React from 'react'
import { Iarray, Items } from '../items'
import { Cart } from 'components/exports'
import { RiShieldUserLine } from 'react-icons/ri'
import { MenuContainer, MenuItems } from 'styles/Nav.element'

const Menu: React.FC = () => {
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
      <MenuItems to='/login'>
        <RiShieldUserLine style={{ display: 'flex', fontSize: '1.5rem' }} />
      </MenuItems>
    </MenuContainer>
  )
}

export default Menu