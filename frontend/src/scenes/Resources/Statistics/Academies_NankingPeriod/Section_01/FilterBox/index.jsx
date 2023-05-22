// from package
import React from 'react';
import { Box, Typography } from '@mui/material';
// from file
import { color, font } from '../../../../../../theme/styleDeclaration';
import FilterRadioForm from './FilterRadioForm';
import FilterSelectForm from './FilterSelectForm';


// style
const FilterBoxStyle = {
  position: 'relative',
  justifyContent: 'center',
  alignItems: 'center',
  width: '360px',
  p: '10px'
};

const OuterGridStyle = {
  display: 'grid',
  gridTemplateColumns: '60px 300px'
};

const InnerGridStyle = {
  display: 'grid',
  gridTemplateRows: '1fr 1fr'
};

const FilterLabelStyle = {
  mt: '5px',
  color: color.text_lightgrey,
  fontSize: '18px',
  fontFamily: font.content
};


// components

const FilterBoxContainer = ({ children }) => {
  return (
    <Box sx={ FilterBoxStyle }>
      { children }
    </Box>
  );
};
const OuterGridContainer = ({ children }) => {
  return (
    <Box sx={ OuterGridStyle }>
      { children }
    </Box>
  );
};

const InnerGridContainer = ({ children }) => {
  return (
    <Box sx={ InnerGridStyle }>
      { children }
    </Box>
  );
};

const FilterLabel = ({ label }) => {
  return (
    <Typography sx={ FilterLabelStyle }>
      { label }
    </Typography>);
};

// rendering

function index({ initialValues }) {
  return (
    <FilterBoxContainer>
      <OuterGridContainer>

        <FilterLabel label={ `Filter :` } />

        <InnerGridContainer>
          <FilterRadioForm initialValues={ initialValues } />
          <FilterSelectForm initialValues={ initialValues } />
        </InnerGridContainer>

      </OuterGridContainer>
    </FilterBoxContainer>
  );
}

export default index;
