import { ChangeEvent, FC, SyntheticEvent, useState } from 'react'
import {
  AuthAction,
  AuthForm,
  AuthHeader,
  AuthWrapper,
} from 'styles/auth.module'
import { BiMailSend, BiLockOpenAlt } from 'react-icons/bi'
import { name_regex, mail_regex, pass_regex } from 'validation/formRegex'

import TextInput from 'components/input/TextInput'
import AuthButton from 'components/buttons/AuthButton'
import Link from 'next/link'
import Logo from 'components/logo/Logo'

import { __auth } from 'context/_authContext'

const Register: FC = () => {
  const [form, setForm] = useState<{
    name: string
    mail: string
    password: string
  }>({
    name: '',
    mail: '',
    password: '',
  })
  const { loading, register } = __auth()
  const [statusName, setStatusName] = useState<'n' | 'e' | 's'>('n')
  const [statusEmail, setStatusEMail] = useState<'n' | 'e' | 's'>('n')
  const [statusPassword, setStatusPassword] = useState<'n' | 'e' | 's'>('n')
  const [disable, setDisable] = useState<boolean>(false)

  return (
    <AuthWrapper>
      <AuthForm layoutId='form' transition={{ type: 'tween' }}>
        <Logo /> <br />
        <AuthHeader>
          <h1>register now</h1>
          <p>For better experience create an account into our platform</p>
        </AuthHeader>
        <TextInput
          type='text'
          status={statusName}
          label={'Customer name'}
          icon={<BiMailSend />}
          placeholder='full name'
          onChange={(e: ChangeEvent<HTMLInputElement>): void => {
            setForm({ ...form, name: e.currentTarget.value })
            if (e.currentTarget.value.match(name_regex)) {
              setStatusName('s')
              setForm({ ...form, name: e.currentTarget.value })
            } else setStatusName('e')
          }}
          onBlur={() => form.mail.length === 0 && setStatusEMail('n')}
          onFocus={() => form.mail.length === 0 && setStatusEMail('n')}
        />
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
        <AuthAction>
          <AuthButton
            status={loading}
            title={'Sign up'}
            onClick={(e: SyntheticEvent): void => {
              e.preventDefault()
              if (statusEmail === 'e' || statusPassword === 'e') {
                setDisable(true)
                alert('nice')
                setDisable(false)
              } else {
                register(form.name, form.mail, form.password)
              }
            }}
          />

          <p>
            Already registred?
            <br />
            <Link href={'/auth/login'} passHref>
              <a>login</a>
            </Link>
            {' here'}
          </p>
        </AuthAction>
      </AuthForm>
    </AuthWrapper>
  )
}

export default Register
