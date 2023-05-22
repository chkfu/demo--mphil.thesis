import React from 'react';
import { Grid } from '@mui/material';
import HomeMap from '../../Maps/HomeMap';


// rendering
function HalfPageMapGrid({ data, center, zoom }) {

  return (
    <Grid sx={ {
      minWidth: '15px',
      width: '100%',
      height: '100vh',
      filter: 'greyscale(100%)'
    } }>
      <HomeMap data={ data } center={ center } zoom={ zoom } />
    </Grid>
  );
}

export default HalfPageMapGrid;
