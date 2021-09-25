import React from 'react'
import { __auth } from 'global/exports'
import { Redirect, Route } from 'react-router-dom'

const ProtectedRoutes = ({ component: Component, ...rest }: any) => {
  const { isSubscribed } = __auth()
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isSubscribed) return <Redirect to='/' />
        else return <Component {...props} />
      }}
    />
  )
}

export default ProtectedRoutes
