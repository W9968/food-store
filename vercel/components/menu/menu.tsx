import { FC } from 'react'
import Link from 'next/link'
import { ImenuArray, menuArray } from 'interfaces/ImenuArray'
import { Linker, MenuItemsDesktop } from 'styles/nav.module'

const Menu: FC = () => {
  return (
    <>
      <MenuItemsDesktop>
        {menuArray.map((el: ImenuArray, index: number) => {
          return (
            <Link key={index} href={`/${el.path}`} passHref>
              <Linker>{el.name}</Linker>
            </Link>
          )
        })}
      </MenuItemsDesktop>
    </>
  )
}

export default Menu
