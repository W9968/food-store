import React, { useContext, useState, useLayoutEffect } from 'react'
import __a from 'hooks/useFetch'
import { __loadStorage } from 'hooks/useAsyncStorage'

const UserContext = React.createContext({})
export const __auth = () => useContext(UserContext)

interface IuserProvider {
  children: React.ReactNode
}

export default function _UserProvider({ children }: IuserProvider) {
  const [loading, setLoading] = useState<boolean>(false)
  const [isLogged, setIsLogged] = useState<string | boolean>(
    //@ts-ignore
    __loadStorage('isLogged') === 'true' || false
  )

  // register
  interface Iregister {
    fullName: string
    userMail: string
    userPass: string
  }
  const register = async ({ fullName, userMail, userPass }: Iregister) => {
    setLoading(true)
    return __a
      .get('/sanctum/csrf-cookie')
      .then((response) => {
        response.status === 201
          ? __a
              .post('/register', {
                name: fullName,
                email: userMail,
                password: userPass,
              })
              .then((response) => {
                response.status === 204
                  ? // getCurrentUser()
                    setLoading(false)
                  : console.log('user not registred')
              })
              .catch(() => {
                setLoading(false)
                console.log('enter valid information')
              })
          : console.log('register is not a valid route')
      })
      .catch(() => {
        console.log('fuck you')
      })
  }
}
