import { FC } from 'react'
import Link from 'next/link'
import { LoginAuthButton } from 'styles/button.module'

const AuthHeaderButton: FC = () => {
  return (
    <Link href={'/auth/login'} passHref>
      <LoginAuthButton>log in</LoginAuthButton>
    </Link>
  )
}

export default AuthHeaderButton
