import { FC } from 'react'
import { useRouter } from 'next/router'
import { IoIosClose } from 'react-icons/io'
import { ContactWrapper, Row } from 'styles/contact.module'

const Contact: FC = () => {
  let router = useRouter()
  return (
    <ContactWrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ type: 'just' }}>
      <Row>
        <div>
          <p>lac1, mohamed biwa, 15</p>
          <p>Tunis, Tunisia, 2023</p>
          <a
            href='https://www.google.com/maps/@36.8336561,10.234809,17.25z'
            target={'_blank'}
            rel={'noreferrer'}>
            Locate us
          </a>
        </div>
        <button onClick={() => router.push('/')}>
          <IoIosClose size={42} />
        </button>
      </Row>
      <Row>
        <a href='mailto:contact@kouletwakel.tn'>contact@kouletwakel.tn</a>
      </Row>
      <Row>
        <div>
          <a href='https://instagram.com' target={'_blank'} rel={'noreferrer'}>
            instgram
          </a>
          <a href='https://facebook.com' target={'_blank'} rel={'noreferrer'}>
            facebook
          </a>
          <a href='https://twitter.com' target={'_blank'} rel={'noreferrer'}>
            twitter
          </a>
        </div>
      </Row>
    </ContactWrapper>
  )
}

export default Contact
