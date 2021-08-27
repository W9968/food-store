import React from 'react'
import styled from 'styled-components'
import { motion as mo } from 'framer-motion'

interface Iprops {
  logotypo?: string
  type?: string
}

const NavLogo: React.FC<Iprops & Record<string, any>> = ({
  logotypo,
  type,
  ...rest
}) => {
  return type === 'lg' ? (
    <Button {...rest}>
      <ImageLg src='./asset/logonav.png' alt='photo nav logo header' />
      <TextLg>{logotypo}</TextLg>
      {/* adding this so this logo can be modular */}
    </Button>
  ) : (
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

const ImageLg = styled.img`
  width: 52px;
  display: flex;
`

const TextLg = styled.h1`
  margin-left: 10px;
  font-family: 'Poppins';
  text-transform: uppercase;
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
