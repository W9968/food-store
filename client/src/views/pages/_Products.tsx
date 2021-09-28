import React, { useEffect } from 'react'
import Space from 'hooks/useSpace'
import { __service } from 'global/exports'
import { MobileProductElement, ProductElement } from 'components/exports'
import { Container, ProductWrapper } from 'styles/Product.element'
import { useMediaQuery } from 'hooks/useMediaQuery'

const _Products: React.FC = () => {
  const { getAllProduct, allProducts } = __service()

  useEffect(() => {
    getAllProduct()
  }, [getAllProduct])

  return (
    <>
      <ProductWrapper>
        <Space />
        <Container>
          {useMediaQuery(769)
            ? allProducts.map((el) =>
                el.brands.map((elbrand) =>
                  elbrand.products.map((elprod, index: number) => {
                    return (
                      <MobileProductElement
                        key={index}
                        productName={`${elprod.productName}`}
                        productSum={`${elprod.productSummary}`}
                        productPic={`${elprod.productFilePathImage}`}
                        newPrice={`${elprod.productNewPrice}`}
                        oldPrice={`${elprod.productOldPrice}`}
                      />
                    )
                  })
                )
              )
            : allProducts.map((el) =>
                el.brands.map((elbrand) =>
                  elbrand.products.map((elprod, index: number) => {
                    return (
                      <ProductElement
                        key={index}
                        productName={`${elprod.productName}`}
                        productPic={`${elprod.productFilePathImage}`}
                        newPrice={`${elprod.productNewPrice}`}
                        oldPrice={`${elprod.productOldPrice}`}
                      />
                    )
                  })
                )
              )}
        </Container>
      </ProductWrapper>
    </>
  )
}

export default _Products
