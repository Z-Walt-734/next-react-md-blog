import React from 'react';
import { Navbar } from '.';
import { Box } from '@mui/material';
// import {red} from '@mui/material/colors';
import { Banner } from './Banner';
import { Typography } from '@mui/material';

// import './styles/custom.scss';

const grabPhrase = () =>{
  const phrases = [
    'A Backend Programmer takes on the wild world of frontend design.',
    'All Code Now With 50% Fewer Calories!',
    'The Blogiest Blog Blogging in the whole Blog-o-sphere.',
    '😝 WAAAAASSSSSMMMMMMMMMM!!!!!',
    'If you lived here, you\'d be home by now!',
    'Back off man, I\'m a {computer} scientist.',
    'No matter where you go, there you are.',
    'Konami Code Compatible!',
    'test 7',
    'NOW FULLY OPERATIONAL! We apologize for the inconvenience',
  ];

  const n = Math.floor(Math.random() * phrases.length);

  return phrases[n];
};

const MainHeader = () => {
  return (
    <>
      <Box >

        <Typography variant='h3' align='center'>
          ZW&apos;s Project Blog
        </Typography>

        <Typography variant='h6' align='center'>
          {grabPhrase()}
        </Typography>

        <Navbar/>
        <br />
        <Banner />
      </Box>
    </>
  );
};

const Header = () => {
  return (
    <>
      <Box >

        <Typography variant='h3' align='center'>
          ZW&apos;s Project Blog
        </Typography>
        <Typography variant='h6' align='center'>
          {grabPhrase()}
        </Typography>
        <Navbar/>
        <br />
        <br />
      </Box>
    </>
  );
};

export { Header, MainHeader };
