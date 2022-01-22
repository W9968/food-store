import Head from 'next/head'
import type { NextPage } from 'next'
import { LoginHeader } from 'components/export'

const Login: NextPage = () => {
  return (
    <>
      <Head>
        <title>Log in to you Account</title>
      </Head>
      <LoginHeader />
    </>
  )
}

export default Login
