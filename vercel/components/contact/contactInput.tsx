import Input from 'components/input/input'
import { FC } from 'react'
import { BiEdit, BiUser, BiEnvelope, BiMessageSquareDots } from 'react-icons/bi'
import {
  Container,
  HeadingUs,
  Col,
  FormContact,
  Card,
} from 'styles/contact.module'

import TextArea from 'components/input/textarea'
import Button from 'components/buttons/button'
import { Icontactinfo, IcontactInfoArray } from 'interfaces/IcontactInfo'

const ContactInput: FC = () => {
  return (
    <>
      <Container>
        <Col>
          <span>
            <HeadingUs>Get in Touch</HeadingUs>
            <p>
              Si vous avez quelque chose à nous dire ou si vous souhaitez être
              partenaire, envoyez-nous un e-mail et nous vous contacterons dans
              les plus brefs délais.
            </p>
          </span>
          <div style={{ marginTop: '50px' }}>
            {IcontactInfoArray.map((el: Icontactinfo, key: number) => {
              return (
                <Card key={key}>
                  <div>{el.icon}</div>
                  <p>{el.text}</p>
                </Card>
              )
            })}
          </div>
        </Col>
        <Col>
          <FormContact>
            <Input
              type='text'
              placeholder='nom complete...'
              icon={<BiUser />}
            />
            <Input type='email' placeholder='email...' icon={<BiEnvelope />} />
            <Input type='text' placeholder='sujet...' icon={<BiEdit />} />
            <TextArea placeholder='contenu...' icon={<BiMessageSquareDots />} />
            <Button title='envoyer' status={false} />
          </FormContact>
        </Col>
      </Container>
    </>
  )
}

export default ContactInput
