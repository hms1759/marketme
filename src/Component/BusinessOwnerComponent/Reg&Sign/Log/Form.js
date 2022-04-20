import React,{ useState } from 'react'
import { PostProduct } from '../Api/Index';
import FetchMyData from './SignIn/fetch';

export default function Form() {
    const [data, setData]= useState(
        {
          fullName:"",
          phone:"",
          email:"",
          password:"",
          address:""
    
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

      const {fullName, phone,email,password, address} = data;
  return (
    <form className="log_form_ui_form" onSubmit={(e)=> submit(e)}> 
                   
           
 <div className="form_group">
   
   <input 
   
   onChange={(e)=> handleChange(e)}
   value = {phone}
   type="text" 
   name="phone" 
   className="form_control" 
   placeholder="Phone Number" 
   id="phone" />

   <div className="text-danger"></div>
 </div>     

      
 <div className="form_group">
   
   <input 
   onChange={(e)=> handleChange(e)}
   value = {email}
   type="text" 
   name="email" 
   className="form_control" 
   placeholder="Email" 
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
 
   <button className="btn_submit"> Submit</button>
   
     </form>

  )
}
