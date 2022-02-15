import {
  Container,
  Grid,
  Typography,
} from '@mui/material';
// import {experimentalStyled as styled} from '@mui/material/styles';
import React from 'react';
import {useEffect} from 'react';
import {useState} from 'react';
import fetch from 'isomorphic-fetch';
import {PostItem} from '.';
import {PropTypes} from 'prop-types';


// const Item = styled(Paper)(({theme}) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(2),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));


const PostItems = ({attribute, query}) => {
  // const limit = 10;
  const BASE_API_URL = `https://k7f6wauxuc.execute-api.us-east-2.amazonaws.com/posts/metadata?${attribute}=${query}&limit=10`;
  const [postMetadata, setPostMetadata] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(async () =>{
    const fetchMeta = async () => {
      // const data_collection = [];
      // const queryUrl = BASE_API_URL
      //     .replace('%attribute%', attribute)
      //     .replace('%postType%', query)
      //     .replace('%limit%', limit);
      const res = await fetch(BASE_API_URL)
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
      <br />
      <Container maxWidth="md" style={{whiteSpace: 'nowrap'}}>
        <Grid container spacing={{xs: 2, md: 2}} columns={{xs: 9}}>
          {postMetadata.map((v, i) => (
            <Grid item xs={8} key={i}>
              <PostItem post={v} width={1024} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

PostItems.propTypes = {
  attribute: PropTypes.string.isRequired,
  query: PropTypes.string.isRequired,
};

export {PostItems};

