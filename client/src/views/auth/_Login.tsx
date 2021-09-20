import React from 'react'
import Space from 'hooks/useSpace'
import { Button, Input } from 'components/exports'
import { BiEnvelope, BiLockAlt } from 'react-icons/bi'
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
  return (
    <AuthWrapper>
      <Space />
      <Container
        initial={{ opacity: 0, y: '-10%' }}
        animate={{ opacity: 1, y: '0%' }}
        transition={{ type: 'tween' }}>
        <Form>
          <Title>Content de te revoire</Title>
          <Input type='email' placeholer='email...' icon={<BiEnvelope />} />
          <Input
            type='password'
            placeholer='mot de passe...'
            icon={<BiLockAlt />}
          />
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <ForgotPaswword to='/sendResetMail'>
              Mot de passe oublié ?
            </ForgotPaswword>
          </div>
          <Button title='se connecter' />
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
