import Link from 'next/link'
import { FC, useState } from 'react'
import { BiUser } from 'react-icons/bi'
import { __auth } from 'context/exports'
import { AnimatePresence } from 'framer-motion'
import { DropDoawnButton, DropDown, Dropped } from 'styles/button.module'
import {
  MdSettingsAccessibility,
  MdAdminPanelSettings,
  MdLogout,
} from 'react-icons/md'

const AccountDropDown: FC = () => {
  const { isSubscribed, currentUser, logout } = __auth()
  const [isShown, setShown] = useState<boolean>(false)

  return (
    <DropDown>
      <DropDoawnButton
        onClick={(): void => setShown(!isShown)}
        onBlur={(): void => setShown(false)}>
        <BiUser />
      </DropDoawnButton>
      <AnimatePresence>
        {isShown && (
          <Dropped
            initial={{ opacity: 0, y: '-5%' }}
            animate={{ opacity: 1, y: '0%' }}
            exit={{ opacity: 0, y: '-5%' }}
            transition={{ type: 'tween' }}>
            <Link href={'/account'} passHref>
              <button>
                <MdSettingsAccessibility
                  size={20}
                  style={{ marginRight: '5px' }}
                />
                setting
              </button>
            </Link>
            {isSubscribed && currentUser.guarded === 1 && (
              <Link href={'/admin'} passHref>
                <button>
                  <MdAdminPanelSettings
                    size={20}
                    style={{ marginRight: '5px' }}
                  />
                  dashboard
                </button>
              </Link>
            )}

            <button onClick={logout}>
              <MdLogout size={20} style={{ marginRight: '5px' }} />
              logout
            </button>
          </Dropped>
        )}
      </AnimatePresence>
    </DropDown>
  )
}

export default AccountDropDown
