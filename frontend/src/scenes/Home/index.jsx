import React from 'react';
import { Box } from '@mui/material';
// from file
import PageContainerFading from './../../components/Animation/PageContainerFading';
import Section_01 from './sections/Section_01.jsx';
import Section_02 from './sections/Section_02.jsx';
import Section_03 from './sections/Section_03.jsx';
import Section_04 from './sections/Section_04.jsx';
import Section_05 from './sections/Section_05.jsx';
import Section_06 from './sections/Section_06.jsx';


const ChapterContainer = ({ children }) => {
  return (
    <Box sx={ { height: '100vh' } }>
      { children }
    </Box>
  );
};

// rendering

function Home() {
  return (
    <PageContainerFading>
      <ChapterContainer>
        <Section_01 />
        <Section_02 />
        <Section_03 />
        <Section_04 />
        <Section_05 />
        <Section_06 />
      </ChapterContainer>
    </PageContainerFading>
  );
}

export default Home;
