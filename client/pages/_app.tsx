import type { AppProps } from 'next/app'

import { palette } from 'types/theme'
import { Normalized } from 'styles/@globals'
import { ThemeProvider } from 'styled-components'
import { AnimateSharedLayout } from 'framer-motion'

import Layout from 'layout/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={palette}>
      <Normalized />
      <AnimateSharedLayout>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AnimateSharedLayout>
    </ThemeProvider>
  )
}

export default MyApp
