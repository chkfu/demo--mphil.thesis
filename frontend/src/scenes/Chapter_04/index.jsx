import React from 'react';
import { Box } from '@mui/material';
import { useQuery } from 'react-query';
import axios from 'axios';
// from file
import { color, mapURL } from '../../theme/styleDeclaration';
import Section_01 from './sections/Section_01';
import Section_02 from './sections/Section_02';
import Section_03 from './sections/Section_03';
import Section_04 from './sections/Section_04';
import Section_05 from './sections/Section_05';
import Section_06 from './sections/Section_06';


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
function Chapter_04() {

  // declarations
  const fetchingURL = mapURL.HomeMap_WartimePeriod;

  // data fetching
  const { data } = useQuery('fetching-wartime-data', async () => {
    return await axios.get(fetchingURL);
  });

  if (!data) {
    return <></>;
  }

  return (
    <ChapterContainer>
      <Section_01 data={ data } />
      <Section_02 />
      <Section_03 />
      <Section_04 />
      <Section_05 />
      <Section_06 />
    </ChapterContainer>
  );
}

export default Chapter_04;
