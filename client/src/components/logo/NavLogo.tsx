import React from 'react'
import styled from 'styled-components'
import { motion as mo } from 'framer-motion'

const NavLogo: React.FC<Record<string, any>> = ({ ...rest }) => {
  return (
    <Button whileTap={{ scale: 0.8 }} {...rest}>
      <Photo src={'/asset/Frame2.png'} alt={'logo food store bag shopping'} />
      <Title>aana makhir</Title>
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
  font-family: 'Caveat', cursive;
  color: ${(props) => props.theme.background};
`
const Photo = styled.img`
  display: flex;
`

const Title = styled.p`
  font-size: 18px;
  text-transform: capitalize;
`
