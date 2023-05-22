// from file
import React from 'react';
import { Box, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
// from package
import { color, font } from '../../../../../../../theme/styleDeclaration';


//  styles

const GridContainerStyle = {
  display: 'grid',
  gridTemplateRows: 'auto auto auto auto auto auto',
  mt: '40px'
};

const ItemContainerStle = {
  display: 'grid',
  gridTemplateColumns: '170px auto',
  p: '5px 0'
};

const ContentTextStyle = {
  color: color.text_lightgrey,
  fontFamily: font.content,
  fontSize: '16px'
};


// components

const GridItem = ({ tableHead, tableContent }) => {
  return (
    <Box sx={ ItemContainerStle }>
      <Typography sx={ ContentTextStyle }>  { `${tableHead} :` }  </Typography>
      <Typography sx={ ContentTextStyle }>  { tableContent }  </Typography>
    </Box>
  );
};


// rendering

function Info_DetailGrid({ data }) {

  // redux
  const currAuthor = useSelector(state => state.literature.currAuthor);
  const currPublication = useSelector(state => state.literature.currPublication);

  // render
  return (
    <Box sx={ GridContainerStyle }>

      {
        data.data.data.details[currAuthor].publication[currPublication].itemAuthor &&
        <GridItem
          tableHead="Author(s)"
          tableContent={ data.data.data.details[currAuthor].publication[currPublication].itemAuthor }
        />
      }
      {
        data.data.data.details[currAuthor].publication[currPublication].publisher &&
        <GridItem
          tableHead="Name of Publisher"
          tableContent={ data.data.data.details[currAuthor].publication[currPublication].publisher }
        />
      }
      {
        data.data.data.details[currAuthor].publication[currPublication].publisherPlace &&
        <GridItem
          tableHead="Place of Publisher"
          tableContent={ data.data.data.details[currAuthor].publication[currPublication].publisherPlace }
        />
      }
      {
        data.data.data.details[currAuthor].publication[currPublication].publisherDate &&
        <GridItem
          tableHead="Creation Date"
          tableContent={ data.data.data.details[currAuthor].publication[currPublication].publisherDate }
        />
      }
      {
        data.data.data.details[currAuthor].publication[currPublication].language &&
        <GridItem
          tableHead="Language"
          tableContent={ data.data.data.details[currAuthor].publication[currPublication].language }
        />
      }

    </Box>
  );
}

export default Info_DetailGrid;
