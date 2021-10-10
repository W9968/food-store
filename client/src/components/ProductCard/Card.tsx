import React from 'react'
import { __cart } from 'global/exports'
import { IcardProduct } from 'global/interface/Iproducts'
import { BiCart, BiZoomIn } from 'react-icons/bi'
import {
  ImageContainer,
  ProductList,
  Image,
  ProductInfo,
  ProductTitle,
  Price,
  Actions,
} from 'styles/Card.element'

interface Iprops {
  productName: string
  productPic: string
  newPrice: string
  oldPrice: string
  addedtoCard: IcardProduct
}

const Card: React.FC<Iprops> = ({
  productName,
  productPic,
  newPrice,
  oldPrice,
  addedtoCard,
}) => {
  //@ts-ignore
  const { addProduct, increase, cartItems } = __cart()

  const isInCart = (product: IcardProduct) => {
    return !!cartItems.find((item: IcardProduct) => item.id === product.id)
  }

  return (
    <ProductList>
      <ImageContainer>
        <Image
          src={`http://localhost:8000/storage/product/${productPic}`}
          alt={productName}
        />
        <Actions>
          <button
            onClick={() => {
              isInCart(addedtoCard)
                ? increase(addedtoCard)
                : addProduct(addedtoCard)
            }}
            className='cardbtn'
            style={{
              padding: '5px',
              background: '#ffffff',
              borderRadius: '50%',
            }}>
            <BiCart style={{ fontSize: '1.7rem', display: 'flex' }} />
          </button>
          <button className='cardbtn' style={{ padding: '5px' }}>
            <BiZoomIn style={{ fontSize: '1.7rem', display: 'flex' }} />
          </button>
        </Actions>
      </ImageContainer>
      <ProductInfo>
        <ProductTitle>Harissa Sicam</ProductTitle>
        <Price>
          <p>{newPrice}DT </p>
          <p>-</p>
          <p style={{ color: '#EC42A2', textDecoration: 'line-through' }}>
            {' '}
            {oldPrice}DT
          </p>
        </Price>
      </ProductInfo>
    </ProductList>
  )
}

export default Card
