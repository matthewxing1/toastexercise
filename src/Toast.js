import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Snackbar from '@mui/material/Snackbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

export default function Toast({form}) {
  const [open, setOpen] = useState(true);

  //close sidebar upon hitting X
  const handleClose = () => {
    setOpen(false);
  };

  //submit form upon hitting "like" button
  const handleLike = () => {

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
            <Typography>{`${form.data.firstName} ${form.datalastName}`}</Typography>
            <Typography>{form.data.email}</Typography>
          </div>}
        autoHideDuration={6000}
        onClose={handleClose}
        action={action}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      />
    </Box>
  );
}