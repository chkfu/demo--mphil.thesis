// from package
import React from 'react';
import { Box, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
// from file
import { color, font } from '../../../../../../../theme/styleDeclaration';


// styles

const TitleStyle = {
  color: color.text_lightgrey,
  fontFamily: font.content,
  fontSize: '20px'
};

const SubtitleStyle = {
  mt: '5px', color: color.text_lightgrey,
  fontFamily: font.content,
  fontSize: '16px'
};


// rendering

function Info_BookTitle({ data }) {

  // redux
  const currAuthor = useSelector(state => state.literature.currAuthor);
  const currPublication = useSelector(state => state.literature.currPublication);

  // render
  return (
    <Box>
      <Typography sx={ TitleStyle }>{ data.data.data.details[currAuthor].publication[currPublication].itemTitle }</Typography>
      <Typography sx={ SubtitleStyle }>{ data.data.data.details[currAuthor].publication[currPublication].itemSubtitle }</Typography>
    </Box>
  );
}

export default Info_BookTitle;
