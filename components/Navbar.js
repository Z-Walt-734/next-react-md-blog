import React from 'react';
import {
  Button,
  Typography,
  AppBar,
  useScrollTrigger,
  Divider,
  styled,
  Stack,
  CssBaseline,
  Toolbar,
} from '@mui/material';
import PropTypes from 'prop-types';
import { SearchIcon, HomeIcon, GitHub } from '@mui/icons-material';
// import reactDom from 'react-dom';

import { theme } from './_theme';
import { ThemeProvider } from '@mui/material';


const Navbar = (props) => {
  return (
    <>
      {/* <ThemeProvider theme = {theme}> */}
      <AppBar position='sticky' sx={{ zIndex: 1500 }}>
        <Stack
          spacing={1}
          direction='row'
          justifyContent='end'
          padding={2}
          divider={<Divider orientation='vertical' flexItem />}
        >
          <Button variant="contained" href="/">
            <Typography >Home</Typography>
          </Button>

          <Button variant="contained" href="/about">
            <Typography>About</Typography>
          </Button>

          <Button variant="contained" href="/post">
            <Typography>Blogpost</Typography>
          </Button>

          <Button variant="contained" href="/projects">
            <Typography>Projects</Typography>
          </Button>
          <Button variant="contained" href="https://github.com/Z-Walt-734" >
            <GitHub color='default' fontSize='medium' />
          </Button>


        </Stack>
      </AppBar>
      {/* </ThemeProvider> */}
    </>
  );
};

export { Navbar };
