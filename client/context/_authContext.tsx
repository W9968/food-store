import { useRouter } from 'next/router'
import { __fetch } from 'hooks/useAxios'
import { intialUserStore, IuserContext } from 'interfaces/Iauth'
import { useState, createContext, useContext, FC, useEffect } from 'react'
import { Loader } from 'components/export'

const UserContext = createContext<IuserContext>(intialUserStore)
export const __auth = () => useContext(UserContext)

const _UserProvider: FC = ({ children }) => {
  /**
   * localstorage key name
   * a key name we going to use to refrence the value of an authed user
   */
  const keyLoad: string = 'isSubscribed'
  const router = useRouter()
  const [loading, setLoading] = useState<boolean>(intialUserStore.loading)
  /**
   * use of typeof windows != 'undefined'
   * cuz server side rendring does not support local storage
   */
  const [isSubscribed, setIsSubscribed] = useState<boolean>(
    (typeof window !== 'undefined' &&
      localStorage.getItem(keyLoad) === 'true') ||
      intialUserStore.isSubscribed
  )
  const [currentUser, setCurrentUser] = useState<{}>(
    intialUserStore.currentUser
  )
  const [serverResponse, setServerResponse] = useState<string>(
    intialUserStore.serverResponse
  )
  const [validationMessage, setValidationMessage] = useState(
    intialUserStore.validationMessage
  )

  /**
   * register server endpoint
   * @param fullName
   * @param userMail
   * @param userPassword
   * @returns {Promise}
   */
  const register = async (
    fullName: string,
    userMail: string,
    userPassword: string
  ) => {
    setLoading(true)
    // make request to sanctum CSRF endpint to intiailize CSRF protection for our application
    return await __fetch
      .get('/sanctum/csrf-cookie')
      .then((res) => {
        res.status === 204
          ? // make a request to Register endpoint to add a new user to database
            __fetch
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
                  router.push('/')
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
  const authenticate = async (
    userMail: string,
    userPassword: string,
    rememberMe: boolean
  ) => {
    setLoading(true)
    return await __fetch
      .get('/sanctum/csrf-cookie')
      .then((res) => {
        res.status === 204
          ? __fetch
              .post('/login', {
                email: userMail,
                password: userPassword,
                remember: rememberMe,
              })
              .then((res) => {
                if (res.status === 204) {
                  setIsSubscribed(true)
                  getCurrentUser()
                  localStorage.setItem(keyLoad, `${true}`)
                  router.push('/')
                  setLoading(false)
                } else {
                  setIsSubscribed(false)
                  localStorage.setItem(keyLoad, `${false}`)
                  setLoading(false)
                }
              })
              .catch(() => {
                setValidationMessage({
                  type: 'e',
                  message: 'verify your information',
                })
                setLoading(false)
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

  /**
   * logout server endpoint
   * @returns {Promise}
   */
  const logout = async () => {
    return await __fetch.get('/sanctum/csrf-cookie').then((res) => {
      res.status === 204
        ? __fetch
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

  /**
   * endpoint for getting current logged in user
   * @return {Promise}
   */
  const [AuthStateChange, setAuthStateChange] = useState<boolean>(false)
  const getCurrentUser = async () => {
    await __fetch
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
          localStorage.setItem('auth', `${new Date()}-REMOVED`)
          // console.clear()
        }
      })
      .catch(() => {
        setIsSubscribed(false)
        setAuthStateChange(true)
        localStorage.setItem(keyLoad, `${false}`)
        localStorage.setItem('auth', `${new Date()}-REMOVED`)
        // console.clear()
      })
  }

  /**
   * this function will render once our application is mounted
   * it will call for get current user and store it into coockies
   */
  useEffect(() => {
    getCurrentUser()
  }, [])

  return (
    <UserContext.Provider
      value={{
        currentUser,
        isSubscribed,
        validationMessage,
        serverResponse,
        loading,
        authenticate,
        register,
        logout,
      }}>
      {AuthStateChange ? (
        children
      ) : (
        <span
          style={{
            width: '100%',
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            background: '#fffffe',
            justifyContent: 'center',
          }}>
          <Loader />
        </span>
      )}
    </UserContext.Provider>
  )
}

export default _UserProvider
