import React, { useContext } from 'react';
import { Box } from '@mui/material';
import { ResponsiveContext } from '../../../App';


// styles

const ExpandedStyle = {
  display: 'flex',
  position: 'relative',
  alignItems: 'center',
  overflow: 'hidden',
  width: '100vw',
  height: '800px',
};

const ShrinkedStyle = {
  overflow: 'hidden',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: '100vw',
  height: '800px',
};

// rendering

function SkewFullPageContainer({ children }) {

  const screenWidth = useContext(ResponsiveContext);

  return (
    <Box sx={ screenWidth < 768 ? ShrinkedStyle : ExpandedStyle }>
      { children }
    </Box>
  );
}

export default SkewFullPageContainer;
