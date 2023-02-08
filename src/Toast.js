import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Snackbar from '@mui/material/Snackbar';

export default function Toast({email}) {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

    return (
      <Box sx={{flexGrow: 1}}>
        <Snackbar
          open={open}
          message={email}
          autoHideDuration={1000}
          onClose={handleClose}
        />
      </Box>
    );
  }