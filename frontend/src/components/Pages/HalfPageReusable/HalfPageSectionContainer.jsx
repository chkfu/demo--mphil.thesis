// from package
import React, { useContext } from 'react';
import { Box } from '@mui/material';
// from file
import { ResponsiveContext } from '../../../App';
import { useScrollYHook } from '../../../theme/useScrollYHook';
import SectionContainerFading from '../../Animation/SectionContainerFading';


// rendering
function HalfPageSectionContainer({ children, height, emerge }) {

  // scrolling detector
  const scrollVal = useScrollYHook();

  // responsive design
  const screenWidth = useContext(ResponsiveContext);

  // rendering
  return (
    <SectionContainerFading>
      <Box
        className='outer--formatter'
        sx={ {
          position: 'relative',
          // height is required for display slides
          // affected by the num of slides
          height: height
        } }>

        <Box sx={ {
          position: scrollVal < emerge ? 'absolute' : 'fixed',
          top: '0px',
          display: 'grid',
          gridTemplateColumns: screenWidth < 1024 ? 'auto 500px' : 'auto 50vw',
          width: '100vw',
          height: '100vh'
        } }>
          { children }
        </Box>
      </Box>
    </SectionContainerFading>
  );
}

export default HalfPageSectionContainer;
