import { ChangeEvent, FC, SyntheticEvent, useState } from 'react'
import {
  AuthAction,
  AuthForm,
  AuthHeader,
  AuthWrapper,
} from 'styles/auth.module'
import { BiMailSend, BiLockOpenAlt } from 'react-icons/bi'
import { mail_regex, pass_regex } from 'validation/formRegex'

import TextInput from 'components/input/TextInput'
import AuthButton from 'components/buttons/AuthButton'
import Link from 'next/link'
import CheckBox from 'components/input/CheckBox'
import Logo from 'components/logo/Logo'
import { __fetch } from 'hooks/useAxios'

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
  const [statusEmail, setStatusEMail] = useState<'n' | 'e' | 's'>('n')
  const [statusPassword, setStatusPassword] = useState<'n' | 'e' | 's'>('n')
  const [disable, setDisable] = useState<boolean>(false)

  return (
    <AuthWrapper>
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
            status={disable}
            title={'Sign in'}
            onClick={(e: SyntheticEvent): void => {
              e.preventDefault()
              // if (statusEmail === 'e' || statusPassword === 'e') {
              //   setDisable(true)
              //   alert('nice')
              //   setDisable(false)
              // }
              // __fetch.get('/sanctum/csrf-cookie').then(() => {
              __fetch
                .post('/api/catalog', {
                  category: 'boobies',
                })
                .then((res) => console.log(res))
              // })
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
