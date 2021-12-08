import Head from 'next/head'
import type { NextPage } from 'next'
import { Wrapper } from 'styles/Preview.module'
import { PreviewProduct } from 'components/export'

const SlugProduct: NextPage = () => {
  return (
    <>
      <Head>
        <title>{'Aperçu produit'}</title>
      </Head>
      <Wrapper>
        <PreviewProduct />
      </Wrapper>
    </>
  )
}

export default SlugProduct
