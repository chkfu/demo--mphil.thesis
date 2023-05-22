// from package
import React from 'react';
import { Box } from '@mui/material';
// from file
import { background } from '../../../theme/styleDeclaration';


// rendering

function Section_08_background() {
  return (
    <Box className='slide-01--underlaying--background'
      sx={ {
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        position: 'relative',
        backgroundImage: `url(${background.chapter02.section_08})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'bottom',
        backgroundSize: 'cover',
        filter: 'saturate(1.5)',
        zIndex: '0',

        ':after': {
          content: '""',
          position: 'absolute',
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          background: 'linear-gradient(90deg, transparent -100%, #111111 78%)'
        }
      } } />
  );
}

export default Section_08_background;
