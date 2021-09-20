import React from 'react'
import { TextSideStyle } from 'styles/Contact.element'

interface Iprops {
  title: string
  parag: string
}

const TextSide: React.FC<Iprops> = ({ title, parag }) => {
  return (
    <>
      <TextSideStyle
        initial={{ opacity: 0, x: '-10%' }}
        animate={{ opacity: 1, x: '0%' }}
        transition={{ type: 'tween', delay: 0.1 }}>
        <div>
          <h1 style={{ marginBottom: '10px', fontSize: '2.5rem' }}>{title}</h1>
          <p style={{ fontWeight: 500 }}>{parag}</p>
        </div>
      </TextSideStyle>
    </>
  )
}

export default TextSide
