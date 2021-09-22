import 'styled-components'
import { DefaultTheme } from 'styled-components'

declare module 'styled-components' {
  interface DefaultTheme {
    foreground: string
    background: string

    accent: {
      primary: string
      secondary: string
      tertiary: string
      quaternary: string
      error: string
      success: string
    }

    units: string[]
  }
}

export const theme: DefaultTheme = {
  foreground: '#111111',
  background: '#ffffff',

  accent: {
    primary: '#6200ee',
    secondary: '#dbcff0',
    tertiary: '#F6F8FC',
    quaternary: '#8133f1',
    error: '#EE0000',
    success: '#50E3C2',
  },

  units: ['0.313rem', '1rem', '2rem'],
}
