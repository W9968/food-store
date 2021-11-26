import Head from 'next/head'
import type { NextPage } from 'next'
import { Wrapper } from 'styles/Product.module'
import { StoreFrontProduct } from 'components/export'

const index: NextPage = () => {
  return (
    <>
      <Head>
        <title>{'Nos Produits'}</title>
      </Head>
      <Wrapper>
        <StoreFrontProduct />
      </Wrapper>
    </>
  )
}

export default index
