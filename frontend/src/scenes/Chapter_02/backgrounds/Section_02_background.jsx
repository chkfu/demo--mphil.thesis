// from package
import React from 'react';
import { Box } from '@mui/material';
// from file
import { background } from './../../../theme/styleDeclaration';


// rendering

function Section_02_background() {
  return (
    <Box className='section-04--underlaying--background'
      sx={ {
        position: 'relative',
        width: '100%',
        height: '800px',
        backgroundImage: `url(${background.chapter02.section_02})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        filter: 'sepia(50%)',
        ':after': {
          content: '""',
          position: 'absolute',
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          background: 'linear-gradient(110deg, transparent -70%, black 80%)'
        }
      } } />
  );
}

export default Section_02_background;
