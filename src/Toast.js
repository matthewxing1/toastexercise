import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Snackbar from '@mui/material/Snackbar';
import Typography from '@mui/material/Typography';

export default function Toast({email, firstName, lastName}) {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{flexGrow: 1}}>
      <Snackbar
        open={open}
        message={<div>
            <Typography>{`${firstName} ${lastName}`}</Typography>
            <Typography>{email}</Typography>
          </div>}
        autoHideDuration={6000}
        onClose={handleClose}
      />
    </Box>
  );
}