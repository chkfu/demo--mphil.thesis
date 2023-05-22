// from package
import React from 'react';
import { Typography } from '@mui/material';
// from file
import { color, font } from './../../../theme/styleDeclaration';
import SectionTextFading from '../../Animation/SectionTextFading';


// style
const TextStyle = {
  color: color.text_lightgrey,
  fontFamily: font.content,
  fontSize: '20px',
  textAlign: 'justify'
};

// rendering
function HalfPageSlideText({ children }) {
  return (
    <SectionTextFading>
      <Typography sx={ TextStyle }>
        { children }
      </Typography>
    </SectionTextFading>
  );
}

export default HalfPageSlideText;
