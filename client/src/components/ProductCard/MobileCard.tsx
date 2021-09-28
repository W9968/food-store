import React from 'react'
import {
  MobileImage,
  MobileInfo,
  MobilePhoto,
  MobileProductCard,
  Price,
  ProductTitle,
} from 'styles/Card.element'

interface Iprops {
  productName: string
  productPic: string
  productSum: string
  newPrice: string
  oldPrice: string
}

const MobileCard: React.FC<Iprops> = ({
  productName,
  productPic,
  productSum,
  newPrice,
  oldPrice,
}) => {
  return (
    <MobileProductCard>
      <MobileImage>
        <MobilePhoto
          alt={productName}
          src={`http://localhost:800/storage/product${productPic}`}
        />
      </MobileImage>
      <MobileInfo>
        <ProductTitle
          style={{
            fontSize: '1.1rem',
          }}>
          {`${productName}`.substring(0, 11)}
          ...
        </ProductTitle>
        <Price
          style={{
            justifyContent: 'flex-start',
            width: '100%',
            fontSize: '0.9rem',
          }}>
          <p>{newPrice} DT </p>
          <p>-</p>
          <p style={{ color: '#EC42A2', textDecoration: 'line-through' }}>
            {' '}
            {oldPrice} DT
          </p>
        </Price>
        <p style={{ color: '#A3A3A3' }}>
          {`${productSum}`.substring(0, 40)}...
        </p>
      </MobileInfo>
    </MobileProductCard>
  )
}

export default MobileCard
