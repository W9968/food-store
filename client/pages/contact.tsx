import Head from 'next/head'
import type { NextPage } from 'next'
import { ContactHeader } from 'components/export'

const contact: NextPage = () => {
  return (
    <>
      <Head>
        <title>Contact us</title>
      </Head>
      <ContactHeader />
    </>
  )
}

export default contact
