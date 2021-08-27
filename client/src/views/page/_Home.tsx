import React from 'react'
import { LandingHero } from 'components/export'
import { Wrapper, Blob, BlobOne, BlobTwo, Overlay } from 'styles/Home.styles'

const _Home: React.FC = () => {
  return (
    <>
      <Wrapper>
        <Overlay>
          <LandingHero />
          <Blob />
          <BlobOne />
          <BlobTwo />
        </Overlay>
      </Wrapper>
    </>
  )
}

export default _Home
