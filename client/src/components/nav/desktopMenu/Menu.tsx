import React from 'react'
import { __auth } from 'global/exports'
import { Iarray, Items } from '../items'
import { Cart, DropDownMenu } from 'components/exports'
import {
  Cols,
  LoginButton,
  MenuContainer,
  MenuItems,
  ProductButton,
} from 'styles/Nav.element'
import { CgMenuGridO, CgUser } from 'react-icons/cg'

const Menu: React.FC = () => {
  const { isSubscribed } = __auth()
  return (
    <MenuContainer>
      <Cols>
        <ProductButton>
          <CgMenuGridO
            style={{ display: 'flex', fontSize: '20px', marginRight: '5px' }}
          />
          <p>products</p>
        </ProductButton>
        {Items.map((el: Iarray, index: number) => {
          return (
            <MenuItems key={index} to={el.path}>
              {el.name}
            </MenuItems>
          )
        })}
      </Cols>
      <Cols>
        <span style={{ marginRight: '1rem' }}>
          <Cart />
        </span>
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
      </Cols>
    </MenuContainer>
  )
}

export default Menu
