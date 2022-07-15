import React, { useState, useEffect } from 'react';
import { Container } from '@mui/material';
import Searcher from './components/searcher';
import { getUser } from './services/users';

const App = () => {
  const [user, setUser] = useState("");

  const gettingUser = async(user) => {
    const response = await getUser("davidnherran")
    console.log(response)
  }

  useEffect(() => {
    gettingUser()
  }, []);

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
