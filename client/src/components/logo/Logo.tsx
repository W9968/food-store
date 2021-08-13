import React from 'react'
import styled from 'styled-components'

interface Iprops {
  width: number
}

const Logo: React.FC<Iprops> = ({ width }) => {
  return <Image width={width} src='logo.png' alt='logo photo' />
}

export default Logo

const Image = styled.img`
  display: flex;
`
