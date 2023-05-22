// from packages
import React from 'react';
import { Box, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
// from file
import { color, font } from './../../../../theme/styleDeclaration';


// style

const NameColStyle = {
  color: color.text_lightgrey,
  fontFamily: font.title,
  fontSize: '32px',
};

const TextStyle = {
  mt: '5px',
  color: color.text_lightgrey,
  fontFamily: font.content,
  fontSize: '18px'
};

// components

const NameElement = ({ content }) => {
  return (
    <Typography sx={ NameColStyle }>
      { content }
    </Typography>
  );
};

const PositionElement = ({ content }) => {
  return (
    <Typography sx={ TextStyle }>
      { content }
    </Typography>
  );
};


// rendering 

function NameSection({ data }) {

  // redux
  const currAuthor = useSelector(state => state.literature.currAuthor);

  // render
  return (
    <Box>
      <NameElement content={ data.data.data.details[currAuthor].name } />
      <PositionElement content={ data.data.data.details[currAuthor].position } />
    </Box>
  );
}

export default NameSection;
