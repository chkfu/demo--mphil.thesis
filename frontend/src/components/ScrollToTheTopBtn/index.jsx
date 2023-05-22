// from package
import React, { useState, useEffect } from 'react';
import { Button, Typography } from '@mui/material';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';

function index() {

  const emergeLine = 600;

  // scroll Y-axis tracking
  const [toTopDisplay, setToTopDisplay] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > emergeLine)
        setToTopDisplay(true);
      if (window.scrollY < emergeLine)
        setToTopDisplay(false);
    });
  }, []);


  // rendering 
  return <Button
    onClick={ () => window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    }) }
    sx={ {
      display: toTopDisplay ? 'flex' : 'none',
      top: '80%',
      right: '2%',
      p: '10px',
      position: 'fixed',
      textWrap: 'wrap',
      textTransform: 'uppercase',
      backgroundColor: '#666666',
      color: 'white',
      opacity: '0.3',
      ':hover': {
        backgroundColor: '#666666',
        color: 'white',
        opacity: '0.4'
      },
      ':active': {
        transform: 'scale(0.95)'
      }
    } }>

    <KeyboardArrowUpOutlinedIcon />
    <Typography sx={ { fontSize: '18px' } }>TOP</Typography>

  </Button >;
}


export default index;
