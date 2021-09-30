import React from 'react'
import __a from 'hooks/useFetch'
import { PulseLoader } from 'components/exports'
import { useState, useLayoutEffect, createContext, useContext } from 'react'

interface Iuser {
  Guarded?: number
  created_at?: string
  email?: string
  email_verified_at?: any
  id?: number
  name?: string
  updated_at?: string
}

interface IuserContext {
  currentUser: Iuser
  isSubscribed: boolean
  serverResponse: string
  loading: boolean
  authenticate: (userMail: string, userPassword: string) => void
  register: (fullname: string, userMail: string, userPassword: string) => void
  logout: () => void
}

const initial: IuserContext = {
  currentUser: {},
  isSubscribed: false,
  serverResponse: '',
  loading: false,
  authenticate: () => {},
  register: () => {},
  logout: () => {},
}

const UserContext = createContext<IuserContext>(initial)
export const __auth = () => useContext(UserContext)

const _UserProvider: React.FC = ({ children }) => {
  // localstorage key name
  // a key name we going to use to refrence the value of an authed user
  const keyLoad: string = 'isSubscribed'

  const [loading, setLoading] = useState<boolean>(initial.loading)
  const [isSubscribed, setIsSubscribed] = useState<boolean>(
    localStorage.getItem(keyLoad) === 'true' || initial.isSubscribed
  )
  const [currentUser, setCurrentUser] = useState<{}>(initial.currentUser)
  const [serverResponse, setServerResponse] = useState<string>(
    initial.serverResponse
  )

  // register endpoint
  const register = async (
    fullName: string,
    userMail: string,
    userPassword: string
  ) => {
    setLoading(true)
    // make request to sanctum CSRF endpint to intiailize CSRF protection for our application
    return await __a
      .get('/sanctum/csrf-cookie')
      .then((res) => {
        res.status === 204
          ? // make a request to Register endpoint to add a new user to database
            __a
              .post('/register', {
                name: fullName,
                email: userMail,
                password: userPassword,
              })
              .then((res) => {
                if (res.status === 201) {
                  setIsSubscribed(true)
                  getCurrentUser()
                  localStorage.setItem(keyLoad, `${true}`)
                  setLoading(false)
                } else {
                  setIsSubscribed(false)
                  localStorage.setItem(keyLoad, `${false}`)
                  setLoading(false)
                }
              })
          : setServerResponse(
              'It seems that ours servers are down, sorry for the inconvenience'
            )
      })
      .catch(() =>
        setServerResponse(
          'It seems that ours servers are down, sorry for the inconvenience'
        )
      )
  }

  // login endpoint
  const authenticate = async (userMail: string, userPassword: string) => {
    setLoading(true)
    return await __a
      .get('/sanctum/csrf-cookie')
      .then((res) => {
        res.status === 204
          ? __a
              .post('/login', {
                email: userMail,
                password: userPassword,
                remember: true,
              })
              .then((res) => {
                if (res.status === 204) {
                  setIsSubscribed(true)
                  getCurrentUser()
                  localStorage.setItem(keyLoad, `${true}`)
                  setLoading(false)
                } else {
                  setIsSubscribed(false)
                  localStorage.setItem(keyLoad, `${false}`)
                  setLoading(false)
                }
              })
          : setServerResponse(
              'It seems that ours servers are down, sorry for the inconvenience'
            )
      })
      .catch(() =>
        setServerResponse(
          'It seems that ours servers are down, sorry for the inconvenience'
        )
      )
  }

  // logout endpoint
  const logout = async () => {
    return await __a.get('/sanctum/csrf-cookie').then((res) => {
      res.status === 204
        ? __a
            .post('/logout')
            .then((res) => {
              if (res.status === 204) {
                setIsSubscribed(false)
                localStorage.setItem(keyLoad, `${false}`)
                localStorage.setItem('auth', `${new Date()}-REMOVED`)
              }
            })
            .catch(() => {
              console.log('not able to reach endpoint')
            })
        : setServerResponse(
            'It seems that ours servers are down, sorry for the inconvenience'
          )
    })
  }

  const [AuthStateChange, setAuthStateChange] = useState<boolean>(false)
  // current user endpoint
  const getCurrentUser = async () => {
    await __a
      .get('/api/user')
      .then((res) => {
        if (res.status === 200) {
          setIsSubscribed(true)
          setCurrentUser(res.data)
          setAuthStateChange(true)
          localStorage.setItem(keyLoad, `${true}`)
          localStorage.setItem('auth', JSON.stringify(res.data))
        } else {
          setIsSubscribed(false)
          setAuthStateChange(true)
          localStorage.setItem(keyLoad, `${false}`)
          console.clear()
        }
      })
      .catch(() => {
        setIsSubscribed(false)
        setAuthStateChange(true)
        localStorage.setItem(keyLoad, `${false}`)
        console.clear()
      })
  }
  useLayoutEffect(() => {
    getCurrentUser()
  }, [])

  return (
    <UserContext.Provider
      value={{
        isSubscribed,
        currentUser,
        serverResponse,
        loading,
        register,
        authenticate,
        logout,
      }}>
      {AuthStateChange ? children : <PulseLoader />}
    </UserContext.Provider>
  )
}
export default _UserProvider
