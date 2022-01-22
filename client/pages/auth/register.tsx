import Head from 'next/head'
import type { NextPage } from 'next'
import { RegisterHeader } from 'components/export'

const Login: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create an Account</title>
      </Head>
      <RegisterHeader />
    </>
  )
}

export default Login
