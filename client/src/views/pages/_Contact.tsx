import React from 'react'
import Space from 'hooks/useSpace'
import { ContactWrapper, ContactInfo, Cols } from 'styles/Contact.element'
import { FirstContactSide, InfoCard, LastContactForm } from 'components/exports'

const _Contact: React.FC = () => {
  return (
    <>
      <ContactWrapper
        initial={{ opacity: 0, y: '-10%' }}
        animate={{ opacity: 1, y: '0%' }}
        transition={{ type: 'tween' }}>
        <Space />
        <ContactInfo>
          <Cols>
            <FirstContactSide
              title={'Get in Touch'}
              parag={
                'Si vous avez quelque chose à nous dire ou si vous souhaitez être partenaire, envoyez-nous un e-mail et nous vous contacterons dans les plus brefs délais.'
              }
            />
            <InfoCard />
          </Cols>
          <Cols>
            <LastContactForm />
          </Cols>
        </ContactInfo>
      </ContactWrapper>
    </>
  )
}

export default _Contact
