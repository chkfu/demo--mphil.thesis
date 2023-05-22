// from package
import React from 'react';
import { Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
// froom file
import { color, font } from './../../theme/styleDeclaration';


// styles
const LinkStyle = {
  textDecoration: 'none',
  color: color.text_lightgrey
};

const ButtonStyle = {
  border: `2px solid ${color.btn_lightgrey}`,
  backgroundColor: color.btn_lightgrey,
  p: '15px 20px',
  color: color.text_darkgrey,
  ':hover': {
    backgroundColor: color.bg_darkgrey,
    color: color.text_lightgrey,
    border: `2px solid ${color.btn_lightgrey}`
  },
  ':active': {
    transform: 'scale(0.98)'
  }
};

const TextStyle = {
  fontSize: '20px',
  fontFamily: font.content,
  textTransform: 'capitalize'
};

// rendering

function WhiteContainedInDark({ text, linkTo = '' }) {
  return (
    <Link to={ linkTo } style={ LinkStyle }>
      <Button
        className='contained--in--dark'
        sx={ ButtonStyle }>
        <Typography
          sx={ TextStyle }>{ text }</Typography>
      </Button>
    </Link>
  );
}

export default WhiteContainedInDark;
