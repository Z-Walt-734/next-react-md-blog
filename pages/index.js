import { CssBaseline, ThemeProvider } from '@mui/material';
import { Box, createTheme } from '@mui/system';
import React from 'react';
import { Header } from '../components';
import { Home } from '../components';
import { theme } from '../components';
import { deepmerge } from '@mui/utils';
import { BackDrop } from './styles/HomePage.module.scss';
// import './index.css';

// import { store } from './helpers';


/**
 * Renders components into Home page
 * @return {any} Home page
 */
function HomePage({ pics }) {
  // console.log(pics);


  return (
    <>
      <div style={{ backgroundColor: '#000000' }} sx={{ zIndex: 2 }}>
        {/* <div id={BackDrop} sx={{ zIndex: 1 }}> */}

        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Header />
          <Home />
        </ThemeProvider>
      </div >
      {/* </div> */}
    </>
  );
}

export default HomePage;

