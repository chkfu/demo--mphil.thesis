// from package
import React from 'react';
import { Box } from '@mui/material';
// from file
import { background, color } from '../../../theme/styleDeclaration';


// styles
const FormatterStyle = {
  backgroundColor: color.bg_darkgrey,
  width: '100%',
  height: '100%'
};


// rendering

function Section_06_background() {
  return (
    <Box sx={ FormatterStyle }>
      <Box className='slide-01--underlaying--background'
        sx={ {
          top: '0',
          left: '8vw',
          width: '100vw',
          height: '800px',
          overflow: 'hidden',
          position: 'relative',
          backgroundImage: `url(${background.chapter02.section_06})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'bottom',
          transform: 'perspective(480px) rotateX(15deg) rotateY(15deg)',
          filter: 'saturate(1.5)',
          zIndex: '0',

          ':after': {
            content: '""',
            position: 'absolute',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            background: 'linear-gradient(65deg, transparent -70%, #111111 65%)'
          }
        } } />
    </Box>
  );
}

export default Section_06_background;
