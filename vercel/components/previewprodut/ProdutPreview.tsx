import { FC } from 'react'
import Image from 'next/image'
import __a from 'hooks/useFetch'
import { useEffect } from 'react'
import { __store } from 'context/_produtContext'
import {
  BoxContent,
  BoxImage,
  Container,
  Description,
  Prices,
  Summary,
  Title,
} from 'styles/Preview.module'
import router from 'next/router'

const ProdutPreview: FC = () => {
  const { id } = router.query
  const { getOneProduct, oneProduct } = __store()

  useEffect(() => {
    setTimeout(() => {
      getOneProduct(`${id}`)
    }, 1000)
  }, [])

  return (
    <>
      {oneProduct.id == '' ? (
        'loading'
      ) : (
        <Container>
          <BoxImage layoutId='imagegoesLeft'>
            <Image
              width={300}
              height={300}
              alt={oneProduct.productDesription}
              src={`http://localhost:8000/storage/product/${oneProduct.productFilePathImage}`}
            />
          </BoxImage>
          <BoxContent>
            <Title>{oneProduct.productName}</Title>
            <Summary>{oneProduct.productSummary}</Summary>
            <Description
              dangerouslySetInnerHTML={{ __html: oneProduct.productDesription }}
            />
          </BoxContent>
        </Container>
      )}
    </>
  )
}

export default ProdutPreview
