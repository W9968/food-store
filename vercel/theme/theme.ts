import 'styled-components'
import { DefaultTheme } from 'styled-components'

declare module 'styled-components' {
  interface DefaultTheme {
    scheme: {
      body: string
      text: string
      domi: string
    }
    accent: {
      white: string
      hover: string
      select: string
      disabled: string
      textshade: string
      hoverSahdeForm: string
    }

    units: {
      _14: string
      _16: string
      _18: string
      _24: string
      _30: string
      _36: string
      _42: string
      _48: string
      _60: string
      _72: string
      _84: string
    }
  }
}

export const lightTheme: DefaultTheme = {
  scheme: {
    body: '#fffffe',
    text: '#1f2633',
    domi: '#3da9fc',
  },
  accent: {
    white: '#f9f9f9',
    hover: '#e4e6ea',
    select: '#191713',
    disabled: '#d8eefe',
    textshade: '#094067',
    hoverSahdeForm: '#094067',
  },
  units: {
    _14: '14px',
    _16: '16px',
    _18: '18px',
    _24: '24px',
    _30: '30px',
    _36: '36px',
    _42: '40px',
    _48: '48px',
    _60: '60px',
    _72: '72px',
    _84: '84px',
  },
}
