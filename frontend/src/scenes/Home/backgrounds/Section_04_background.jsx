// from package
import React from 'react';
import { Box } from '@mui/material';
// import file
import { background } from './../../../theme/styleDeclaration';

function Section_04_background() {
  return (
    <Box className='section-04--underlaying--background'
      sx={ {
        position: 'relative',
        width: '100%',
        height: '800px',
        backgroundImage: `url(${background.home.section_04})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        filter: 'sepia(50%)',
        zIndex: '-2',
        ':after': {
          content: '""',
          position: 'absolute',
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          background: 'linear-gradient(110deg, transparent 10%, black 70%)'
        }
      } } />
  );
}

export default Section_04_background;
