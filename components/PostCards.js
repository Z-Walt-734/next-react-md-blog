import {
  Container,
  Grid,
  Typography,
  CardActionArea,
} from '@mui/material';
// import {experimentalStyled as styled} from '@mui/material/styles';
import React from 'react';
import {useEffect} from 'react';
import {useState} from 'react';
import {PostCard} from './PostCard';
import fetch from 'isomorphic-fetch';
import {toTitleCase} from '.';
import {PropTypes} from 'prop-types';


// const Item = styled(Paper)(({theme}) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(2),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));


const PostCards = ({query, attribute}) => {
  let limit = 10;
  if (query.length > 1) {
    limit = 1;
  }
  const BASE_API_URL = `https://k7f6wauxuc.execute-api.us-east-2.amazonaws.com/posts/metadata?%attribute%=%postType%&limit=%limit%`;

  const [postMetadata, setPostMetadata] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(async () =>{
    const fetchMeta = async () => {
      // const data_collection = [];
      query.map(async (v, i) => {
        const queryUrl = BASE_API_URL
            .replace('%attribute%', attribute)
            .replace('%postType%', v)
            .replace('%limit%', limit);
        const res = await fetch(queryUrl)
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
        <br />
        <Grid container spacing={{xs: 1, md: 2}} columns={{xs: 9}}>
          {postMetadata.map((v, i) => (
            <Grid item xs={3} key={i}>
              {attribute == 'postType' ?
              <Typography variant="h4">{toTitleCase(v.postType)}s</Typography> :
              <Typography variant="h4">{toTitleCase(v.subject)}</Typography>
              }
              {/* eslint-disable-next-line max-len */}
              {/* This should take you to 'postType' from posts or to 'subject' from projects */}
              {/* <CardActionArea href={'posts/' + v.postType}>
                <PostCard post={v} size={256} to={'posts/' + v.postType} />
              </CardActionArea> */}
              {attribute == 'postType' ?
              <CardActionArea href={'posts/' + v.postType}>
                <PostCard post={v} size={256} to={'posts/' + v.postType} />
              </CardActionArea> :
              <CardActionArea href={'projects/' + v.subject}>
                <PostCard post={v} size={256} to={'projects/' + v.subject} />
              </CardActionArea>

              }


            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

PostCards.propTypes = {
  query: PropTypes.array.isRequired,
  attribute: PropTypes.string.isRequired,
};


export {PostCards};
