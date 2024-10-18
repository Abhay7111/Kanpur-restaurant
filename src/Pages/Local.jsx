import React from 'react'
import Nav from '../Components/Nav'
import Footer from '../Components/Footer'
import { Outlet } from 'react-router-dom'

function Local() {
  return (
    <div>
     <Nav/>
      <Outlet/>
     <Footer/>
    </div>
  )
}

export default Local