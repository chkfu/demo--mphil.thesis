// from package
import React from 'react';
import { Box, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
// from file
import { color, font } from './../../../../../theme/styleDeclaration';
import ChartItem from './Statistic_ChartItem';
import TitleDetector from './TitleDetector';


// styles

const TitleBoxStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  textAlign: 'center'
};

const TitleTextStyle = {
  mt: '30px',
  fontFamily: font.content,
  fontSize: '28px',
  textDecoration: 'underline',
  textUnderlineOffset: '10px'
};

const ChartBoxStyle = {
  width: '100%',
  height: '650px'
};


// components

const TitleBox = ({ title }) => {
  return (
    <Box sx={ TitleBoxStyle }>
      <Typography sx={ TitleTextStyle }>
        { title }
      </Typography>
    </Box>
  );
};

const ChartBox = ({ children }) => {
  return (
    <Box sx={ ChartBoxStyle }>
      { children }
    </Box>
  );
};


// rendering 

function Statistic_ChartBox({ data }) {
  // redux
  const filterChoice = useSelector(state => state.resource.filterChoice);
  // render
  return (
    <Box sx={ {
      p: '50px',
      width: '100%',
      height: '100%',
      color: color.text_white
    } }>

      <TitleBox title={ TitleDetector(filterChoice) } />

      <ChartBox>
        <ChartItem
          data={ data }
          filterChoice={ filterChoice } />
      </ChartBox>

    </Box >
  );
}

export default Statistic_ChartBox;
