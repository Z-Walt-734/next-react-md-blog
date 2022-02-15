import React, {useEffect, useState} from 'react';
import {Container, CssBaseline, ThemeProvider} from '@mui/material';
import {Header, theme, toTitleCase} from '../../components';
import {renderMarkdown} from '../../components';
import fetch from 'isomorphic-fetch';

// https://k7f6wauxuc.execute-api.us-east-2.amazonaws.com

// const POST_API = 'https://k7f6wauxuc.execute-api.us-east-2.amazonaws.com/article/%creationStamp%';

/**
 * Renders post html from JSON delivered MD
 * @return {any}the post
 */
function Post() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [article, setArticle] = useState('Loading....');

  useEffect(() =>{
    const creationStamp = window.location.pathname;
    const fetchArticle = async () => {
      const res = await fetch(`https://k7f6wauxuc.execute-api.us-east-2.amazonaws.com/${creationStamp}`)
          .then(function(response) {
            if (response.status >=400) {
              throw new Error(
                  `${response.status} Error. Bad Response from Server`,
              );
            }
            return response;
          });
      const data = await res.json();
      setData(data);
      setIsLoading(false);
    };
    // if (creationStamp){
    //   fetchArticle();
    // }
    fetchArticle();
  }, []);

  useEffect(() =>{
    if (!isLoading) {
      setArticle(renderMarkdown(data.body.content));
    }
  });
  return (
    <>

      <ThemeProvider theme={theme}>
        {/* <Paper style={{background: 'green'}}>  */}
        <CssBaseline />
        <Header />

        <Container maxWidth="md">
          <h1>{isLoading ? 'Loading....' : toTitleCase(data.body.title)}</h1>
          <br/>

          {/* This should be safe since cleaned.... */}
          <div dangerouslySetInnerHTML={{__html: article}} />

        </Container>
      </ThemeProvider>

    </>
  );
}

export default Post;
