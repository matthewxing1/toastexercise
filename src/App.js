import React, { useState } from 'react';
import Container from '@mui/material/Container';

import Header from './Header';
import Content from './Content';
import { onMessage } from './service/mockServer';

function App() {
  const [tempFormData, setTempFormData] = useState({});

  function submitForm(form){
    const storedTempData = tempFormData;
    storedTempData[form.id] = form.data;
    setTempFormData(storedTempData);
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
