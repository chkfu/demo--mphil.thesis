import React, { useContext } from 'react';
import { Box } from '@mui/material';
// import file
import { ResponsiveContext } from '../../../App';
import SectionContainerFading from '../../Animation/SectionContainerFading';



const ShrinkedContainerStyle = {
  position: 'static',
  height: '800px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const ExpandedContainerStyle = {
  position: 'static',
  height: '800px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};


// rendering

function HomeSectionContainer({ children }) {

  // responsive design
  const screenWidth = useContext(ResponsiveContext);

  return (
    <SectionContainerFading>
      <Box className='inner-formatter'
        sx={ screenWidth < 768 ? ShrinkedContainerStyle : ExpandedContainerStyle }>
        { children }
      </Box>
    </SectionContainerFading>
  );
}

export default HomeSectionContainer;
