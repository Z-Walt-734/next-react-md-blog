import React from 'react';
import {Header, PostItems, toTitleCase} from '../../components';
import {Container, CssBaseline, ThemeProvider, Typography} from '@mui/material';
import {theme} from '../../components';
import {useRouter} from 'next/router';


/**
 * Renders components into About page
 * @return {any}the About page
 */
function type() {
//   const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const {postType} = router.query;

  //   useEffect( () => {
  //     if (postType) {
  //       setIsLoading(true);
  //     }
  //   });

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Header />

        <Container direction='column' style={{minWidth: 375}} >
          {postType ?
          <Typography variant='h4' >
            {toTitleCase(postType)}s
          </Typography> : 'Loading....'}
        </Container>


        <Container direction='column' style={{minWidth: 375}} >
          {postType ?
          <PostItems attribute={'postType'} query={postType} /> :
          'Loading....'}
        </Container>

        {/* <PostList query={[postType]}  attribute={'postType'}/> */}


      </ThemeProvider>
    </>
  );
};

export default type;

