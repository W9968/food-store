import Head from 'next/head'
import type { NextPage } from 'next'
import { RegisterFormPage } from 'components/export'
import { Wrapper } from 'styles/auth.module'

const Register: NextPage = () => {
  return (
    <>
      <Head>
        <title>{'inscrivez-vous'}</title>
      </Head>
      <Wrapper>
        <RegisterFormPage />
      </Wrapper>
    </>
  )
}

export default Register
