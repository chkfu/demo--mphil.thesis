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

function Section_05_background() {
  return (
    <Box sx={ FormatterStyle }>
      <Box className='slide-01--underlaying--background'
        sx={ {
          top: '-10vh',
          left: '-10vw',
          width: '120vw',
          height: '900px',
          overflow: 'hidden',
          position: 'relative',
          backgroundImage: `url(${background.chapter02.section_05})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'bottom',
          transform: 'perspective(150px) rotateX(6deg) rotateY(6deg)',
          zIndex: '0',

          ':after': {
            content: '""',
            position: 'absolute',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            background: 'linear-gradient(65deg, transparent -50%, #111111 65%)'
          }
        } } />
    </Box>
  );
}

export default Section_05_background;
