// from package
import React from 'react';
import { Box } from '@mui/material';
// from file
import { color } from './../../../theme/styleDeclaration';
import { background } from './../../../theme/styleDeclaration';


// rendering
function Section_01_background() {
  return (
    <Box sx={ { backgroundColor: color.bg_darkgrey } }>
      <Box className='slide-01--underlaying--background'
        sx={ {
          top: '-20vh',
          left: '-5vw',
          width: '100vw',
          height: '800px',
          overflow: 'hidden',
          position: 'relative',
          backgroundImage: `url(${background.chapter02.section_01})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'bottom',
          filter: 'sepia(50%)',
          transform: 'perspective(250px) rotateX(18deg) rotateY(5deg)',
          zIndex: '0',

          ':after': {
            content: '""',
            position: 'absolute',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            background: 'linear-gradient(55deg, transparent -70%, #111111 70%)'
          }
        } } />
    </Box>
  );
}

export default Section_01_background;
