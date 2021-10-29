import React, { useState } from 'react'
import { __auth } from 'global/exports'
import { Button, Input } from 'components/exports'
import { BiEnvelope, BiLockAlt } from 'react-icons/bi'
import { emailRegex, psswdRegex } from 'validation/inputRegex'
import {
  AuthWrapper,
  Container,
  Form,
  Title,
  ForgotPaswword,
  ChangeRoute,
  GoToLink,
} from 'styles/Auth.element'

const _Login: React.FC = () => {
  const [emailValidation, setEmailValidation] = useState<string>('')
  const [passwordValidation, setPasswordValidation] = useState<string>('')

  const [emailPropsValid, setEmailPropsValid] = useState(false)
  const [passwordPropsValid, setPasswordPropsValid] = useState(false)

  const { authenticate, loading } = __auth()

  return (
    <AuthWrapper>
      <Container
        initial={{ opacity: 0, y: '-10%' }}
        animate={{ opacity: 1, y: '0%' }}
        transition={{ type: 'tween' }}>
        <Form>
          <Title>Content de te revoire</Title>
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
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <ForgotPaswword to='/sendResetMail'>
              Mot de passe oublié ?
            </ForgotPaswword>
          </div>
          <Button
            title='se connecter'
            status={loading}
            onClick={() => authenticate(emailValidation, passwordValidation)}
          />
        </Form>
        <ChangeRoute>
          Si vous n'avez pas de compte cliquez
          <GoToLink to='/register'> ici</GoToLink> pour en créer un.
        </ChangeRoute>
      </Container>
    </AuthWrapper>
  )
}

export default _Login
