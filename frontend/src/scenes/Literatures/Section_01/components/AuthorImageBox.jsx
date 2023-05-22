// package
import React from 'react';
import { useSelector } from 'react-redux';
// file
import { Box } from '@mui/material';
import LiteratureInfoFading from './../../../../components/Animation/LiteratureImageFading';


// rendering
function AuthorImageBox({ screenWidth, data }) {

  // redux
  const currAuthor = useSelector(state => state.literature.currAuthor);

  // styles
  const ContainerStyle = {
    position: 'absolute',
    mt: '50px',
    right: screenWidth < 768 ? '0' : '8vw',
    height: '750px',
    zIndex: '1'
  };

  const ImageStyle = {
    width: '100%',
    height: '100%',
    mb: '0',
    filter: 'brightness(70%) contrast(1.5)',
    zIndex: '1'
  };

  return (
    <>
      {
        data.data.data.details[currAuthor].icon &&
        <LiteratureInfoFading>
          <Box
            sx={ ContainerStyle }>
            <img
              src={ data.data.data.details[currAuthor].icon }
              style={ ImageStyle } />
          </Box>
        </LiteratureInfoFading>
      }
    </>
  );
}

export default AuthorImageBox;
