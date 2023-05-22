// package
import React from 'react';
import { Box } from '@mui/material';
import { useSelector } from 'react-redux';


// rendering

function Info_BookImage({ data }) {

  // redux
  const currAuthor = useSelector(state => state.literature.currAuthor);
  const currPublication = useSelector(state => state.literature.currPublication);

  // render
  return (
    <Box sx={ {
      width: '220px',
      minWidth: '220px',
      height: '320px',
      backgroundImage: `url("${data.data.data.details[currAuthor].publication[currPublication].itemCover}")`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      boxShadow: '3',
    } }>
    </Box>
  );
}

export default Info_BookImage;
