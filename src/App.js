import React, { useState } from 'react';
import Container from '@mui/material/Container';

import Header from './Header';
import Content from './Content';
import { onMessage } from './service/mockServer';

function App() {
  const [tempFormData, setTempFormData] = useState({});

  function submitForm(form){
    //store data temporarily in state
    const storedTempData = tempFormData;
    storedTempData[form.id] = form.data;
    setTempFormData(storedTempData);
    //delete form after 6 seconds
    setTimeout(() => {
      delete storedTempData[form.id];
      setTempFormData(storedTempData);
    }, 6000);
  }

  onMessage(submitForm);
  return (
    <>
      <Header />
      <Container>
        <Content />
      </Container>
    </>
  );
}

export default App;
