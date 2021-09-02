import 'styled-components'
import { DefaultTheme } from 'styled-components'

declare module 'styled-components' {
  interface DefaultTheme {
    foreground: string
    background: string
    mdleground: string

    accent: {
      primary: string
      secondary: string
      shade1: string
      shade2: string
      error: string
      success: string
      accentp1: string
      acceptp2: string
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
  foreground: '#111111',
  background: '#ffffff',
  mdleground: '#6200ee',

  accent: {
    primary: '#F6F8FC',
    secondary: '#a166f5',
    shade1: '#8133f1',
    shade2: '#4500a7',
    error: '#ee0000',
    success: '#50e3c2',
    accentp1: '#721af0',
    acceptp2: '#EC42A2',
  },

  border: ['20px', '10px', '5px'],
  spacing: ['1rem', '0.825rem', '0.625rem'],

  fontSize: {
    heading: '2rem',
    heading2: '1.5rem',
    icons: '1.7rem',
    btns: '1.25rem',
    parag: '1.125rem',
  },
}
