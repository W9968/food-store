import { FC } from 'react'
import { ProductCard } from 'components/export'
import { __store } from 'context/_produtContext'
import { Iproduct } from 'interfaces/Iproduct'

const ProductPage: FC = () => {
  const { allProduct } = __store()

  return (
    <div
      style={{
        display: 'grid',
        gridGap: '100px',
        gridTemplateColumns: 'auto auto auto auto',
      }}>
      {allProduct.map((el: Iproduct, i: number) => {
        return (
          <ProductCard
            key={i}
            id={`${el.id}`}
            title={el.productName}
            image={el.productFilePathImage}
            price={el.productNewPrice}
            summery={el.productSummary}
          />
        )
      })}
    </div>
  )
}

export default ProductPage
