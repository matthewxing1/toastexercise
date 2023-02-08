import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Header from './Header';
import Content from './Content';
import { onMessage } from './service/mockServer';
import Toast from './Toast';

function App() {
  const [formData, setFormData] = useState([]);
  const [allForms, setAllForms] = useState([]);

  function submitForm(form){
    //store data temporarily in state
    setFormData([form]);
  }
  
  onMessage(submitForm);

  //map over data, creating a new Toast for each form submitted
  return (
    <>
      <Header />
      <Container>
        <Content allForms={allForms} setAllForms={setAllForms}/>
        {formData.map((form) => <Toast key={form.id} form={form} setAllForms={setAllForms}/>)}
      </Container>
    </>
  );
}

export default App;
