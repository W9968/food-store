import { BiMailSend, BiLockOpenAlt } from 'react-icons/bi'
import { mail_regex, pass_regex } from 'validation/formRegex'
import { ChangeEvent, FC, SyntheticEvent, useState } from 'react'

import Logo from 'components/logo/Logo'
import TextInput from 'components/input/TextInput'
import AuthButton from 'components/buttons/AuthButton'
import CheckBox from 'components/input/CheckBox'

import Link from 'next/link'
import { __auth } from 'context/exports'

import {
  AuthAction,
  AuthForm,
  AuthHeader,
  AuthWrapper,
} from 'styles/auth.module'
import Modal from 'components/modal/Modal'

const Login: FC = () => {
  const [form, setForm] = useState<{
    mail: string
    password: string
    remember: boolean
  }>({
    mail: '',
    password: '',
    remember: false,
  })

  const { authenticate, loading } = __auth()
  const [statusEmail, setStatusEMail] = useState<'n' | 'e' | 's'>('n')
  const [statusPassword, setStatusPassword] = useState<'n' | 'e' | 's'>('n')
  const [disable, setDisable] = useState<boolean>(loading)

  return (
    <AuthWrapper>
      <Modal />
      <AuthForm layoutId='form' transition={{ type: 'tween' }}>
        <Logo /> <br />
        <AuthHeader>
          <h1>Login now</h1>
          <p>Enter your information to login to you account</p>
        </AuthHeader>
        <TextInput
          type='email'
          status={statusEmail}
          label={'e-mail'}
          icon={<BiMailSend />}
          placeholder='your email'
          onChange={(e: ChangeEvent<HTMLInputElement>): void => {
            setForm({ ...form, mail: e.currentTarget.value })
            if (e.currentTarget.value.match(mail_regex)) {
              setStatusEMail('s')
              setForm({ ...form, mail: e.currentTarget.value })
            } else setStatusEMail('e')
          }}
          onBlur={() => form.mail.length === 0 && setStatusEMail('n')}
          onFocus={() => form.mail.length === 0 && setStatusEMail('n')}
        />
        <TextInput
          type='password'
          status={statusPassword}
          label={'password'}
          icon={<BiLockOpenAlt />}
          placeholder='password'
          onChange={(e: ChangeEvent<HTMLInputElement>): void => {
            setForm({ ...form, password: e.currentTarget.value })
            if (e.currentTarget.value.match(pass_regex)) {
              setStatusPassword('s')
              setForm({ ...form, password: e.currentTarget.value })
            } else setStatusPassword('e')
          }}
          onBlur={() => form.password.length === 0 && setStatusPassword('n')}
          onFocus={() => form.password.length === 0 && setStatusPassword('n')}
        />
        <CheckBox
          text='Remember me'
          onChange={(e: ChangeEvent<HTMLInputElement>): void =>
            setForm({ ...form, remember: e.currentTarget.checked })
          }
        />
        <AuthAction>
          <AuthButton
            status={loading}
            title={'Sign in'}
            onClick={(e: SyntheticEvent): void => {
              e.preventDefault()
              if (statusEmail === 'e' || statusPassword === 'e') {
                setDisable(true)
              } else {
                authenticate(form.mail, form.password, form.remember)
              }
            }}
          />
          <p>
            <Link href={'/auth/reset'} passHref>
              <a>Reset</a>
            </Link>{' '}
            password
            <br />
            <Link href={'/auth/register'} passHref>
              <a>create</a>
            </Link>{' '}
            an account
          </p>
        </AuthAction>
      </AuthForm>
    </AuthWrapper>
  )
}

export default Login
