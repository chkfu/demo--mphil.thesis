import React from 'react';
import { Box } from '@mui/material';
// from file
import { color, mapURL } from '../../theme/styleDeclaration';
import Section_01 from './sections/Section_01';
import Section_02 from './sections/Section_02';
import Section_03 from './sections/Section_03';
import Section_04 from './sections/Section_04';
import Section_05 from './sections/Section_05';


// styles
const ChapterContainer = ({ children }) => {
  return (
    <Box
      className='chapter--container'
      sx={ {
        backgroundColor: color.bg_darkgrey,
        minHeight: '100vh'
      } }>
      { children }
    </Box>
  );
};


// rendering
function Chapter_05() {

  // state Management
  const fetchingURL = mapURL.HomeMap_LateQingPeriod;
  const center = [28.22735122941235, 112.94625030865075];
  const zoom = 5;


  return (
    <ChapterContainer>
      <Section_01 />
      <Section_02 />
      <Section_03 />
      <Section_04 />
      <Section_05 />
    </ChapterContainer>
  );
}

export default Chapter_05;
