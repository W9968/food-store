import React from 'react'
import {
  ImageContainer,
  ProductList,
  Image,
  ProductInfo,
  ProductTitle,
  Price,
} from 'styles/Card.element'

interface Iprops {
  productName: string
  productPic: string
  newPrice: string
  oldPrice: string
}

const Card: React.FC<Iprops> = ({
  productName,
  productPic,
  newPrice,
  oldPrice,
}) => {
  return (
    <ProductList>
      <ImageContainer>
        <Image
          src={`http://localhost:800/storage/product${productPic}`}
          alt={productName}
        />
      </ImageContainer>
      <ProductInfo>
        <ProductTitle>Harissa Sicam</ProductTitle>
        <Price>
          <p>{newPrice} DT </p>
          <p>-</p>
          <p style={{ color: '#EC42A2', textDecoration: 'line-through' }}>
            {' '}
            {oldPrice} DT
          </p>
        </Price>
      </ProductInfo>
    </ProductList>
  )
}

export default Card
