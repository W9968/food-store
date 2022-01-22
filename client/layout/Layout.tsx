import { FC, ReactChild } from 'react'
import { Header } from 'components/export'
import { ComposedLayout, Section } from 'styles/layout.module'

type Iprops = {
  children: ReactChild
}

const Layout: FC<Iprops> = ({ children }) => {
  return (
    <ComposedLayout>
      <Section>
        <Header />
      </Section>
      <Section>{children}</Section>
    </ComposedLayout>
  )
}

export default Layout
