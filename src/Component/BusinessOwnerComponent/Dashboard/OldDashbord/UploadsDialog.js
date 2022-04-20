import  React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { PostProduct } from '../../Reg&Sign/Api/Index';
import ImageUploader from '../ImageUpload';

 function UploadsDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  const [data, setData]= useState(
    {
      businessName:"",
      nameLogo:"",
      watchword1:"",
      watchword2:"",
      watchword3:"",
      aboutUsContent1:"",
      aboutUsContent2:"",
      aboutUsContent3:"",
      facebook:"",
      twitter:"",
      businessEmail:"",
      instagram:"",
      phone:""

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

  const {nameLogo,watchword1,watchword2,businessEmail,watchword3,aboutUsContent1,aboutUsContent2,aboutUsContent3, facebook,twitter,instagram,whatsapp,businessName,phone , address} = data;


  return (
    <div className='sub_2 up  ' > 
      <a onClick={handleClickOpen}>
        New Post
      </a>
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogContent >
        <form className="log_form_ui_form" onSubmit={(e)=> submit(e)}>
        <div className='upload_dialog'>
          <div className='sub_upload '>
            {/* nav bar */}
       
            <div className=' form_row'>                         
                  <div className="form_group">
                    
                    <input 
                    
                    onChange={(e)=> handleChange(e)}
                    value = {businessName}
                    type="text" 
                    name="businessName " 
                    className="form_control" 
                    placeholder="Business Name " 
                    id="businessName" />

                    <div className="text-danger"></div>
                  </div>              
                                          
                    <div className="form_group">Name Logo
                    <ImageUploader/>
                    </div>              
             </div>   
                  
            {/* Banner */}
            <div>
            <div className='sub_upload_content'>
            <div className="form_group" >   Business Banner  :
            <input type="file" id="file-input" 
                      placeholder="Name Logo"  name="ImageStyle"/>
              <img src=''className='upload_banner'/>
              </div> </div>
            <div className=' form_row'>                         
                  <div className="form_group">
                    <input 
                    
                    onChange={(e)=> handleChange(e)}
                    value = {watchword1}
                    type="text" 
                    name="watchword1 " 
                    className="form_control" 
                    placeholder="Watch Word One*" 
                    id="watchword1" />

                    <div className="text-danger"></div>
                  </div>              
                                          
                    <div className="form_group">
                      
                      <input 
                      
                      onChange={(e)=> handleChange(e)}
                      value = {watchword2}
                      type="text" 
                      name="watchword2" 
                      className="form_control" 
                      placeholder="Watch Word Two*" 
                      id="watchword2" />

                      <div className="text-danger"></div>
                    </div>              
             </div>   
             <div className=' form_row'>                         
                  <div className="form_group">
                    
                    <input 
                    
                    onChange={(e)=> handleChange(e)}
                    value = {watchword3}
                    type="text" 
                    name="watchword3 " 
                    className="form_control" 
                    placeholder="Watch Word Three" 
                    id="watchword3" />

                    <div className="text-danger"></div>
                  </div>              
                                          
                    <div className="form_group">
                      
                      <input 
                      onChange={(e)=> handleChange(e)}
                      value = {phone}
                      type="text" 
                      name="phone" 
                      className="form_control" 
                      placeholder="Contact Number*" 
                      id="phone" />

                      <div className="text-danger"></div>
                    </div>              
             </div>   
             <div className="form_group">
                    
                    <textarea 
                    onChange={(e)=> handleChange(e)}
                    value = {aboutUsContent1}
                    type="text" 
                    name="aboutUsContent1 " 
                    className="form_control" 
                    placeholder="About Your Business1*" 
                    id="aboutUsContent1" />

                    <div className="text-danger"></div>
                  </div>    

                  <div className="form_group">
                    
                    <textarea 
                    
                    onChange={(e)=> handleChange(e)}
                    value = {aboutUsContent2}
                    type="text" 
                    name="aboutUsContent2 " 
                    className="form_control" 
                    placeholder="About Your Business2*" 
                    id="aboutUsContent2" />

                    <div className="text-danger"></div>
                  </div>      
                                          
                  <div className="form_group">
                      
                      <textarea 
                      
                      onChange={(e)=> handleChange(e)}
                      value = {aboutUsContent3}
                      type="text" 
                      name="aboutUsContent3" 
                      className="form_control" 
                      placeholder="About Your Business" 
                      id="aboutUsContent3" />

                      <div className="text-danger"></div>
                    </div>     
         
            </div>
            {/* ABout US */}
            <div className='sub_upload_content about'>
              <div  className='sub_upload_aboutus_img'> 


              <div className='aboutus_img_half'> <div className="form_group">about img
                    <input type="file" id="file-input" 
                      placeholder="Name Logo"  name="ImageStyle"/>
                   
                      <div className="text-danger"></div>
                    </div> 
             <div className='upload_aboutus_img'>
               
                <img src=''className='aboutus_img one'/>
              </div>
              </div>


               <div className='aboutus_img_half'>  <div className="form_group">about img
                    <input type="file" id="file-input" 
                      placeholder="Name Logo"  name="ImageStyle"/>
                   
                      <div className="text-danger"></div>
                    </div>  
              <div className='upload_aboutus_img'>
             
                <img src=''className='aboutus_img two'/>
              </div>
              </div> 

              </div> 
              </div>


            {/* Service */}
            <div className='sub_upload_content'>
              <div className='sociaL_HEAD'>
              Upload Images of your products
              </div>
              <div className='service_upload_img'>
                 <div className='Service_img '>
                      <img src=''className=' one'/>
                      <input type="file" id="file-input" 
                      placeholder="Name Logo"  name="ImageStyle"/>
                 </div> 

                <div className='upload_Service_img'>
                  <img src=''className='Service_img one'/>
                </div> 
                <div className='upload_Service_img'>
                  <img src=''className='Service_img one'/>
                </div>
                <div className='upload_Service_img'>
                  <img src=''className='Service_img one'/>
                </div>

              </div>

            </div>
            
            {/* Contact */}
            <div className='sub_upload_content'>
               <div className=' form_row'>                         
                  <div className="form_group">
                    
                    <input 
                    
                    onChange={(e)=> handleChange(e)}
                    value = {twitter}
                    type="text" 
                    name="twitter" 
                    className="form_control" 
                    placeholder="Twitter url" 
                    id="twitter" />

                    <div className="text-danger"></div>
                  </div>              
                                          
                    <div className="form_group">
                      
                      <input 
                      
                      onChange={(e)=> handleChange(e)}
                      value = {instagram}
                      type="text" 
                      name="instagram" 
                      className="form_control" 
                      placeholder="instagram " 
                      id="instagram" />

                      <div className="text-danger"></div>
                    </div>              
             </div>   
                         
            <div className=' form_row'>                         
                  <div className="form_group">
                    
                    <input 
                    
                    onChange={(e)=> handleChange(e)}
                    value = {facebook}
                    type="text" 
                    name="facebook" 
                    className="form_control" 
                    placeholder="Facebook url" 
                    id="facebook" />

                    <div className="text-danger"></div>
                  </div>              
                                          
                    <div className="form_group">
                      
                      <input 
                      
                      onChange={(e)=> handleChange(e)}
                      value = {businessEmail}
                      type="text" 
                      name="businessEmail" 
                      className="form_control" 
                      placeholder="Business Email " 
                      id="businessEmail" />

                      <div className="text-danger"></div>
                    </div>              
             </div>   
            
             </div>
          
          </div>
        <br/>  
   <button className="btn_submit"> Submit</button>
        </div>
    </form>
        </DialogContent>
      
      </Dialog>
    </div>

  );
}
export default UploadsDialog;