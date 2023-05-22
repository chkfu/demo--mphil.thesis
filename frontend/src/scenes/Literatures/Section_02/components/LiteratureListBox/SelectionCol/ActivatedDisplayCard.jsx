// from package
import React from 'react';
import { Box } from '@mui/material';
// from file
import { color } from '../../../../../../theme/styleDeclaration';


function ActivatedDisplayCard({ screenWidth, id, image }) {
  return (
    <Box
      key={ id }
      sx={ {
        backgroundImage: `url("${image}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        m: screenWidth < 1024 ? '0 10px' : ' 8% 0',
        width: screenWidth < 1024 ? '80px' : '100%',
        height: screenWidth < 1024 ? '110px' : '220px',
        opacity: '1',
        filter: 'grayscale(0)',
        border: `4px solid ${color.border_darkblue}`,
        cursor: 'pointer',
      } } />
  );
}

export default ActivatedDisplayCard;
