import React from 'react'

export default function Navbar() {
  return (
    <div className='Navbar_container'>
        
        <div className='Navbar one'>

            <div className='Nav_logo logo_img'>
                {/* Business Logo */}
                <img  src='https://cdn.w600.comps.canstockphoto.com/royalty-or-kings-crown-cartoon-vector-illustration_csp11073925.jpg' alt='logo'/>
            </div>

            <div className='Nav_logo logo_txt'>
                
                {/* Business Name */}
                <h2>
                Marketme
                </h2>
            </div>
            
        </div>
        <div className='Navbar two'>
            <div className='nav' id='/'>
                Home
            </div>
            <div className='nav' id='/about'>
                About
            </div>
            <div className='nav' id='/service'>
                Service
            </div>
          
            <div className='nav' id='/contact'>
                Contact
            </div>
         
            
        </div>
    </div>
  )
}
