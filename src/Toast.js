import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Snackbar from '@mui/material/Snackbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import ToastErr from './ToastErr';
import { saveLikedFormSubmission, fetchLikedFormSubmissions } from './service/mockServer';

export default function Toast({form}) {
  const [open, setOpen] = useState(true);
  const [toastErr, setToastErr] = useState([]);

  //close sidebar upon hitting X
  const handleClose = () => {
    setOpen(false);
  };

  //submit form upon hitting "like" button
  const handleLike = async () => {
    try{
      //close toast to prevent saving the same form multiple times
      handleClose();
      //save form to database
      await saveLikedFormSubmission(form);
    }
    catch(err){
      console.log('oh no an error')
      console.log(err)
      //create a toast upon error
      setToastErr([err])
    }
  }

  const action = (
    <>
      <Button color="primary" size="small" onClick={handleLike}>
        LIKE
      </Button>
      <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
    
  )

  return (
    <Box sx={{flexGrow: 1}}>
      <Snackbar open={open} 
          message={
          <div>
            <Typography>{`${form.data.firstName} ${form.data.lastName}`}</Typography>
            <Typography>{form.data.email}</Typography>
          </div>}
        autoHideDuration={6000}
        onClose={handleClose}
        action={action}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      />
      {toastErr.map((error) => <ToastErr error={error}/>)}
    </Box>
  );
}