import React from "react";
import { useState } from "react/cjs/react.production.min";
import '../log.css';
import {fetchData, PostProduct} from '../../Api/Index'
import Form from "../Form";

export default function SignUp() {

  return (
    
    <div className="main_container"> 
    <div className="middle_container">
    <div className="log_container">
      <div className="sub_log_container">
        <div className="logImg_container">
          <div className="log_img">
        
          </div>
        </div>
       
        <div className="log_form">
          <div className="form_body">
            <div className=" form_img ">
              <div className=" form_img_cont">

            
              <img src="https://orionsutures.com.ng/wp-content/uploads/2021/05/stethoscope.jpg" className="form_logo"/>
              </div>
            </div>
            <div className=" form_text ">
              Create Your Account

            </div>
            <br/>
            <br/>
            <div className=" form_input ">
              <Form />
            </div>
           
            <div className=" form_login_text">
Already have an Account? <a href="/SignIn" className=" singUp_log"> login</a>
            </div>

          </div>

        </div>
      </div>
    </div></div></div>
  );
}
