import React from 'react'
import styled from 'styled-components'

interface Iprops {
  content: string
}

const HeroRightSide: React.FC<Iprops> = ({ content }) => {
  return <Title>{content}</Title>
}

export default HeroRightSide

const Title = styled.h1`
  margin-top: ${(props) => props.theme.spacing[0]};
  font-size: ${(props) => props.theme.fontSize.heading};
`
