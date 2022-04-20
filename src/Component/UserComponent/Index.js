import React from 'react'
import About from './About'
import ContactUs from './ContactUs'
import Footer from './Footer'
import Home from './Home'
import Navbar from './Navbar'
import Service from './Service'
import './User.css'

export default function Index() {
  return (
    <div className='User_container'>
        <Navbar/>
        <Home/>
        <About/>
        <Service/>
        <ContactUs/>
        <Footer/>
    </div>
  )
}
