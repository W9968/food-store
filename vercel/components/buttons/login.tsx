import { FC } from 'react'
import Link from 'next/link'
import { Anchor, ButtonLogin } from 'styles/button.module'

const Login: FC = () => {
  return (
    <>
      <Link href={'/auth/login'} passHref>
        <ButtonLogin>
          <Anchor>log in</Anchor>
        </ButtonLogin>
      </Link>
    </>
  )
}

export default Login
