import React, { useState } from 'react'
import { HiChevronDown } from 'react-icons/hi'
import {
  Div,
  Item,
  ButtonChev,
  Container,
  DropDown,
} from 'styles/Navbar.styles'

// this component will display our cataqlog from database
const ItemsList: React.FC = () => {
  const [onIt, setonIt] = useState(false)

  return (
    <>
      <Container>
        <Div
          onMouseEnter={(): void => setonIt(true)}
          onMouseLeave={(): void => setonIt(false)}>
          <Item>Produits</Item>
          <ButtonChev
            animate={{ rotate: onIt ? 180 : 0 }}
            transition={{ type: 'tween' }}>
            <HiChevronDown style={{ fontSize: '1.2rem' }} />
          </ButtonChev>
        </Div>
        {onIt && (
          <DropDown
            initial={{ opacity: 0, y: '-10%' }}
            animate={{ opacity: 1, y: '10%' }}
            transition={{ type: 'tween' }}>
            dsff
          </DropDown>
        )}
      </Container>
    </>
  )
}

export default ItemsList
