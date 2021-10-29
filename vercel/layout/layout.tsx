import { FC, ReactNode } from 'react'
import { Nav } from 'components/export'
import { Main, Composition } from 'styles/layout.module'

interface Iprops {
  children: ReactNode
}

const Layout: FC<Iprops> = ({ children }) => {
  return (
    <>
      <Main>
        <Composition>
          <Nav />
        </Composition>
        <Composition>{children}</Composition>
      </Main>
    </>
  )
}

export default Layout
