import Space from 'hooks/useSpace'
import React from 'react'

import { Wrapper } from 'styles/LandPage.element'

const LandPage: React.FC = () => {
  return (
    <>
      <Wrapper initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <Space />
      </Wrapper>
    </>
  )
}

export default LandPage
