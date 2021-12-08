import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  ActionIconSet,
  BoxImage,
  CardElement,
  Price,
  Summery,
  Title,
} from 'styles/Pcard.module'
import { RiHeart3Line, RiShoppingCartLine } from 'react-icons/ri'
import { __store } from 'context/_produtContext'

interface Iprops {
  id: string
  title: string
  price: string
  image: string
  summery: string
}

const Card: FC<Iprops> = ({ id, title, price, image, summery }) => {
  const { getOneProduct } = __store()
  return (
    <Link href={`/store/preview/${id}`} passHref>
      <CardElement onClick={(): void => getOneProduct(id)}>
        <BoxImage layoutId='imagegoesLeft'>
          <Image
            width={200}
            height={200}
            alt={title}
            src={`http://localhost:8000/storage/product/${image}`}
          />
          <ActionIconSet>
            <span className='icon'>
              <RiHeart3Line />
            </span>
            <span className='icon'>
              <RiShoppingCartLine />
            </span>
          </ActionIconSet>
        </BoxImage>
        <div style={{ padding: ' 15px' }}>
          <div
            style={{
              display: 'flex',
              padding: '5px 15px',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Title>{title}</Title>
            <Price>{price}Dt</Price>
          </div>
          <Summery>{summery}</Summery>
        </div>
      </CardElement>
    </Link>
  )
}

export default Card
