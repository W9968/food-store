import React from 'react'
import { FieldArea, TextArea, Field } from 'styles/Input.element'

interface Iprops {
  icon: React.ReactNode
  placeholer: string
}

const TextAreaField: React.FC<Iprops & Record<string, any>> = ({
  icon,
  placeholer,
  type,
  ...rest
}) => {
  return (
    <>
      <Field>
        <FieldArea>
          <p style={{ fontSize: '1.5rem', display: 'flex' }}>{icon}</p>
          <TextArea placeholder={placeholer} autoComplete='no' />
        </FieldArea>
      </Field>
    </>
  )
}

export default TextAreaField
