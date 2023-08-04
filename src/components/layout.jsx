import React from 'react'
import { Outlet } from "react-router-dom";
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const layout = () => {
  return (
    <div className="wrapper">
      <Navbar />
      <Sidebar />
      <Outlet />
    </div>
  )
}

export default layout