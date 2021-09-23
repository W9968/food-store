import React from 'react'
import { Field } from 'styles/Button.element'

interface Iprops {
  title: string
  status?: boolean
  icons?: React.ReactNode
}

const Button: React.FC<Iprops & Record<any, any>> = ({
  title,
  status,
  icons,
  ...rest
}) => {
  return (
    <>
      <Field {...rest} disabled={status}>
        <p style={{ display: 'flex' }}>{title}</p>
        <div style={{ display: 'flex' }}>{icons}</div>
      </Field>
    </>
  )
}

export default Button
