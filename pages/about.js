import React from 'react';
import {Header} from '../components';
import {About} from '../components';
import {CssBaseline, ThemeProvider} from '@mui/material';
import {theme} from '../components';


/**
 * Renders components into About page
 * @return {any}the About page
 */
function AboutPage() {
  return (
    <>

      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <About />
      </ThemeProvider>

    </>
  );
};

export default AboutPage;

