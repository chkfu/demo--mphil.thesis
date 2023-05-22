// from package
import React from 'react';
import { Box } from '@mui/material';
// from file
import SelectionCol from './SelectionCol';
import InfoCol from './InfoCol';



// components

function LiteratureListBox({ data, screenWidth }) {

  // styles
  const ContainerStyle = {
    display: 'grid',
    gridTemplateColumns: screenWidth < 1024 ? '1fr' : '200px auto',
    gridTemplateRows: screenWidth < 1024 ? '140px auto' : '1fr',
  };


  // rendering
  return (
    <Box sx={ ContainerStyle }>
      <SelectionCol
        data={ data }
        screenWidth={ screenWidth }
      />
      <InfoCol
        data={ data }
        screenWidth={ screenWidth }
      />
    </Box >
  );
}

export default LiteratureListBox;
