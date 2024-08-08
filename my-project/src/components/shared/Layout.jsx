import React from 'react'
import SideBar from './SideBar'
import Header from './Header'
import Dashboard from '../../pages/Dashboard'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div>
      <div className='bg-neutral-100 h-screen w-screen overflow-hidden flex flex-row'>
        <SideBar />
        <div className="flex flex-col flex-1">
          <Header />
          <div className="flex-1 p-4 min-h-0 overflow-auto">
            <Outlet />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Layout