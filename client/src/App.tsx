import { theme } from 'themes/palette'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, Container, Column } from 'styles/Global.styles'

// import views and components
import { Header } from 'components/export'
// import { LoginPage } from 'views/export'

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        {/* this component will define our global styling */}
        <GlobalStyle />
        {/*  */}

        <Container>
          {/* this column is for the header */}
          <Column>
            <Header />
          </Column>
          {/* this one is for content and pages */}
          <Column>{/* <LoginPage /> */}</Column>
        </Container>
      </ThemeProvider>
    </>
  )
}

export default App
