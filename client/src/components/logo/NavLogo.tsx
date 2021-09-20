import React from 'react'
import styled from 'styled-components'
import { motion as mo } from 'framer-motion'

interface Irpops {
  title: string
}

const NavLogo: React.FC<Irpops & Record<string, any>> = ({
  title,
  ...rest
}) => {
  return (
    <Button whileTap={{ scale: 0.8 }} {...rest}>
      <Text>{title}</Text>
    </Button>
  )
}

export default NavLogo

const Button = styled(mo.button)`
  border: none;
  display: flex;
  outline: none;
  cursor: pointer;
  background: none;
  align-items: center;
  justify-content: center;
`
const Text = styled.h2`
  text-transform: uppercase;
  font-family: 'Poppins', sans-serif;
`
