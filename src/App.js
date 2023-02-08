import React, { useState } from 'react';
import Container from '@mui/material/Container';

import Header from './Header';
import Content from './Content';
import { onMessage } from './service/mockServer';
import Toast from './Toast';

function App() {
  const [tempFormData, setTempFormData] = useState([]);

  function submitForm(form){
    //store data temporarily in state
    setTempFormData([...tempFormData, form]);
    // delete form after 6 seconds
    setTimeout(() => {
      setTempFormData(tempFormData.slice(1));
    }, 6000);
  }
  
  onMessage(submitForm);

  //map over data, creating a new Toast for each form submitted
  return (
    <>
      <Header />
      <Container>
        <Content />
        {tempFormData.map((form) => <Toast key={form.id} form={form} />)}
      </Container>
    </>
  );
}

export default App;
