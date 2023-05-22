// from package
import React from 'react';
import { Box } from '@mui/material';
// from file
import { color } from '../../../../../../theme/styleDeclaration';
import SummarySection from './SummarySection';
import BookInfoSection from './BookInfoSection';


// styles
const ColContainerStyle = {
  backgroundColor: color.bg_lightcoal,
  p: '10px',
  borderRadius: '20px',
  boxShadow: '3'
};

// rendering
function InfoCol({ data, screenWidth }) {

  return (
    <Box sx={ ColContainerStyle }>
      <BookInfoSection data={ data } screenWidth={ screenWidth } />
      <SummarySection data={ data } />
    </Box >
  );
}

export default InfoCol;
