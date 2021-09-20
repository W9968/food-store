import Overlay from 'components/cart/delta/Overlay'
import React, { useState } from 'react'
import { BiMenu } from 'react-icons/bi'
import { Menu, SlideMenu } from 'styles/Nav.element'
import { AnimatePresence } from 'framer-motion'

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
              sqdsd
            </SlideMenu>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Humburger
