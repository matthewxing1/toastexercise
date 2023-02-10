import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import FormsTable from './FormsTable';

export default function Content({allForms}) {
  return (
    <Box sx={{marginTop: 3}}>
      <Typography variant="h4">Liked Form Submissions</Typography>
      <FormsTable data={allForms}/>
    </Box>
  );
}
