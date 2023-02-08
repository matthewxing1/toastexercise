import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

export default function ToastErr({error}) {
  const [open, setOpen] = useState(true);

  //close sidebar upon hitting X
  const handleClose = () => {
    setOpen(false);
  };

  const action = (
    <>
      <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
    
  )

  return (
    <Box sx={{flexGrow: 1}}>
      <Snackbar open={open} 
        message={`ERROR ${error.status}: ${error.message}`}
        autoHideDuration={6000}
        onClose={handleClose}
        action={action}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      />
    </Box>
  );
}