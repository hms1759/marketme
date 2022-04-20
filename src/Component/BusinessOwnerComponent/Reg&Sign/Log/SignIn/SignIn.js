import React, { useState } from "react";
import { PostProduct } from "../../Api/Index";
import '../log.css';
//import fetchData from "../../../Api/Index";


export default function SignIn() {
  const [data, setData]= useState(
    {
      email:"",
      password:""

    }
  )
   
const submit= async(e)=>{
e.preventDefault(); 
await PostProduct(data)
// .then (await fetchData())


}

  const handleChange=(e)=>{
    const newData ={...data}
    newData[e.target.id]=e.target.value
    setData(newData)

    console.log(newData)

  }

  const {email,password} = data;

  return (
    <div className="main_container"> 
    <div className="middle_container">
    <div className="log_container">
      <div className="sub_log_container">
      
        <div className="logIn_form">
          <div className="form_body">
            <br/>
            <div className=" form_img ">
              <div className=" form_img_cont">

            
              <img src="https://orionsutures.com.ng/wp-content/uploads/2021/05/stethoscope.jpg" className="form_logo"/>
              </div>
              </div> 
              <br/>
            <div className=" form_text ">
            SignIn Your Account

            </div>
          
            <div className=" form_input ">
            <form className="log_form_ui_form" onSubmit={(e)=> submit(e)}>
                   
              <div className="form_group">
           
           <input 
              onChange={(e)=> handleChange(e)}
              value = {email}
           type="text" 
           name="Email" 
           className="form_control" 
           placeholder="Username or Email" 
           id="email" />

           <div className="text-danger"></div>
         </div> 
         <div className="form_group">
           
           <input   
           onChange={(e)=> handleChange(e)}
              value = {password}
           type="password" 
           name="password" 
           className="form_control" 
           placeholder="Password" 
           id="password" />

           <div className="text-danger"></div>
         </div>    
         
         <div className="login_space">
           <button type="Submit" className="btn_submit"><a href="/dashBoard">Login</a> </button>  
            <div className=" form_login_text_log">
 <a href="/forgetPassword" className=" singUp_log"> Forget password</a>
         
            </div>
           
</div>
          
             </form>

            </div>
            <div className=" form_login_text_log">
Do not have an Account? <a href="/registration" className=" singUp_log"> register</a>
         
            </div>
          </div>

        </div>
        <div className="logImg_container">
          <div className="log_img">
        
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
}
