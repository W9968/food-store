import { theme } from 'themes/palette'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, Container, Column } from 'styles/Global.styles'
import { BrowserRouter as AppRouter, Route, Switch } from 'react-router-dom'

// import views and components
import { Header } from 'components/export'
import { AboutPage, ContactPage, LandPage, LoginPage } from 'views/export'

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        {/* this component will define our global styling */}
        <GlobalStyle />
        {/*  */}
        <AppRouter>
          <Container>
            {/* this column is for the header */}
            <Column>
              <Header />
            </Column>
            {/* this one is for content and pages */}
            <Column>
              <Switch>
                <Route path='/login' component={LoginPage} />
                <Route path='/contact' component={ContactPage} />
                <Route path='/about' component={AboutPage} />
                <Route path='/' component={LandPage} />
              </Switch>
            </Column>
          </Container>
        </AppRouter>
      </ThemeProvider>
    </>
  )
}

export default App
