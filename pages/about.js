import React from 'react';
import {Header} from '../components';
import {About} from '../components';
import { CssBaseline, Paper, ThemeProvider } from '@mui/material';
import { Box, createTheme } from '@mui/system';
import { Home } from '../components';
import { theme } from '../components';
import { deepmerge } from '@mui/utils';
import { BackDrop } from './styles/HomePage.module.scss';



/**
 * Renders components into About page
 * @return {any}the About page
 */
function AboutPage() {
  return (
    <>

<ThemeProvider theme={theme}>
{/* <Paper style={{background: 'green'}}>  */}
          <CssBaseline />
          <Header />
          <About />
          {/* </Paper> */}
        </ThemeProvider>
        
    </>
  );
};

export default AboutPage;

