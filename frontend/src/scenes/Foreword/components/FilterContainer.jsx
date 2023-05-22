// from package
import React from 'react';
import { Box } from '@mui/material';
import 'react-vertical-timeline-component/style.min.css';
// from file
import { color } from '../../../theme/styleDeclaration';
import TitleSection from './TitleSection';
import FilterForm from './FilterForm';


// styles

const FilterContainerStyle = {
  width: '100vw',
  p: '30px 5vw',
};

const GridContainerStyle = {
  display: 'grid',
  gridTemplateRow: '2fr 1fr',
  justifyItems: 'center',
  backgroundColor: color.timeline_darkgrey,
  width: '90vw',
  height: '200px',
  boxShadow: '3'
};


// components

const FilterBox = ({ children }) => {
  return (
    <Box sx={ FilterContainerStyle }>
      { children }
    </Box>
  );
};

const GridContainer = ({ children }) => {
  return (
    <Box sx={ GridContainerStyle }>
      { children }
    </Box>
  );
};


// rendering

function FilterContainer({ timelineCategory, timelinePeriod, setTimelineCategory, setTimelinePeriod }) {
  return (
    <FilterBox>
      <GridContainer>

        <TitleSection />
        <FilterForm timelineCategory={ timelineCategory } timelinePeriod={ timelinePeriod } setTimelineCategory={ setTimelineCategory } setTimelinePeriod={ setTimelinePeriod } />

      </GridContainer>
    </FilterBox>
  );
}

export default FilterContainer;
