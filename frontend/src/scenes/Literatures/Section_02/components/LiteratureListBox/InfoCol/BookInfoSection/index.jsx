import React from 'react';
import { Box, Divider } from '@mui/material';
// from file
import Info_BookImage from './Info_BookImage';
import Info_BookTitle from './Info_BookTitle';
import Info_DetailGrid from './Info_DetailGrid';


// rendering

function BookInfoSection({ data, screenWidth }) {


  // styles

  const SectionContainerStyle = {
    p: '40px',
    display: screenWidth < 1024 ? 'static' : 'flex',
    justifyContent: 'space-evenly',
    width: '100%',
    minHeight: '300px'
  };

  const ImageAreaStyle = {
    width: screenWidth < 1024 ? '100%' : 'auto',
    display: screenWidth < 1024 ? 'flex' : 'static',
    justifyContent: screenWidth < 1024 ? 'center' : 'flex- start'
  };

  const ContentAreaStyle = {
    width: 'auto',
    height: 'auto',
    p: '40px'
  };

  const DividerStyle = {
    m: '10px 0',
    background: 'white'
  };


  // rendering

  return (
    <Box sx={ SectionContainerStyle }>

      <Box sx={ ImageAreaStyle }>
        <Info_BookImage data={ data } />
      </Box>

      <Box sx={ ContentAreaStyle }>
        <Info_BookTitle data={ data } />
        <Divider sx={ DividerStyle } />
        <Info_DetailGrid data={ data } />
      </Box>

    </Box>
  );
}

export default BookInfoSection;
