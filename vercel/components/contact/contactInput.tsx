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
          {/* <span>
            <HeadingUs>Get in Touch</HeadingUs>
            <p>
              If you have something to tell us or would like to be a partner,
              send us an email and we will get back to you as soon as possible.
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
          </div> */}
        </Col>
        <Col>
          <FormContact>
            <Input type='text' placeholder='full name...' icon={<BiUser />} />
            <Input type='email' placeholder='email...' icon={<BiEnvelope />} />
            <Input type='text' placeholder='subject...' icon={<BiEdit />} />
            <TextArea placeholder='content...' icon={<BiMessageSquareDots />} />
            <Button title='Send' status={false} />
          </FormContact>
        </Col>
      </Container>
    </>
  )
}

export default ContactInput
