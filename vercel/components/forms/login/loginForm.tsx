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
            <h1>se connecter</h1>
            <p>Entrez vos identifiants pour accéder à votre compte</p>
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
              placeholder='mot de passe...'
              type='password'
              icon={<BiLockOpenAlt />}
              onClick={(e: ChangeEvent<HTMLInputElement>): void =>
                setPassword(e.target.value)
              }
            />
          </Row>
          <ButtonField
            title='connexion'
            status={loading}
            onClick={(e: FormEvent<HTMLInputElement>): void => auth(e)}
          />
        </Cols>
        <Redirect>
          <p>
            {"Si vous n'avez pas de compte "}
            <Link href='/auth/register' passHref>
              <a>cliquez ici</a>
            </Link>{' '}
            pour en créer un.
          </p>
        </Redirect>
      </Form>
    </>
  )
}

export default LoginForm
