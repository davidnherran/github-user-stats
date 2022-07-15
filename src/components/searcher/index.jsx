import React from 'react';
import { IconButton, InputAdornment, Stack, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Searcher = () => {
  return (
    <Stack direction="row" sx={{ marginTop: '30px', width: '80%' }}>
      <TextField
        id="outline-basic"
        label="GitHub User"
        placeholder="@octocat"
        variant="outlined"
        sx={{
          width: '90%',
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <IconButton size="small">
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      ></TextField>
    </Stack>
  );
};

export default Searcher;
