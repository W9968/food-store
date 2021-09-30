import React from 'react'
import { BiLoader } from 'react-icons/bi'
import { Field, LoadingAnimation } from 'styles/Button.element'

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
        {status ? (
          <LoadingAnimation
            animate={{ rotate: 360 }}
            transition={{ ease: 'linear', duration: 2, repeat: Infinity }}>
            <BiLoader style={{ display: 'flex', fontSize: '1.5rem' }} />
          </LoadingAnimation>
        ) : (
          <>
            <p style={{ display: 'flex' }}>{title}</p>
            <div style={{ display: 'flex' }}>{icons}</div>
          </>
        )}
      </Field>
    </>
  )
}

export default Button
