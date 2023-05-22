import React, { useContext } from 'react';
import { Box } from '@mui/material';
// import file
import { ResponsiveContext } from '../../../App';
import { color } from '../../../theme/styleDeclaration';


// styles
const ShrinkedContentBoxStyle = {
  p: '40px',
  position: 'absolute',
  width: '450px',
  height: ' auto',
  color: color.text_lightgrey,
  zIndex: '10'
};

const ExpandedContentBoxStyle = {
  p: '40px',
  position: 'absolute',
  right: '10%',
  width: '450px',
  height: 'auto',
  color: color.text_lightgrey,
  zIndex: '10'
};

// rendering

function HomeContentBox({ children }) {

  // responsive design
  const screenWidth = useContext(ResponsiveContext);

  return (

    <Box className='slide-01--content--box'
      sx={ screenWidth < 768 ? ShrinkedContentBoxStyle : ExpandedContentBoxStyle }>
      { children }
    </Box >
  );
}

export default HomeContentBox;
