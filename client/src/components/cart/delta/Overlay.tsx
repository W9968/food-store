import React from 'react'
import styled from 'styled-components'
import { motion as mo } from 'framer-motion'

const Overlay: React.FC = () => {
  return (
    <>
      <Shadow
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />
    </>
  )
}

export default Overlay

const Shadow = styled(mo.div)`
  top: 0;
  left: 0;
  z-index: 11;
  width: 100%;
  height: 100vh;
  position: fixed;
  max-width: 100%;
  max-height: 100vh;
  backdrop-filter: saturate(180%) blur(20px);
`
