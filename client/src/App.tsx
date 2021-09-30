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
  ProductPage,
} from 'views/export'

// consumers
import { UserProvider, ProductProvider, CartProvider } from 'global/exports'
import ProtectedRoutes from 'routes/ProtectedRoutes'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <UserProvider>
        <ProductProvider>
          <CartProvider>
            <Router>
              <NavBar />
              <Switch>
                <ProtectedRoutes path='/register' component={RegisterPage} />
                <ProtectedRoutes path='/login' component={LoginPage} />
                <Route path='/products' component={ProductPage} />
                <Route path='/contact' component={ContactPage} />
                <Route path='/about' component={AboutPage} />
                <Route exact path='/' component={HomePage} />
              </Switch>
            </Router>
          </CartProvider>
        </ProductProvider>
      </UserProvider>
    </ThemeProvider>
  )
}

export default App
