// from package
import React from 'react';
import { Box, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
// from file
import { color, font } from './../../../../theme/styleDeclaration';


// styles 

const ContainerStyle = {
  mt: '20px',
  width: '100%'
};

const TextStyle = {
  color: color.text_lightgrey,
  fontFamily: font.content,
  fontSize: '18px',
  textAlign: 'justify'
};


// rendering
function ContentSection({ data }) {

  // redux
  const currAuthor = useSelector(state => state.literature.currAuthor);

  // render
  return (
    <>
      <Box sx={ ContainerStyle }>
        <Typography sx={ TextStyle }>
          { data.data.data.details[currAuthor].description }
        </Typography>
      </Box>
    </>
  );
}

export default ContentSection;
