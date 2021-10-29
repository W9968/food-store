import Head from 'next/head'
import type { NextPage } from 'next'
import { Wrapper } from 'styles/auth.module'
import { LoginFormPage } from 'components/export'

const login: NextPage = () => {
  return (
    <>
      <Head>
        <title>{'Accéder à votre compte'}</title>
      </Head>
      <Wrapper>
        <LoginFormPage />
      </Wrapper>
    </>
  )
}

export default login
