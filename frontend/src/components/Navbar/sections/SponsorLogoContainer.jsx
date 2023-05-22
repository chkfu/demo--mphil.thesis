// from package
import React from 'react';
import { Box, Typography } from '@mui/material';
// from file
import { color, font } from './../../../theme/styleDeclaration';


// styles

const ContainerStyle = {
  display: 'flex',
  alignItems: 'end'
};

const TextStyle = {
  fontSize: '14px',
  fontFamily: font.content,
  color: color.text_lightgrey
};

// rendering

function SponsorLogoContainer() {
  return (
    <Box sx={ ContainerStyle }>
      <Typography sx={ TextStyle }>
        Powered by K. Chan
      </Typography>
    </Box >
  );
}

export default SponsorLogoContainer;
