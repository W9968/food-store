import Head from 'next/head'
import type { NextPage } from 'next'
import Landing from 'components/landing/Landing'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>home</title>
      </Head>
      <Landing />
    </>
  )
}

export default Home
