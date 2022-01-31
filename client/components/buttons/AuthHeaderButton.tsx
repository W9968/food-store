import { FC } from 'react'
import Link from 'next/link'
import { __auth } from 'context/_authContext'
import { LoginAuthButton } from 'styles/button.module'

const AuthHeaderButton: FC = () => {
  const { isSubscribed, logout } = __auth()

  if (isSubscribed)
    return <LoginAuthButton onClick={logout}>log out</LoginAuthButton>
  else
    return (
      <Link href={'/auth/login'} passHref>
        <LoginAuthButton>log in</LoginAuthButton>
      </Link>
    )
}

export default AuthHeaderButton
