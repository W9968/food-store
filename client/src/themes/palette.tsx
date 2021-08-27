import 'styled-components'
import { DefaultTheme } from 'styled-components'

declare module 'styled-components' {
  interface DefaultTheme {
    foreground: string
    background: string

    accent: {
      primary: string
      secondary: string
      error: string
      success: string
      accentp1: string
      accentp2: string
    }

    border: string[]
    spacing: string[]

    fontSize: {
      heading: string
      heading2: string
      icons: string
      btns: string
      parag: string
    }
  }
}

export const theme: DefaultTheme = {
  foreground: '#0E153A',
  background: '#ffffff',

  accent: {
    primary: '#F6F8FC',
    secondary: '#F6F5FF',
    error: '#ee0000',
    success: '#50e3c2',
    accentp1: '#E7E6EF',
    accentp2: '#0E153A',
  },

  border: ['10px', '5px'],
  spacing: ['1rem', '0.825rem', '0.625rem'],

  fontSize: {
    heading: '2rem',
    heading2: '1.5rem',
    icons: '1.7rem',
    btns: '1.25rem',
    parag: '1.125rem',
  },
}
