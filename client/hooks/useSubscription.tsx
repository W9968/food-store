import { FC } from 'react'
import Router from 'next/router'
import { __auth } from 'context/exports'

/**
 * Check user authentication and authorization
 * It make use of the isSubscribed from authContext.
 * @param {{GuardedComponent: FC}}
 * @returns {{isSubscribed: true | false}}
 */

const useSubscription = (GuardedComponent: FC) => {
  const Guard = (props: any) => {
    const { isSubscribed } = __auth()
    if (typeof window !== 'undefined' && window.location) {
      if (isSubscribed) {
        Router.replace('/')
        return null
      } else {
        return <GuardedComponent {...props} />
      }
    }
  }
  return Guard
}

export default useSubscription
