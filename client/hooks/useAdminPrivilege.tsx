import { FC } from 'react'
import Router from 'next/router'
import { __auth } from 'context/exports'

/**
 * Check user authentication and authorization
 * it check if the authed used have admin priviled
 * It make use of the isSubscribed and currentUser from authContext.
 * @param {{GuardedComponent: FC}}
 * @returns {{isSubscribed: true | false}}
 */

const useAdminPrivilege = (GuardedComponent: FC) => {
  const Guard = (props: any) => {
    const { isSubscribed, currentUser } = __auth()

    if (typeof window !== 'undefined' && window.location) {
      if (isSubscribed && currentUser.guarded != 1) {
        Router.push('/')
        return null
      } else {
        return <GuardedComponent {...props} />
      }
    }
  }
  return Guard
}

export default useAdminPrivilege
