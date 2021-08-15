import React from 'react'
import styled from 'styled-components'
import { motion as mo } from 'framer-motion'

interface Iprops {
  logotypo?: string
}

const NavLogo: React.FC<Iprops & Record<string, any>> = ({
  logotypo,
  ...rest
}) => {
  return (
    <Button whileTap={{ scale: 0.8 }} {...rest}>
      <Image src='./asset/logonav.png' alt='photo nav logo header' />
      <Text>{logotypo}</Text>
      {/* adding this so this logo can be modular */}
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

const Image = styled.img`
  width: 36px;
  display: flex;
`

const Text = styled.h2`
  margin-left: 10px;
  font-family: 'Poppins';
  text-transform: uppercase;
`
