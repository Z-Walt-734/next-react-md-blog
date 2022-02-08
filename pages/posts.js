import React, { useEffect, useState } from "react";

import { Container, CssBaseline, Paper, ThemeProvider, Typography } from '@mui/material';
import { Header, theme } from "../components";
import DOMPurify from "dompurify";
import { marked } from "marked";
import hljs from "highlight.js/lib/common";
import RenderMarkdown from "../components/renderMarkdown";

// npm i next-mdx-remote
const TEST_URL = 'https://a2l3x27rvb.execute-api.us-east-2.amazonaws.com/article/202202/2201034800';

function Post() {
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [article, setArticle] = useState('Loading....')

    useEffect(() =>{
        const fetchArticle = async () => {
          const res = await fetch(TEST_URL)
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
        fetchArticle();
      }, []);

      useEffect(() =>{
        if (!isLoading){
          setArticle(RenderMarkdown(data.body.content))
        }
      });
    return(
        <>
        
        <ThemeProvider theme={theme}>
        {/* <Paper style={{background: 'green'}}>  */}
            <CssBaseline />
            <Header />
            
            <Container maxWidth="md">
                <h1>{isLoading ? "Loading...." : data.body.title}</h1>
                <br/>

                {/* This should be safe since cleaned.... */}
                <div dangerouslySetInnerHTML={{ __html: article }} />

            </Container>
        </ThemeProvider>
        
        </>
    );
}

export default Post;
