import type { AppProps } from 'next/app'

import { palette } from 'types/theme'
import { Normalized } from 'styles/@globals'
import { ThemeProvider } from 'styled-components'
import { AnimateSharedLayout } from 'framer-motion'

// context apis
import { AuthContext, StoreContext } from 'context/exports'

import Layout from 'layout/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={palette}>
      <Normalized />
      <AnimateSharedLayout>
        <StoreContext>
          <AuthContext>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </AuthContext>
        </StoreContext>
      </AnimateSharedLayout>
    </ThemeProvider>
  )
}

export default MyApp
