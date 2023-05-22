import React from 'react';
import { Box } from '@mui/material';
import { useQuery } from 'react-query';
import axios from 'axios';
// from file
import { color } from './../../theme/styleDeclaration';
import { mapURL } from './../../theme/styleDeclaration';
import Section_01 from './sections/Section_01';
import Section_02 from './sections/Section_02';
import Section_03 from './sections/Section_03';
import Section_04 from './sections/Section_04';
import Section_05 from './sections/Section_05';
import Section_06 from './sections/Section_06';
import Section_07 from './sections/Section_07';
import Section_08 from './sections/Section_08';


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
function Chapter_02() {

  // declarations
  const fetchingURL = mapURL.HomeMap_PreWarPeriod;

  // data fetching
  const { data } = useQuery('fetching-NankingPeriod_Academy', async () => {
    return await axios.get(fetchingURL);
  });

  if (!data) {
    return <></>;
  }

  return (
    <ChapterContainer>
      <Section_01 />
      <Section_02 />
      <Section_03 />
      <Section_04 data={ data } />
      <Section_05 />
      <Section_06 />
      <Section_07 />
      <Section_08 />
    </ChapterContainer>
  );
}

export default Chapter_02;
