// from package
import React from 'react';
import { Box, Typography } from '@mui/material';
// from file
import { color, font } from '../../../theme/styleDeclaration';
import SectionTextFading from '../../Animation/SectionTextFading';

// styles

const TextboxStyle = {
  mt: '40px'
};

const TextStyle = {
  color: color.text_lightgrey,
  fontSize: '20px',
  fontFamily: font.content,
  textAlign: 'justify',
  lineHeight: '30px'
};


// rendering

function HomeSlideText({ children }) {
  return (
    <SectionTextFading>
      <Box className='text--box' sx={ TextboxStyle }>
        <Typography sx={ TextStyle }>
          { children }
        </Typography>
      </Box>
    </SectionTextFading>
  );
}

export default HomeSlideText;
