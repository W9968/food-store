import React from 'react'
import { Button, ContactLogo, Input } from 'components/export'
import { Wrapper, Cols, Form, TextArea, Text } from 'styles/Conatact.styles'

const _Contact: React.FC = () => {
  return (
    <>
      <Wrapper initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <Cols>
          <Form>
            <Text>
              <h1 style={{ marginBottom: '10px', fontSize: '2.5rem' }}>
                Get in Touch
              </h1>
              <p style={{ fontWeight: 500 }}>
                Si vous avez quelque chose à nous dire ou si vous souhaitez être
                partenaire, envoyez-nous un e-mail et nous vous contacterons
                dans les plus brefs délais.
              </p>
            </Text>

            <div
              style={{
                display: 'flex',
              }}>
              <Input type='text' palceHolder='Votre nom...' />
              <div style={{ width: '25px' }} />
              <Input type='email' palceHolder='Votre email...' />
            </div>
            <Input type='text' palceHolder='Sujet...' />
            <TextArea placeholder='Contenu...' />
            <Button status={false} title='Envoyer un Email' />
          </Form>
        </Cols>
        <Cols>
          <ContactLogo />
        </Cols>
      </Wrapper>
    </>
  )
}

export default _Contact
