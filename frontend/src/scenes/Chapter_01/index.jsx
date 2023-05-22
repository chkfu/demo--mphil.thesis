// from package
import React from 'react';
import { Box } from '@mui/material';
import { useQuery } from 'react-query';
import axios from 'axios';
// from file
import { mapURL } from './../../theme/styleDeclaration';
import Section_01 from './sections/Section_01';
import Section_02 from './sections/Section_02';
import Section_03 from './sections/Section_03';
import Section_04 from './sections/Section_04';


// styles
const ChapterContainer = ({ children }) => {
  return (
    <Box
      className='chapter--container'
      sx={ {
        position: 'relative',
        minHeight: '100vh'
      } }>
      { children }
    </Box>
  );
};


// rendering
function Chapter_01() {

  // declarations
  const fetchingURL = mapURL.HomeMap_LateQingPeriod;

  // data fetching
  const { data } = useQuery('fetching-late-qing-data', async () => {
    return await axios.get(fetchingURL);
  });

  if (!data) {
    return <></>;
  }

  return (
    <>
      <ChapterContainer>
        <Section_01 />
        <Section_02 />
        <Section_03 data={ data } />
        <Section_04 />
      </ChapterContainer>
    </>
  );
}

export default Chapter_01;
