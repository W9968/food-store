import Head from 'next/head'
import type { NextPage } from 'next'
import Landing from 'components/landing/Landing'
import { __store } from 'context/exports'

const Home: NextPage = () => {
  const { allProduct } = __store()
  console.log(allProduct)

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
