import Link from 'next/link'
import Input from 'components/input/input'
import { ButtonField } from 'components/export'
import { BiLockOpenAlt } from 'react-icons/bi'
import { MdAlternateEmail } from 'react-icons/md'
import { FC, FormEvent, ChangeEvent, useState } from 'react'
import { Form, Header, Redirect, Row, Cols } from 'styles/form.module'
import { __auth } from 'context/_authContext'

const LoginForm: FC = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const { authenticate, loading } = __auth()

  const auth = (e: FormEvent<HTMLInputElement>) => {
    e.preventDefault()
    authenticate(email, password)
  }

  return (
    <>
      <Form autoComplete='new-password'>
        <Cols>
          <Header>
            <h1>Sign in</h1>
            <p>Enter your information to login to you account</p>
          </Header>
          <Row>
            <Input
              placeholder='email...'
              type='email'
              icon={<MdAlternateEmail />}
              onClick={(e: ChangeEvent<HTMLInputElement>): void =>
                setEmail(e.target.value)
              }
            />
            <Input
              placeholder='password...'
              type='password'
              icon={<BiLockOpenAlt />}
              onClick={(e: ChangeEvent<HTMLInputElement>): void =>
                setPassword(e.target.value)
              }
            />
          </Row>
          <ButtonField
            title='login'
            status={loading}
            onClick={(e: FormEvent<HTMLInputElement>): void => auth(e)}
          />
        </Cols>
        <Redirect>
          <p>
            {"If you don't have an account "}
            <Link href='/auth/register' passHref>
              <a>click here </a>
            </Link>{' '}
            to create a new one.
          </p>
        </Redirect>
      </Form>
    </>
  )
}

export default LoginForm
