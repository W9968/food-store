import { FC } from 'react'
import Link from 'next/link'

import { Linker, MenuItemsDesktop } from 'styles/nav.module'

const Menu: FC = () => {
  return (
    <>
      <MenuItemsDesktop>
        <Link href={'/store'} passHref>
          <Linker>products</Linker>
        </Link>
        <Link href={'/about'} passHref>
          <Linker>About us</Linker>
        </Link>
        <Link href={'/contact'} passHref>
          <Linker>contact</Linker>
        </Link>
      </MenuItemsDesktop>
    </>
  )
}

export default Menu
