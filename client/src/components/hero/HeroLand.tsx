import React from 'react'
import styled from 'styled-components'

const HeroLand: React.FC = () => {
  return <Heading>Koul & Wakel</Heading>
}

export default HeroLand

const Heading = styled.h1`
  font-size: 10vw;
  text-align: center;
  font-family: 'Lora', serif;
  color: ${(props) => props.theme.foreground};
  margin-top: calc(${(props) => props.theme.spacing[0]} * 5);
`
