import React, { useState } from 'react'
import { BiMenu, BiX } from 'react-icons/bi'
import { AnimatePresence } from 'framer-motion'
import { CartHeader } from 'styles/Cart.element'
import {
  ItemsMenuDiv,
  Menu,
  MenuMobileItems,
  SlideMenu,
} from 'styles/Nav.element'
import Overlay from 'components/cart/delta/Overlay'
import { Iarray, Items } from '../../items'

const Humburger: React.FC = () => {
  const [state, setState] = useState<boolean>(false)

  return (
    <>
      <Menu onClick={(): void => setState(true)}>
        <BiMenu style={{ display: 'flex', fontSize: '1.6rem' }} />
      </Menu>
      <AnimatePresence>
        {state && (
          <>
            <span onClick={(): void => setState(false)}>
              <Overlay />
            </span>
            <SlideMenu
              initial={{ opacity: 0, x: '-30%' }}
              animate={{ opacity: 1, x: '0%' }}
              exit={{ opacity: 0, x: '-30%' }}
              transition={{ type: 'just' }}>
              <CartHeader>
                <h1>Menu</h1>
                <button
                  className='crossX'
                  onClick={(): void => setState(false)}>
                  <BiX />
                </button>
              </CartHeader>
              <ItemsMenuDiv>
                {Items.map((el: Iarray, index: number) => {
                  return (
                    <MenuMobileItems key={index} to={el.path}>
                      {el.name}
                    </MenuMobileItems>
                  )
                })}
              </ItemsMenuDiv>
            </SlideMenu>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Humburger
