import React from 'react'
import styled from 'styled-components'

interface Iprops {
  content: string
}

const AuthHero: React.FC<Iprops> = ({ content }) => {
  return <Title>{content}</Title>
}

export default AuthHero

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontSize.heading2};
  margin-bottom: calc(${(props) => props.theme.spacing[0]} * 3);
`
