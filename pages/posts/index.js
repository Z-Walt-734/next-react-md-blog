import React from 'react';
import {Header, PostCards} from '../../components';
import {Container, CssBaseline, ThemeProvider, Typography} from '@mui/material';
import {theme} from '../../components';


/**
 * Renders components into About page
 * @return {any}the About page
 */
function PostsPage() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Header />
        <Container>
          <Typography variant='h4' >
              Posts by Type
          </Typography>
        </Container>
        <PostCards query={['snippet', 'article']} attribute={'postType'}/>
      </ThemeProvider>
    </>
  );
};

export default PostsPage;

