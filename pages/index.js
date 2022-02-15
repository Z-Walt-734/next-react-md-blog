import {CssBaseline, ThemeProvider} from '@mui/material';
import {createTheme} from '@mui/system';
import React, {useEffect, useState} from 'react';
import {MainHeader} from '../components';
import {Home} from '../components';
import {theme} from '../components';
import {HomePageBody, SpinningBody} from './styles/HomePage.module.scss';

const homeTheme = {
  palette: {
    background: {
      default: 'transparent',
      dark: 'green',
      light: 'green',
    },
  },
};

const arraysEqual = (a, b) => {
  if (a == null) return false;
  if (a.length !== b.length) return false;

  for (let i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
};

/**
 * Renders components into Home page
 * @return {any} Home page
 */
function HomePage() {
  const [isRolling, setIsRolling] = useState(0);
  const konamiCode = [];
  const konamiAnswer = [
    'ArrowUp',
    'ArrowUp',
    'ArrowDown',
    'ArrowDown',
    'ArrowLeft',
    'ArrowRight',
    'ArrowLeft',
    'ArrowRight',
    'b',
    'a',
    'Enter',
  ];

  const doUhBarrelRoll = () =>{
    konamiCode.pop();
    setIsRolling(1);
    setTimeout(() => {
      setIsRolling(0);
    }, 8000);
  };


  useEffect(() => {
    document.addEventListener('keydown', function(event) {
      konamiCode.push(event.key);
      if (konamiCode.length > konamiAnswer.length) {
        konamiCode.shift();
      }
      if (arraysEqual(konamiCode, konamiAnswer)) {
        doUhBarrelRoll();
      }
    });
  }, []);

  return (
    <>
      <div className={isRolling > 0 ? SpinningBody : HomePageBody}>
        <ThemeProvider theme={createTheme(theme, homeTheme)} >
          <CssBaseline />
          <MainHeader />
          <Home />
        </ThemeProvider>
      </div>
    </>
  );
}

export default HomePage;

