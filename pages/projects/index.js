import React from 'react';
import {Header, PostCards} from '../../components';
import {Container, CssBaseline, ThemeProvider, Typography} from '@mui/material';
import {theme} from '../../components';


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
        <Container>
          <Typography variant='h4' >
              Posts by Subject
          </Typography>
        </Container>
        <PostCards query={['leetcode', 'webdesign']} attribute={'subject'}/>
      </ThemeProvider>
    </>
  );
};

export default AboutPage;

