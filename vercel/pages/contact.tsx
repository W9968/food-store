import Head from 'next/head'
import type { NextPage } from 'next'
import { Wrapper } from 'styles/contact.module'
import { ContactPage } from 'components/export'

const Contact: NextPage = () => {
  return (
    <>
      <Head>
        <title>{'Entrer en contact'}</title>
      </Head>
      <Wrapper>
        <ContactPage />
      </Wrapper>
    </>
  )
}

export default Contact
