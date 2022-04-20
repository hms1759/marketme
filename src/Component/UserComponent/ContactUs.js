import React from 'react'
import PhoneNumberDialog from './PhoneNumberDialog'

export default function ContactUs() {
  return (
    <div id="contact" className='user_contact_container'>
    
    <div className='user_contact_content'>
      
    <div className='user_contact_con'>
    <div className="user_contact_base_row">
            <a href="#" target="_blank" >
              <img
                src="https://www.psd2newsletters.com/templates/purple/images/ico_facebook.png"
                width="34"
                height="34"
                border="0"
                alt=""
                className="social_logo"
              />
            </a>   
              <a href="#" target="_blank" >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0sezybS1xgChtkOMU_FaATd2FStLOGhHURg&usqp=CAU"
                width="34"
                height="34"
                border="0"
                alt=""
                className="social_logo"
              />
            </a>  
           
               <a href="#about" target="_blank" >
              <img
                src="https://www.psd2newsletters.com/templates/purple/images/ico_instagram.png"
                width="34"
                height="34"
                border="0"
                alt=""
                className="social_logo"
              />
            </a>
            
      
    <PhoneNumberDialog/>
            <a href="#" target="_blank" >
              <img
                src="https://www.psd2newsletters.com/templates/purple/images/ico_twitter.png"
                width="34"
                height="34"
                border="0"
                alt=""
                className="social_logo"
              />
            </a>
            <a href="#" target="_blank">
              <img
                src="https://www.psd2newsletters.com/templates/purple/images/ico_pinterest.png"
                width="34"
                height="34"
                border="0"
                alt=""
                className="social_logo"
              />
            </a>
          </div>


    </div> 
    </div> 
  </div>
  )
}
