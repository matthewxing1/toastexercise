import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Header from './Header';
import Content from './Content';
import { onMessage, fetchLikedFormSubmissions } from './service/mockServer';
import Toast from './Toast';

function App() {
  const [formData, setFormData] = useState([]);
  const [allForms, setAllForms] = useState([]);

  function submitForm(form){
    //store data temporarily in state
    setFormData([form]);
  }

  //fetch forms and set to allForms
  const fetchForms = async () => {
    try{
      const data = await fetchLikedFormSubmissions();
      setAllForms(data.formSubmissions);
    }
    catch(err){
      // setToastErr([err]);
    }
  }

  useEffect(() => {
    onMessage(submitForm);
    fetchForms();
  }, [])
  

  //map over data, creating a new Toast for each form submitted
  return (
    <>
      <Header fetchForms={fetchForms}/>
      <Container>
        <Content allForms={allForms}/>
        {formData.map((form) => <Toast key={form.id} form={form} setAllForms={setAllForms}/>)}
      </Container>
    </>
  );
}

export default App;
