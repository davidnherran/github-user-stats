import React from 'react';
import { Container } from '@mui/material';
import Searcher from './components/searcher';

const App = () => {
  return (
    <Container
      sx={{
        background: 'whitesmoke',
        width: '80vw',
        height: '500px',
        borderRadius: '16px',
        marginTop: '40px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Searcher />
    </Container>
  );
};

export default App;
