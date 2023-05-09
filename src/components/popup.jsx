import { useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledDialog = styled(Dialog)({
  '& .MuiDialog-paper': {
    backgroundColor: '#F6F7F9',
    boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    minWidth: '300px',
    maxWidth: '500px',
    width: '80%',
    margin: 'auto',
  },
  '& .MuiDialogTitle-root': {
    paddingTop: '30px',
    paddingBottom: '20px',
  },
  '& .MuiDialogContent-root': {
    paddingTop: '0px',
    paddingBottom: '30px',
  },
  '& .MuiDialogContentText-root': {
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 'normal',
    fontSize: '14px',
    lineHeight: '24px',
    color: '#666666',
  },
  '& .MuiDialogActions-root': {
    padding: '0px',
  },
  '& .MuiButton-root': {
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 'bold',
    fontSize: '14px',
    lineHeight: '16px',
    textTransform: 'none',
  },
});

function PopupExample() {
  const [open, setOpen] = useState(false);
//   const [bodyOverflow, setBodyOverflow] = useState('');

  const handleOpen = () =>{
    // document.body.style.overflow = 'hidden';
    setOpen(true);

  }
  const handleClose = () =>{
    // document.body.style.overflow = bodyOverflow;
    setOpen(false);
  } 

  return (
    <div className='popup' style={{marginTop:'300px'}}>
      <Button onClick={handleOpen}>Unable to login</Button>
      <StyledDialog  open={open} onClose={handleClose}>
        <DialogTitle>Unable to Login</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Your username or password is incorrect. Please try again.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            OK
          </Button>
        </DialogActions>
      </StyledDialog>
    </div>
  );
}
export default PopupExample