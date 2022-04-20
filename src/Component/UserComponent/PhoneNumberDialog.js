import  React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

 function PhoneNumberDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <a>
  
      <img      onClick={handleClickOpen}
                src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLXQ_Vr3PuQsuMv_XM2UW_0a1nuJyGxOvkcw&usqp=CAU"
                width="34"
                height="34"
                border="0"
                alt=""
                className="social_logo"
              />
      
      <Dialog
        open={open}
        onClose={handleClose}
      >
      
        <DialogContent >
        <div className='select_container'>
          {/* Phone number */}
        <a ><b>09076543456</b></a>
      
        </div>

        </DialogContent>
      
      </Dialog>
    </a>
  );
}
export default PhoneNumberDialog;