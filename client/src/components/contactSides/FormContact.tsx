import React from 'react'
import { Form } from 'styles/Contact.element'
import TextArea from 'components/input/TextAreaField'
import InputField from 'components/input/InputField'
import Button from 'components/button/Button'
import { BiUser, BiEnvelope, BiEdit, BiMessageDots } from 'react-icons/bi'

const FormContact: React.FC = () => {
  return (
    <>
      <Form
        initial={{ opacity: 0, x: '10%' }}
        animate={{ opacity: 1, x: '0%' }}
        transition={{ type: 'tween', delay: 0.1 }}>
        <h2 style={{ marginBottom: '10px' }}>Envoyer un Message</h2>

        <InputField
          type='text'
          placeholer='Entrez votre nom'
          icon={<BiUser />}
        />
        <InputField
          type='email'
          placeholer='Entrez votre e-mail'
          icon={<BiEnvelope />}
        />
        <InputField
          type='text'
          placeholer='Entrez votre sujet'
          icon={<BiEdit />}
        />
        <TextArea placeholer='Contenu...' icon={<BiMessageDots />} />
        <Button title={'envoyer'} />
      </Form>
    </>
  )
}

export default FormContact
