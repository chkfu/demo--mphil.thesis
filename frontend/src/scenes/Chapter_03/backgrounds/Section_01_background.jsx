// from package
import React from 'react';
import { Box } from '@mui/material';
// from file
import { background, color } from './../../../theme/styleDeclaration';


const FormatterStyle = {
  top: 0,
  left: 0,
  backgroundColor: color.bg_darkgrey,
  width: '100%',
  height: '100%'
};

// rendering
function Section_01_background() {
  return (
    <Box sx={ FormatterStyle }>
      <Box className='slide-01--underlaying--background'
        sx={ {
          top: '-60vh',
          left: '0vw',
          width: '100vw',
          height: '1000px',
          overflow: 'hidden',
          position: 'relative',
          backgroundImage: `url(${background.chapter03.section_01})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'bottom',
          filter: 'sepia(100%) saturate(1.2) blur(1.5px)',
          transform: 'perspective(650px) rotateX(50deg) rotateY(10deg) rotateZ(-25deg)',
          zIndex: '0',

          ':after': {
            content: '""',
            position: 'absolute',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            background: 'linear-gradient(75deg, transparent -40%, #111111 55%)'
          }
        } } />
    </Box>
  );
}

export default Section_01_background;
