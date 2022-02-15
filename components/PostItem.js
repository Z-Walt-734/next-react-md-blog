const {
  Typography,
  Card,
  CardMedia,
  CardContent,
  // Button,
  Box,
  Button,
} = require('@mui/material');
import React from 'react';
import {renderMarkdown} from './renderMarkdown';
import {toTitleCase} from '.';
import styles from './PostItem.module.css';
import {PropTypes} from 'prop-types';


const PostItem =({post, width}) => {
  return (
    <Box
      className={styles.postItem}
      style={{width: width, height: '350px'}}
    >
      <Card raised={true} style={{minWidth: width}}>
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
          <Button variant="contained" href={`/post/${post.creationStamp}`}>
            <Typography>Read More</Typography>
          </Button>
        </CardContent>
      </Card>
    </Box>

  );
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  width: PropTypes.number.isRequired,
};

export {PostItem};
