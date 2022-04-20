import React, { useState } from "react";
import { PostProduct } from "../../Api/Index";
import '../log.css';
//import fetchData from "../../../Api/Index";


export default function ForgetPassword() {
  const [data, setData]= useState(
    {
      email:""

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
      <div className="sub_logger_container">
      
        <div className="logger_form">
          <div className="form_body">
            <br/>
            <div className=" form_img ">
              <div className=" form_img_cont">

            
              <img src="https://orionsutures.com.ng/wp-content/uploads/2021/05/stethoscope.jpg" className="form_logo"/>
              </div>
              </div> 
              <br/>
            <div className=" form_text ">
            Input Your valid email

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
           placeholder="Email" 
           id="email" />

           <div className="text-danger"></div>
         </div> 
       
         <div className="login_space">
           <button type="Submit" className="btn_submit"> Reset Password</button>  
       
           
</div>
          
             </form>

            </div>
            <div className=" form_login_text_log">
I have remembered,  <a href="/signIn" className=" singUp_log"> Back to login</a>
         
            </div>
          </div>

        </div>
       
      </div>
    </div>
    </div>
    </div>
  );
}
