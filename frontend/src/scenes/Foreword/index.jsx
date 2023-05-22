// from package
import React, { useState } from 'react';
import { Box } from '@mui/material';
import { useQuery } from 'react-query';
import axios from 'axios';
import 'react-vertical-timeline-component/style.min.css';
// from file
import { color, mapURL } from './../../theme/styleDeclaration';
import PageContainerFading from '../../components/Animation/PageContainerFading';
import SectionContainerFading from '../../components/Animation/SectionContainerFading';
import FilterContainer from './components/FilterContainer';
import TimelineList from './components/TimelineList';

// styles

const ForwordContainerStyle = {
  backgroundColor: color.bg_darkgrey,
  width: '100vw',
  minHeight: '700px',
  backgroundColor: color.bg_darkgrey
};


// rendering

function Foreword() {

  // data fetching
  const { data } = useQuery('fetch-timeline-data',
    async () => {
      return await axios.get(mapURL.Timeline_Historical);
    });
  if (!data) {
    return <></>;
  }

  return (
    <PageContainerFading>
      <SectionContainerFading>
        <Box sx={ ForwordContainerStyle }>
          <FilterContainer />
          <TimelineList data={ data } />
        </Box>
      </SectionContainerFading>
    </PageContainerFading>
  );
}

export default Foreword;




