import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ToastErr from './ToastErr';
import FormsTable from './FormsTable';
import { fetchLikedFormSubmissions } from './service/mockServer';

export default function Content({allForms, setAllForms}) {
  const [toastErr, setToastErr] = useState([]);

  //fetch forms from database
  const fetchForms = async () => {
    try{
      const data = await fetchLikedFormSubmissions();
      setAllForms(data.formSubmissions);
    }
    catch(err){
      setToastErr([err]);
    }
  }

  //invoke fetchForms
  useEffect(() => {
    fetchForms();
  })
  
  return (
    <Box sx={{marginTop: 3}}>
      <Typography variant="h4">Liked Form Submissions</Typography>
      {toastErr.map((err, key) => <ToastErr key={key} error={err}/>)}
      <FormsTable data={allForms}/>
    </Box>
  );
}
