import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom' 
export default function Rootlayout() {
  return (
    <div>
      <NavBar/>
      {/* //RouterProvider */}
      <div style={{minHeight:'85vh'}}>
      <Outlet/>
      </div>
      <Footer/>
    </div>
  )
}
