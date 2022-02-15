import React from 'react';
import {Header, PostItems, toTitleCase} from '../../components';
import {Container, CssBaseline, ThemeProvider, Typography} from '@mui/material';
import {theme} from '../../components';
import {useRouter} from 'next/router';


/**
 * Renders components into About page
 * @return {any}the About page
 */
function subject() {
//   const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const {subject} = router.query;

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
          {subject ?
          <Typography variant='h4' >
            {toTitleCase(subject)}
          </Typography> : 'Loading....'}
        </Container>


        <Container direction='column' style={{minWidth: 375}} >
          {subject ?
          <PostItems attribute={'subject'} query={subject} /> :
          'Loading....'}
        </Container>

        {/* <PostList query={[postType]}  attribute={'postType'}/> */}


      </ThemeProvider>
    </>
  );
};

export default subject;

