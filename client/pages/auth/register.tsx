import Head from 'next/head'
import type { NextPage } from 'next'
import { RegisterHeader } from 'components/export'
import useSubscription from 'hooks/useSubscription'

const Register: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create an Account</title>
      </Head>
      <RegisterHeader />
    </>
  )
}
// eslint-disable-next-line
export default useSubscription(Register)
