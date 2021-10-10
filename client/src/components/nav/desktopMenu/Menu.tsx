import React, { useEffect, useState } from 'react'
import { Iarray, Items } from '../items'
import { __auth, __service } from 'global/exports'
import { CgMenuGridO, CgUser } from 'react-icons/cg'
import { Cart, DropDownMenu } from 'components/exports'
import { Icatalogonly } from 'global/interface/Iproducts'
import {
  Cols,
  ListItemCatalog,
  LoginButton,
  MenuContainer,
  MenuItems,
  ProductButton,
  ProductCatalogDropDown,
} from 'styles/Nav.element'
import { NavLink } from 'react-router-dom'

const Menu: React.FC = () => {
  const { isSubscribed } = __auth()
  const { getCategories, allCatalog } = __service()
  const [state, setState] = useState<boolean>(false)

  useEffect(() => {
    getCategories()
  }, [getCategories])

  const buttonVariants = {
    open: {
      height: `250px`,
      padding: 0,
      transition: {
        type: 'just',
        staggerChildren: 0.1,
      },
    },
    closed: {
      height: `0px`,
      padding: 0,
      transition: {
        type: 'just',
        staggerChildren: 0.1,
        when: 'afterChildren',
        staggerDirection: -1,
      },
    },
  }

  const childVariants = {
    open: { opacity: 1 },
    closed: { opacity: 0 },
  }

  return (
    <MenuContainer>
      <Cols>
        <span style={{ position: 'relative' }}>
          <ProductButton onClick={(): void => setState(!state)}>
            <CgMenuGridO
              style={{ display: 'flex', fontSize: '20px', marginRight: '5px' }}
            />
            <p>products</p>
          </ProductButton>
          {state && (
            <div
              style={{
                top: 0,
                left: 0,
                position: 'fixed',
                width: '100%',
                height: '100%',
              }}
              onClick={(): void => setState(false)}
            />
          )}
          <ProductCatalogDropDown
            initial={`closed`}
            animate={state ? `open` : `closed`}
            variants={buttonVariants}>
            {state &&
              allCatalog.map((red: Icatalogonly, index: number) => {
                return (
                  <ListItemCatalog
                    key={index}
                    initial={{ opacity: 0 }}
                    variants={childVariants}>
                    <NavLink
                      to={`/product/${red.category}`}
                      onClick={(): void => setState(false)}>
                      {red.category}
                    </NavLink>
                  </ListItemCatalog>
                )
              })}
          </ProductCatalogDropDown>
        </span>
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
