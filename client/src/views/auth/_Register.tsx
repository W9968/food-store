import React from 'react'
import Space from 'hooks/useSpace'
import { Button, Input } from 'components/exports'
import { BiUser, BiEnvelope, BiLockAlt } from 'react-icons/bi'
import {
  AuthWrapper,
  Container,
  Form,
  Title,
  ChangeRoute,
  GoToLink,
} from 'styles/Auth.element'

const _Register: React.FC = () => {
  return (
    <>
      <AuthWrapper
        initial={{ opacity: 0, y: '-10%' }}
        animate={{ opacity: 1, y: '0%' }}
        transition={{ type: 'tween' }}>
        <Space />
        <Container>
          <Form>
            <Title>Inscrivez à Notre Plateforme</Title>
            <Input type='text' placeholer='nom...' icon={<BiUser />} />
            <Input type='email' placeholer='email...' icon={<BiEnvelope />} />
            <Input
              type='password'
              placeholer='mot de passe...'
              icon={<BiLockAlt />}
            />
            <Button title='se connecter' />
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
