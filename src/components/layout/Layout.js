import * as React from 'react'
import { Outlet } from 'react-router-dom'
import MainNavigation from './MainNavigation'

const Layout = () => {
  return (
    <div className="Layout">
      <MainNavigation />
      <Outlet />
    </div>
  )
}

export default Layout
