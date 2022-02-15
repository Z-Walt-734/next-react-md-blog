import {Container, Grid, Typography} from '@mui/material';
// import {experimentalStyled as styled} from '@mui/material/styles';
import React from 'react';
import {useEffect} from 'react';
import {useState} from 'react';
import {PostCard} from './PostCard';
import fetch from 'isomorphic-fetch';
import {toTitleCase} from '.';


// import './styles/custom.scss';

// import './index.css';

// import { store } from './helpers';

const BASE_API_URL = 'https://k7f6wauxuc.execute-api.us-east-2.amazonaws.com/posts/metadata?subject=%subj%&limit=1';
const subjectList = ['webdesign', 'leetcode'];


// const Item = styled(Paper)(({theme}) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(2),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));


const Projects = () => {
  const [postMetadata, setPostMetadata] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(async () =>{
    const fetchMeta = async () => {
      // const data_collection = [];
      subjectList.map(async (v, i) => {
        const res = await fetch(BASE_API_URL.replace('%subj%', v))
            .then(function(response) {
              if (response.status >=400) {
                throw new Error(
                    `${response.status} Error. Bad Response from Server`,
                );
              }
              return response;
            });
        const data = await res.json();
        setPostMetadata((postMetadata) => [...postMetadata, data.body[0]]);
      });
      setLoading(false);
    };
    fetchMeta();
  }, []);

  if (isLoading) {
    return (
      <Typography variant='h5'>Loading...</Typography>
    );
  }

  return (
    <>

      <Container maxWidth="md">
        <Typography >Projects Page</Typography>
        <Grid container spacing={{xs: 1, md: 2}} columns={{xs: 9}}>
          {postMetadata.map((v, i) => (
            <Grid item xs={3} key={i}>
              <Typography variant="h4">
                The {toTitleCase(v.subject)} Project
              </Typography>
              <PostCard post={v} size={256}/>
            </Grid>
          ))}
        </Grid>

      </Container>
    </>
  );
};

export {Projects};
