import React from 'react'
import styled from 'styled-components'

interface Iarray {
  name: string
  path: string
}

const Desktop: React.FC = () => {
  const array: Iarray[] = [
    { name: 'A propos', path: '/about' },
    { name: 'Nous Contacter', path: '/contact' },
  ]

  return (
    <Container>
      <Item>Produits</Item>
      {array.map((el, key: number): React.ReactNode => {
        return <Item key={key}>{el.name}</Item>
      })}
    </Container>
  )
}

export default Desktop

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`

const Item = styled.p`
  cursor: pointer;
  font-weight: 500;
`
