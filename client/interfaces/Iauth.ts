interface Iuser {
  guarded?: number
  created_at?: string
  email?: string
  email_verified_at?: any
  id?: string
  name?: string
  updated_at?: string
}

export interface IuserContext {
  currentUser: Iuser
  isSubscribed: boolean
  serverResponse: string
  loading: boolean
  authenticate: (
    useMail: string,
    userPassword: string,
    rememberMe: boolean
  ) => void
  register: (fullName: string, useMail: string, userPassword: string) => void
  logout: () => void
}

export const intialUserStore: IuserContext = {
  currentUser: {},
  isSubscribed: false,
  serverResponse: '',
  loading: false,
  authenticate: () => {},
  register: () => {},
  logout: () => {},
}
