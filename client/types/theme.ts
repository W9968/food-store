import 'styled-components'
import { DefaultTheme } from 'styled-components'

declare module 'styled-components' {
  interface DefaultTheme {
    mode: string
    accent: {
      accent_color_1: string
      accent_color_2: string
      accent_color_3: string
      accent_color_4: string
      accent_color_5: string
      accent_error: string
      accent_success: string
    }

    units: {
      _14: string
      _16: string // p
      _18: string // h4
      _24: string
      _28: string // h3
      _36: string // h2
      _48: string // h1
    }
  }
}

export const palette: DefaultTheme = {
  mode: 'default',
  accent: {
    accent_color_1: '#fffffe', // foreground
    accent_color_2: '#eff0f3', // background
    accent_color_3: '#6246ea', // primary
    accent_color_4: '#0d0d0d', // text
    accent_color_5: '#2a2a2a', // parag
    accent_error: '#f21361',
    accent_success: '#17c964',
  },

  units: {
    _14: '14px',
    _16: '16px',
    _18: '18px',
    _24: '24px',
    _28: '28px',
    _36: '36px',
    _48: '48px',
  },
}
