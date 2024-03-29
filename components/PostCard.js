const {
  Typography,
  Card,
  CardMedia,
  CardContent,
  // Button,
  Box} = require('@mui/material');
import React from 'react';
import {renderMarkdown} from './renderMarkdown';
import {toTitleCase} from '.';
import {PropTypes} from 'prop-types';


const PostCard =({post, size}) => {
  return (
    <>
      <Card raised={true} style={{minWidth: size}}>
        <CardMedia
          component='img'
          height='200'
          image={post.banner}
          alt={post.title}
          style={{maxHeight: 550}}

        />
        <CardContent sx={{bgcolor: 'primary.dark'}}>
          <Typography variant='h5'>
            {toTitleCase(post.title)}
          </Typography>
          <Box>
            <Typography variant='h7'>
              {toTitleCase(post.subject)} - {toTitleCase(post.postType)}
            </Typography>
          </Box>
          <Typography variant='subtitle1'>
            <div dangerouslySetInnerHTML={
              {__html: renderMarkdown(post.excerpt)}
            }></div>
          </Typography>
          {/* <Button variant="contained" href={`/post/${post.creationStamp}`}>
                      <Typography>Read More</Typography>
                    </Button> */}
        </CardContent>
      </Card>
    </>
  );
};

PostCard.propTypes = {
  post: PropTypes.object.isRequired,
  size: PropTypes.number.isRequired,
};


export {PostCard};
