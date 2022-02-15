import React from 'react';
import {
  Button,
  Typography,
  AppBar,
  Divider,
  Stack,
} from '@mui/material';
import {GitHub} from '@mui/icons-material';


const Navbar = (props) => {
  return (
    <>
      {/* <ThemeProvider theme = {theme}> */}
      <AppBar position='sticky' sx={{zIndex: 1500}}>
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

          <Button variant="contained" href="/posts">
            <Typography>Posts by Type</Typography>
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

export {Navbar};
