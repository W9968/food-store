import React from 'react'
import { Wrapper } from 'styles/Home.styles'
import { LandingHero, LogoLandingPage } from 'components/export'

const _Home: React.FC = () => {
  return (
    <>
      <Wrapper>
        <LandingHero />
        <LogoLandingPage />
      </Wrapper>
    </>
  )
}

export default _Home
