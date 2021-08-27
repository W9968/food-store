import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

interface Iarray {
  name: string
  path: string
}

const Desktop: React.FC = () => {
  const array: Iarray[] = [
    { name: 'Produits', path: '/products' },
    { name: 'A propos', path: '/about' },
    { name: 'Nous Contacter', path: '/contact' },
  ]

  return (
    <Container>
      {array.map((el, key: number): React.ReactNode => {
        return (
          <Item key={key}>
            <NavLink to={el.path}>{el.name}</NavLink>
          </Item>
        )
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

  > a {
    color: #111;
    text-decoration: none;
  }
`
