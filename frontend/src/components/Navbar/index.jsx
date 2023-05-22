// from package
import React from 'react';
import { AppBar } from '@mui/material';
// from file
import UpperCol from './sections/UpperCol';
import LowerCol from './sections/LowerCol';



// Navbar.jsx
function Navbar() {

  // responsive design
  return (
    <AppBar sx={ { overflow: 'hidden', position: 'static' } }>
      <UpperCol />
      <LowerCol />
    </AppBar>
  );
}

export default Navbar;
