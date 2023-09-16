// from package
import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
// from file
import { color, font } from './../../../theme/styleDeclaration';


// styles
const LinkStyle = {
  textDecoration: 'none',
  color: color.text_lightgrey
};

const ContainerStyle = {
  backgroundColor: color.bg_darkgrey,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

const TextStyle = {
  mt: '20px', p: '10px',
  fontFamily: font.title,
  fontSize: '32px',
  color: font.lightgrey,
  transition: 'transform 1s',
  ':hover': {
    cursor: 'pointer',
    transform: 'scale(1.05)',
    transition: 'transform 0.5s'
  },
  ':active': {
    transform: 'scale(0.95)'
  }
};


// rendering

function UpperCol() {

  return (
    <Box sx={ ContainerStyle }>

      <Link to='/' style={ LinkStyle }>
        <Typography
          sx={ TextStyle }>
          MPhil Thesis
        </Typography>
      </Link>

    </Box >
  );
}

export default UpperCol;
