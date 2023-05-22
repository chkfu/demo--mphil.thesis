import React from 'react';
import { Grid } from '@mui/material';


// styles
const GridStyle = {
  display: 'flex',
  jsutifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  p: '20px 40px 20px 30px'
};

// rendering

function HalfPageTextGrid({ children }) {
  return (
    <Grid sx={ GridStyle }>
      { children }
    </Grid>
  );
}

export default HalfPageTextGrid;
