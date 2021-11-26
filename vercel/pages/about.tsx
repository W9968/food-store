import Head from 'next/head'
import type { NextPage } from 'next'
import { Wrapper } from 'styles/About.module'
import { AboutPage } from 'components/export'

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>{'A propos'}</title>
      </Head>
      <Wrapper>
        <AboutPage />
      </Wrapper>
    </>
  )
}

export default About
