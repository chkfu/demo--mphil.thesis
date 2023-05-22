// package
import React from 'react';
import { Box } from '@mui/material';
// file
import { color } from './../../../theme/styleDeclaration';
import TitleBox from './components/TitleBox';
import LiteratureListBox from './components/LiteratureListBox';


// styles
const SectionContainerStyle = {
  p: '5%',
  width: '100vw',
  background: color.bg_coal
};


// rendering

function Section_02({ screenWidth, data }) {

  return (
    <Box sx={ SectionContainerStyle }>
      <TitleBox />
      <LiteratureListBox
        screenWidth={ screenWidth }
        data={ data }
      />
    </Box>
  );
}

export default Section_02;;
