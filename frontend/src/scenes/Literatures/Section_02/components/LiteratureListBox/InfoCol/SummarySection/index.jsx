// from package
import React from 'react';
import { Box, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
// from file
import { color, font } from '../../../../../../../theme/styleDeclaration';


// styles

const ContainerStyle = {
  backgroundColor: color.bg_greygreen,
  m: '0 5vw 40px 5vw',
  p: '40px 60px',
  borderRadius: '20px'
};

const TextStyle = {
  mt: '10px',
  color: color.text_darkgrey,
  fontFamily: font.content,
  fontSize: '16px',
  textAlign: 'justify'
};


// components

const SummaryLabel = ({ text }) => {
  return (
    <Typography sx={ TextStyle }>
      { text } :
    </Typography>
  );
};

const SummaryContent = ({ text }) => {
  return (
    <Typography sx={ TextStyle }>
      { text }
    </Typography>
  );
};


// rendering

function SummarySection({ data }) {

  // redux
  const currAuthor = useSelector(state => state.literature.currAuthor);
  const currPublication = useSelector(state => state.literature.currPublication);

  // render
  return (
    <Box sx={ ContainerStyle }>
      <SummaryLabel text='Summary' />
      <SummaryContent text={ data.data.data.details[currAuthor].publication[currPublication].itemSummary } />
    </Box>
  );
}

export default SummarySection;
