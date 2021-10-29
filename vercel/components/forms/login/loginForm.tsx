import Link from 'next/link'
import { FC, FormEvent } from 'react'
import Input from 'components/input/input'
import { ButtonField } from 'components/export'
import { BiLockOpenAlt } from 'react-icons/bi'
import { MdAlternateEmail } from 'react-icons/md'
import { Form, Header, Redirect, Row, Cols } from 'styles/form.module'

const LoginForm: FC = () => {
  console.clear()
  const auth = (e: FormEvent<HTMLInputElement>) => {
    e.preventDefault()
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
            />
            <Input
              placeholder='mot de passe...'
              type='password'
              icon={<BiLockOpenAlt />}
            />
          </Row>
          <ButtonField
            title='connexion'
            status={true}
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
