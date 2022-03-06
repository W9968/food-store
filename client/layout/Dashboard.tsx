import { FC, ReactChild } from 'react'
import { DashboardLayout } from 'styles/admin.module'

type Iprops = {
  children: ReactChild
}

const Dashboard: FC<Iprops> = ({ children }) => {
  return <DashboardLayout>{children}</DashboardLayout>
}

export default Dashboard
