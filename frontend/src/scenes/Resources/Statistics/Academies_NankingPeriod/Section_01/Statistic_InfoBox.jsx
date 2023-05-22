// from package
import React, { useState, useEffect } from 'react';
import { Box, Divider } from '@mui/material';
// from file
import TitleCol from './Statistic_InfoBox_TitleCol';
import ContentCol from './Statistic_InfoBox_ContentCol';
import FilterBox from './FilterBox/index';


// styles

const InfoBoxStyle = {
  width: '450px',
  background: '#222222',
  p: '20px 20px'
};

const DividerStyle = {
  m: '10px',
  border: '1px solid white'
};


// components

const InfoBoxContainer = ({ children }) => {
  return (
    <Box sx={ InfoBoxStyle }>
      { children }
    </Box>
  );
};


// rendering

function Statistic_InfoBox({ hoverRef, initialValues }) {

  // # ATTENTION:  
  // 1.  useState in DisplayBox / parent component will cause to re-rendering (inconsistency)
  // 2.  useState only use to re-render the infobox details. Here, ref.current/infoState can still update

  // state management
  const [infoState, setInfoState] = useState('none');
  useEffect(() => {
    window.addEventListener('mouseover', (event) => {
      setInfoState(hoverRef.current);
    });
  }, [hoverRef.current]);

  return (
    <InfoBoxContainer>
      <FilterBox initialValues={ initialValues } />
      <Divider sx={ DividerStyle } />
      <TitleCol hoverRef={ hoverRef } />
      <ContentCol hoverRef={ hoverRef } />
    </InfoBoxContainer >
  );
}

export default Statistic_InfoBox;
