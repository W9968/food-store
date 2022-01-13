import Link from 'next/link'
import { FC, FormEvent } from 'react'
import Input from 'components/input/input'
import { ButtonField } from 'components/export'
import { Cols, Form, Header, Redirect, Row } from 'styles/form.module'
import { BiLockOpenAlt, BiUser, BiEnvelope } from 'react-icons/bi'

const RegisterForm: FC = () => {
  const singUp = (e: FormEvent<HTMLInputElement>) => {
    e.preventDefault()
  }

  return (
    <>
      <Form autoComplete='new-password'>
        <Cols>
          <Header>
            <h1>{'sign up'}</h1>
            <p>for better experience create an account into our platform</p>
          </Header>
          <Row>
            <Input placeholder='name...' type='text' icon={<BiUser />} />
            <Input placeholder='email...' type='email' icon={<BiEnvelope />} />
            <Input
              placeholder='password...'
              type='password'
              icon={<BiLockOpenAlt />}
            />
          </Row>
          <ButtonField
            title='register'
            status={false}
            onClick={(e: FormEvent<HTMLInputElement>): void => singUp(e)}
          />
        </Cols>
        <Redirect>
          <p>
            Already registred?{' '}
            <Link href='/auth/login' passHref>
              <a>click here</a>
            </Link>{' '}
            to login.
          </p>
        </Redirect>
      </Form>
    </>
  )
}

export default RegisterForm
