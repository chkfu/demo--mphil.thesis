// fron package
import React from 'react';
import { Box, Typography } from '@mui/material';
import { color, font } from './../../../theme/styleDeclaration';


// styles

const TitleSectionStyle = {
  p: '40px 40px 0px 40px',
  fontFamily: font.title,
  color: color.text_lightgrey,
  fontSize: '40px'
};


// rendering 

function TitleSection() {
  return (
    <Box>
      <Typography sx={ TitleSectionStyle }>
        Timeline
      </Typography>
    </Box>
  );
}

export default TitleSection;
