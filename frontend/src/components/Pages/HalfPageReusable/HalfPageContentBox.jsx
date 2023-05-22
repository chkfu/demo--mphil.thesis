// from package
import React from 'react';
import { Box } from '@mui/material';

// styles


const BoxStyle = {
  m: 'auto auto',
  width: '450px'
};

// rendering
function HalfPageContentBox({ children }) {
  return (
    <Box sx={ BoxStyle }>
      { children }
    </Box>
  );
}

export default HalfPageContentBox;
