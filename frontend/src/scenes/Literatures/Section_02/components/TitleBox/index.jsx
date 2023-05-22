import React from 'react';
import { Box, Typography } from '@mui/material';
import { color, font } from '../../../../../theme/styleDeclaration';


// styles

const BoxStyle = {
  mt: '20px'
};

const TextStyle = {
  p: '40px',
  color: color.text_lightgrey,
  fontFamily: font.title,
  fontSize: '35px',
  textAlign: 'center'
};


function TitleBox() {
  return (
    <Box sx={ BoxStyle }>
      <Typography sx={ TextStyle }>
        Related Publications
      </Typography>
    </Box>
  );
}

export default TitleBox;
