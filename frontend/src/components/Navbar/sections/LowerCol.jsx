// from
import React, { useContext } from 'react';
import { Box } from '@mui/material';
// from file
import { ResponsiveContext } from '../../../App';
import { color } from './../../../theme/styleDeclaration';
import NavItemsContainer from './NavItemsContainer';
import SponsorLogoContainer from './SponsorLogoContainer';


// rendering
function LowerCol() {

  // responsive design
  const screenWidth = useContext(ResponsiveContext);

  // styles

  const ContainerStyle = {
    top: '0',
    display: 'flex',
    position: 'sticky',
    position: '-webkit-sticky',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: color.bg_darkgrey,
    p: '10px 8%',
    width: '100%',
    height: '60px',
    zIndex: '20'
  };

  // rendering
  return (
    <Box sx={ ContainerStyle }>
      <NavItemsContainer />
      { screenWidth > 768 && <SponsorLogoContainer /> }
    </Box >
  );
}

export default LowerCol;
