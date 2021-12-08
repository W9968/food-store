import type { AppProps } from 'next/app'
import { lightTheme } from 'theme/theme'
import { GlobalStyle } from 'styles/_globals'
import { ThemeProvider } from 'styled-components'

// layout for dynamic CSR
import Layout from 'layout/layout'
import { AuthContext, StoreContext } from 'context/export'
import { AnimateSharedLayout, AnimatePresence } from 'framer-motion'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <AnimateSharedLayout>
        <AnimatePresence>
          <StoreContext>
            <AuthContext>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </AuthContext>
          </StoreContext>
        </AnimatePresence>
      </AnimateSharedLayout>
    </ThemeProvider>
  )
}
export default MyApp
