import type { AppProps } from 'next/app'
import { lightTheme } from 'theme/theme'
import { GlobalStyle } from 'styles/_globals'
import { ThemeProvider } from 'styled-components'

// layout for dynamic CSR
import Layout from 'layout/layout'
import { AuthContext } from 'store/export'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <AuthContext>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthContext>
    </ThemeProvider>
  )
}
export default MyApp
