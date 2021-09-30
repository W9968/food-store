import React, { useState } from 'react'
import Space from 'hooks/useSpace'
import { __auth } from 'global/exports'
import { Button, Input } from 'components/exports'
import { BiUser, BiEnvelope, BiLockAlt } from 'react-icons/bi'
import { fullNameRegex, emailRegex, psswdRegex } from 'validation/inputRegex'
import {
  AuthWrapper,
  Container,
  Form,
  Title,
  ChangeRoute,
  GoToLink,
} from 'styles/Auth.element'

const _Register: React.FC = () => {
  const [emailValidation, setEmailValidation] = useState<string>('')
  const [passwordValidation, setPasswordValidation] = useState<string>('')
  const [fullNameValidation, setFullNameValidation] = useState<string>('')

  const [emailPropsValid, setEmailPropsValid] = useState<boolean>(false)
  const [passwordPropsValid, setPasswordPropsValid] = useState<boolean>(false)
  const [fullNamePropsValid, setFullNamePropsValid] = useState<boolean>(false)

  // deconstruction
  const { register, loading } = __auth()

  return (
    <>
      <AuthWrapper>
        <Space />
        <Container
          initial={{ opacity: 0, y: '-10%' }}
          animate={{ opacity: 1, y: '0%' }}
          transition={{ type: 'tween' }}>
          <Form>
            <Title>Inscrivez à Notre Plateforme</Title>
            <Input
              type='text'
              placeholer='nom...'
              icon={<BiUser />}
              validation={fullNamePropsValid}
              message={
                <>
                  <p>* Entrez votre nom complete</p>
                </>
              }
              onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
                setFullNameValidation(e.target.value)
                setFullNamePropsValid(false)
              }}
              onBlur={(): void => {
                fullNameValidation.match(fullNameRegex) === null &&
                  setFullNamePropsValid(true)
              }}
            />
            <Input
              type='email'
              placeholer='email...'
              icon={<BiEnvelope />}
              validation={emailPropsValid}
              message={
                <>
                  <p>* email non valide</p>
                  <p>* Entrez doit etre sous la forms exemple@exp.ex</p>
                </>
              }
              onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
                setEmailValidation(e.target.value)
                setEmailPropsValid(false)
              }}
              onBlur={(): void => {
                emailValidation.match(emailRegex) === null &&
                  setEmailPropsValid(true)
              }}
            />
            <Input
              type='password'
              placeholer='mot de passe...'
              icon={<BiLockAlt />}
              validation={passwordPropsValid}
              message={
                <>
                  <p>* Mot de passe doit avoir au min 8 characters</p>
                  <p>* Mot de passe doit avoir des characteres speciaux</p>
                  <p>* Mot de passe doit avoir au min un lettre majiscule</p>
                  <p>* Mot de passe doit avoir au min un chiffre</p>
                </>
              }
              onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
                setPasswordValidation(e.target.value)
                setPasswordPropsValid(false)
              }}
              onBlur={(): void => {
                passwordValidation.match(psswdRegex) === null &&
                  setPasswordPropsValid(true)
              }}
            />
            <Button
              status={loading}
              title='se connecter'
              onClick={(): void =>
                register(
                  fullNameValidation,
                  emailValidation,
                  passwordValidation
                )
              }
            />
          </Form>
          <ChangeRoute>
            Si vous avez un compte cliquez
            <GoToLink to='/login'> ici </GoToLink>
            pour se connecter.
          </ChangeRoute>
        </Container>
      </AuthWrapper>
    </>
  )
}

export default _Register
