import Head from 'next/head'
import type { NextPage } from 'next'
import useAdminPrivilege from 'hooks/useAdminPrivilege'
import Dashboard from 'layout/Dashboard'

const Admin: NextPage = () => {
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <Dashboard>sdfdf</Dashboard>
    </>
  )
}

// eslint-disable-next-line
export default useAdminPrivilege(Admin)
