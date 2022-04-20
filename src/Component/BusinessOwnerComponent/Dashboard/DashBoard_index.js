import React from 'react'
import { Modal } from 'bootstrap'
import RegistrationForm from '../Reg&Sign/Registration/RegistrationForm'
import './Dashboard.css'
import UploadsDialog from './OldDashbord/UploadsDialog'

export default function DashBoard_index() {
  return (
    <div className='dash_container'>
      <div className='dash_sub_container'>
        {/* First part */}
        <div className='dash_sub_content1'> 
        <div className='profile_update'>
           <div className='sub_content1'>
            <img src='https://www.seoclerk.com/pics/319222-1IvI0s1421931178.png' alt= "img"/>
          
          </div> 
           <div className='sub_profile'>
          <RegistrationForm/>
          </div>
          </div>
          <div className='dash_sub'>
         <div className='dash_sub_row'>
          <div className='sub_content1_name'>
            {/* <div>Name :</div>  */}
            <div>Olayemi PopoOla</div>
          </div>
          <div className='sub_content1_name '>
            {/* <div>Phone :</div>  */}
            <div>09087654334</div>
          </div>
          </div>
          
         <div className='dash_sub_row'>
          <div className='sub_content1_name'>
            {/* <div>Email :</div>  */}
            <div>Olayemi@gmail.com</div>
          </div>
           <div className='sub_content1_name'>
            {/* <div>Business : </div>  */}
            <div>Homemade Solution </div>
          </div>
          </div>
          
         <div className='dash_sub_row'>
          <div className='sub_content1_name'>
            {/* <div>Address : </div>  */}
            <div>Ag12, Federal Low </div>
            </div>

          </div>
      
         
          </div>
         
          </div>
         

        {/* second part */}
        <div className='dash_sub_content_2'>
          <div className='dash_sub_2_up'> 
       
          <UploadsDialog/>
           
            <div className='sub_2 down'>
            <a>Old Post  </a></div>
          </div>
         
          <div className='dash_sub_2_down'> 
     
          </div>
       
        </div>
      </div>
    </div>
  )
}
