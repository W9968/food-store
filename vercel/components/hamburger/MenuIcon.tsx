import { FC, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { MenutButton, HamMenu, Drawer } from 'styles/Menu.module'

const MenuIcon: FC = () => {
  const [isVisible, setVisible] = useState<boolean>(false)

  return (
    <MenutButton>
      <HamMenu onClick={(): void => setVisible(!isVisible)} />
      <AnimatePresence>
        {isVisible && (
          <Drawer
            initial={{ opacity: 0, x: '-100%' }}
            animate={{ opacity: 1, x: '0%' }}
            exit={{ opacity: 0, x: '-100%' }}
            transition={{ type: 'just' }}></Drawer>
        )}
      </AnimatePresence>
    </MenutButton>
  )
}

export default MenuIcon
