import { theme } from 'themes/palette'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, Container, Column } from 'styles/Global.styles'

// import views
import { LoginPage } from 'views/export'

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
            <h1>hello</h1>
            <p>ghello this is a test</p>
          </Column>
          {/* this one is for content and pages */}
          <Column>
            <LoginPage />
          </Column>
        </Container>
      </ThemeProvider>
    </>
  )
}

export default App
