import Head from 'next/head'
import type { NextPage } from 'next'
import { LoginHeader } from 'components/export'
import useSubscription from 'hooks/useSubscription'

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

// eslint-disable-next-line
export default useSubscription(Login)
