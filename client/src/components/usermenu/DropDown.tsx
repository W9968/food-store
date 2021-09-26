import React, { useState } from 'react'
import { __auth } from 'global/exports'
import { BiCube, BiExit, BiListOl, BiShield, BiUser } from 'react-icons/bi'
import { AnimatePresence } from 'framer-motion'
import {
  DropDownbutton,
  DroppedMenu,
  LogoutButton,
  NavLinks,
} from 'styles/DropDown.element'

interface Iarray {
  icon: React.ReactChild
  path: string
  name: string
}

const DropDown: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const { currentUser, logout } = __auth()

  const AdminConfig: Iarray = {
    icon: <BiCube />,
    path: '/cpanel',
    name: 'administration',
  }

  const array: Iarray[] = [
    { icon: <BiShield />, path: '/profile', name: 'profile' },
    { icon: <BiListOl />, path: '/profile/orders', name: 'ordres' },
  ]

  return (
    <>
      <div style={{ position: 'relative' }}>
        <DropDownbutton
          whileTap={{ scale: 0.8 }}
          onClick={(): void => setIsVisible(!isVisible)}>
          <BiUser style={{ display: 'flex', fontSize: '1.5rem' }} />
        </DropDownbutton>
        <AnimatePresence>
          {isVisible && (
            <DroppedMenu
              initial={{ opacity: 0, y: '-5%' }}
              animate={{ opacity: 1, y: '0%' }}
              exit={{ y: '-5%', opacity: 0 }}
              transition={{ type: 'just' }}>
              {array.map((el: Iarray, index: number) => {
                return (
                  <NavLinks to={el.path} key={index}>
                    <div
                      style={{
                        display: 'flex',
                        fontSize: '1.5rem',
                        marginRight: '10px',
                      }}>
                      {el.icon}
                    </div>
                    <p>{el.name}</p>
                  </NavLinks>
                )
              })}
              {currentUser.Guarded === 1 && (
                <NavLinks to={AdminConfig.path}>
                  <div
                    style={{
                      display: 'flex',
                      fontSize: '1.5rem',
                      marginRight: '10px',
                    }}>
                    {AdminConfig.icon}
                  </div>
                  <p>{AdminConfig.name}</p>
                </NavLinks>
              )}
              <LogoutButton onClick={logout}>
                <BiExit
                  style={{
                    display: 'flex',
                    fontSize: '1.5rem',
                    marginRight: '10px',
                  }}
                />
                <p>se déconnecter</p>
              </LogoutButton>
            </DroppedMenu>
          )}
        </AnimatePresence>
      </div>
    </>
  )
}

export default DropDown
