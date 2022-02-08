const { Typography, Card, CardMedia, CardContent } = require('@mui/material');
import React from 'react';
import RenderMarkdown from './renderMarkdown';

const PostCard = ({post}) => {
  return (
    <>
    <Card raised={true} style={{ minWidth: 1024 }}>
                  <CardMedia
                    component='img'
                    height='200'
                    image={post.banner}
                    alt={post.title}
                    style={{ maxHeight: 550 }}

                  />
                  <CardContent sx={{ bgcolor: 'primary.dark' }}>
                    <Typography variant='h5'>
                      {post.title}
                    </Typography>
                    <Typography variant='subtitle1'>
                    <div dangerouslySetInnerHTML={{ __html: RenderMarkdown(post.excerpt)}}></div>
                    </Typography>
                  </CardContent>
                </Card>
    </>
  );
};

export {PostCard};
