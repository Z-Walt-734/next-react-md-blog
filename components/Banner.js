import React, { useState, useEffect, Children, cloneElement } from 'react';
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Slide,
  Typography,
  Box,
} from '@mui/material';
import { ArrowForwardIosIcon, ArrowBackIosIcon } from '@mui/icons-material';
import fetch from 'isomorphic-fetch';
import styles from './Banner.module.css';
import RenderMarkdown from './renderMarkdown';
import {PostCard} from './PostCard';
// https://api.unsplash.com/photos/?client_id=W7Ea5pCxcUY7tTMwjmbpgORbbv7B_siM1ugKwUnN63M
// 0:
// alt_description: "white notebook"
// blur_hash: "LJRUt6cB#ZR9~CXSInxBD5rExvbc"
// categories: []
// color: "#f3c0d9"
// created_at: "2018-09-07T10:15:09-04:00"
// current_user_collections: []
// description: "White page with color chart for your ideas!"
// height: 2848
// id: "lFmuWU0tv4M"
// liked_by_user: false
// likes: 2550
// links: {self: 'https://api.unsplash.com/photos/lFmuWU0tv4M', html: 'https://unsplash.com/photos/lFmuWU0tv4M', download: 'https://unsplash.com/photos/lFmuWU0tv4M/download?i…nwyOTYyMzZ8MXwxfGFsbHwxfHx8fHx8Mnx8MTY0MzYwODk2Mg', download_location: 'https://api.unsplash.com/photos/lFmuWU0tv4M/downlo…nwyOTYyMzZ8MXwxfGFsbHwxfHx8fHx8Mnx8MTY0MzYwODk2Mg'}
// promoted_at: "2018-09-08T05:11:50-04:00"
// sponsorship: {impression_urls: Array(3), tagline: 'Try our Creative Assistant for free', tagline_url: 'https://ad.doubleclick.net/ddm/trackclk/N1224323.3…did=;tag_for_child_directed_treatment=;tfua=;ltd=', sponsor: {…}}
// topic_submissions: {business-work: {…}, arts-culture: {…}}
// updated_at: "2022-01-30T11:04:14-05:00"
// urls: {raw: 'https://images.unsplash.com/photo-1536329583941-14…fGFsbHwxfHx8fHx8Mnx8MTY0MzYwODk2Mg&ixlib=rb-1.2.1', full: 'https://images.unsplash.com/photo-1536329583941-14…HwxfHx8fHx8Mnx8MTY0MzYwODk2Mg&ixlib=rb-1.2.1&q=85', regular: 'https://images.unsplash.com/photo-1536329583941-14…fHx8Mnx8MTY0MzYwODk2Mg&ixlib=rb-1.2.1&q=80&w=1080', small: 'https://images.unsplash.com/photo-1536329583941-14…8fHx8Mnx8MTY0MzYwODk2Mg&ixlib=rb-1.2.1&q=80&w=400', thumb: 'https://images.unsplash.com/photo-1536329583941-14…8fHx8Mnx8MTY0MzYwODk2Mg&ixlib=rb-1.2.1&q=80&w=200'}
// eslint-disable-next-line max-len
// user: {id: 'VCA9IfCfNMo', updated_at: '2022-01-30T16:21:46-05:00', username: 'keilahoetzel', name: 'Keila Hötzel', first_name: 'Keila', …}
// width: 2848
// [[Prototype]]: Object

const CarouselItem = ({ children, width }) => {
  return (
    <Box
      className={styles.carouselItem}
      style={{ width: width, height: '350px' }}
    >
      {children}
    </Box>
  );
};

const Carousel = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);


  // Track Currently diplayed item and loop back around
  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = (Children.count(children) - 1);
    } else if (newIndex >= Children.count(children)) {
      newIndex = 0;
    }
    setActiveIndex(newIndex);
  };

  // Auto scroll
  useEffect(() => {
    const interval = setInterval(() => {
      updateIndex(activeIndex + 1);
    }, 5000);
    return () => clearInterval(interval);
  });

  return (
    // Render Items
    <Box className={styles.carousel} >
      <Box
        className={styles.carouselInner}
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {Children.map(children, (child, i) => {
          return cloneElement(child, { width: '100%' });
        })}
      </Box>

      {/* Controls */}
      <Box className={styles.indicators}>
        <Button variant='contained' onClick={() => {
          updateIndex(activeIndex - 1);
        }}>

          <Typography variant='h5'>&lt;</Typography>

        </Button>
        <Button variant='contained' onClick={() => {
          updateIndex(activeIndex + 1);
        }}>
          <Typography variant='h5'>&gt;</Typography>
        </Button>
      </Box>
    </Box>
  );
};


const Banner = () => {
  const [postMetadata, setPostMetadata] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() =>{
    const fetchPosts = async () => {
      const res = await fetch('https://a2l3x27rvb.execute-api.us-east-2.amazonaws.com/articles/metadata/202202')
          .then(function(response) {
            if (response.status >=400) {
              throw new Error(
                  `${response.status} Error. Bad Response from Server`,
              );
            }
            return response;
          });
      const data = await res.json();
      setPostMetadata(data);
      setLoading(false);
    };
    fetchPosts();
  }, []);


  if (isLoading) {
    return (
      <Typography variant='h5'>Loading...</Typography>
    );
  }

  return (
    <>
      <Container direction='column' style={{ minWidth: 375 }} >
        <Carousel>
          {postMetadata.body.map(function(v, i) {
            return (
              <CarouselItem key={i}>
                <PostCard post={v} />
              </CarouselItem>
            );
          })}
        </Carousel>
      </Container>
    </>
  );
};

export { Banner };
