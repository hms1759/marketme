import React,{ useState } from 'react'
import { PostProduct } from '../Api/Index';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';

export default function RegistrationForm() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

    const [data, setData]= useState(
        {
          lastName:"",
          firstName:"",
          phone:"",
          address:"",
          businessName:"",
          businessEmail:"",
          businessPhone:"",
          businessAddress:""
    
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

      const {lastName,firstName, phone,businessAddress,businessEmail,businessName,businessPhone , address} = data;
  return (
    <div className=''>
        <a onClick={handleClickOpen}>
        Update Profile
      </a>
    <Dialog
    open={open}
    onClose={handleClose}
  >
    <DialogContent className="dialog_ui_form" >
    <form className="log_form_ui_form" onSubmit={(e)=> submit(e)}> 

         <div className=' form_row'>                         
 <div className="form_group">
   
   <input 
   
   onChange={(e)=> handleChange(e)}
   value = {lastName}
   type="text" 
   name="lastName" 
   className="form_control" 
   placeholder="Last Name " 
   id="lastName" />

   <div className="text-danger"></div>
 </div>              
        
 <div className="form_group">
   
   <input 
   
   onChange={(e)=> handleChange(e)}
   value = {firstName}
   type="text" 
   name="firstName" 
   className="form_control" 
   placeholder="First Name " 
   id="firstName" />

   <div className="text-danger"></div>
 </div>              
 </div>   
  
 <div className=' form_row'>  
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
   value = {businessPhone}
   type="text" 
   name="businessPhone" 
   className="form_control" 
   placeholder="Business Phone Number" 
   id="businessPhone" />

   <div className="text-danger"></div>

   </div>    
   </div>        

  <div className=' form_row'>   
 <div className="form_group">
   
   <input 
   
   onChange={(e)=> handleChange(e)}
   value = {businessName}
   type="text" 
   name="businessName" 
   className="form_control" 
   placeholder="Business Name" 
   id="businessName" />

   <div className="text-danger"></div>
 </div>     
           
 <div className="form_group">
   
   <input 
   
   onChange={(e)=> handleChange(e)}
   value = {businessEmail}
   type="text" 
   name="businessEmail" 
   className="form_control" 
   placeholder="Business Email" 
   id="businessEmail" />

   <div className="text-danger"></div>
 </div>    
 </div>      
 <br/>      
 <div className=' form_row'>           
 <textarea 
   
   onChange={(e)=> handleChange(e)}
   value = {address}
   type="text" 
   name="address" 
   className="form_control1" 
   placeholder="Address " 
   id="address" />

   <div className="text-danger"></div>
 </div>    
          <br/>    
 <div className="form_row">
   
   <textarea 
   
   onChange={(e)=> handleChange(e)}
   value = {businessAddress}
   type="text" 
   name="businessAddress" 
   className="form_control1" 
   placeholder="Business Address " 
   id="businessAddress" />

   <div className="text-danger"></div>
   </div>         
 
   <br/>  
   <button className="btn_submit"> Submit</button>
   
     </form>
    </DialogContent></Dialog>
    </div>
  )
}
