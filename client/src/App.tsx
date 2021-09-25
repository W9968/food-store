// styling
import { theme } from 'theme/palette'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from 'styles/Global.element'

// routing
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// layout components
import NavBar from 'layout/NavBar'

// views components
import {
  HomePage,
  AboutPage,
  ContactPage,
  LoginPage,
  RegisterPage,
} from 'views/export'

// consumers
import { UserProvider } from 'global/exports'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <UserProvider>
        <Router>
          <NavBar />
          <Switch>
            <Route path='/register' component={RegisterPage} />
            <Route path='/login' component={LoginPage} />
            <Route path='/contact' component={ContactPage} />
            <Route path='/about' component={AboutPage} />
            <Route exact path='/' component={HomePage} />
          </Switch>
        </Router>
      </UserProvider>
    </ThemeProvider>
  )
}

export default App
