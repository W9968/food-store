import React, { useState } from 'react'
import {
  Card,
  ProductImage,
  ProductInfos,
  Image,
  Title,
  Price,
  OldPrice,
  Icons,
} from 'styles/Card.styles'
import { RiShoppingCartLine } from 'react-icons/ri'

const ProductCard: React.FC = () => {
  const [isMouseOver, setMouseOver] = useState(false)
  return (
    <Card
      onMouseEnter={(): void => setMouseOver(true)}
      onMouseLeave={(): void => setMouseOver(false)}>
      <ProductImage>
        <Image alt='phot' src='https://i.imgur.com/MgX1oCH.png' />
        {isMouseOver && (
          <Icons
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            whileTap={{ scale: 0.7 }}
            style={{ x: -100, y: 100 }}>
            <RiShoppingCartLine
              style={{ fontSize: '1.3rem', display: 'flex' }}
            />
          </Icons>
        )}
      </ProductImage>
      <ProductInfos>
        <Title>Harissa Sicam</Title>
        <Price>
          1 DT - <OldPrice>1.8 DT</OldPrice>
        </Price>
      </ProductInfos>
    </Card>
  )
}

export default ProductCard
