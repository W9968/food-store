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
            <h1>{"s'inscrire"}</h1>
            <p>
              inscrivez-vous à notre plate-forme pour une meilleure expérience
            </p>
          </Header>
          <Row>
            <Input placeholder='nom...' type='text' icon={<BiUser />} />
            <Input placeholder='email...' type='email' icon={<BiEnvelope />} />
            <Input
              placeholder='mot de passe...'
              type='password'
              icon={<BiLockOpenAlt />}
            />
          </Row>
          <ButtonField
            title="S'inscrire"
            status={false}
            onClick={(e: FormEvent<HTMLInputElement>): void => singUp(e)}
          />
        </Cols>
        <Redirect>
          <p>
            Si vous avez un compte{' '}
            <Link href='/auth/login' passHref>
              <a>cliquez ici</a>
            </Link>{' '}
            pour se connecter.
          </p>
        </Redirect>
      </Form>
    </>
  )
}

export default RegisterForm
