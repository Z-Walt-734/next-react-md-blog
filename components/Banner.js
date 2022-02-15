import React, {useState, useEffect, Children, cloneElement} from 'react';
import {
  Button,
  Container,
  Typography,
  Box,
} from '@mui/material';
import fetch from 'isomorphic-fetch';
import styles from './Banner.module.css';
import {PostItem} from '.';
import {PropTypes} from 'prop-types';


const year = new Date().getFullYear().toString();
const month = '0' + (new Date().getMonth() + 1).toString();

const METADATA_API_URL = 'https://k7f6wauxuc.execute-api.us-east-2.amazonaws.com/posts/metadata?yearMonth='+year+month;


const Carousel = ({children}) => {
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
        style={{transform: `translateX(-${activeIndex * 100}%)`}}
      >
        {Children.map(children, (child, i) => {
          return cloneElement(child, {width: '100%'});
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
    const fetchMeta = async () => {
      const res = await fetch(METADATA_API_URL)
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
    fetchMeta();
  }, []);


  if (isLoading) {
    return (
      <Typography variant='h5'>Loading...</Typography>
    );
  }

  return (
    <>
      <Container direction='column' style={{minWidth: 375}} >
        <Typography variant='h5'>Newest this month</Typography>
        <Carousel>
          {postMetadata.body.map(function(v, i) {
            return (
              <PostItem key={i} post={v} size={1024} />
              // <CarouselItem key={i}>
              //   <PostCard post={v} size={1024}/>
              // </CarouselItem>
            );
          })}
        </Carousel>
      </Container>
    </>
  );
};

Carousel.propTypes = {
  children: PropTypes.children,
};


export {Banner};
