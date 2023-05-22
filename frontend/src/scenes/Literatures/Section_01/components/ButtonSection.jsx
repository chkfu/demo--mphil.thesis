// from package
import React from 'react';
import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
// form file
import WhiteContainedInDark from '../../../../components/Buttons/WhiteContainedInDark';


// rendering 

function ButtonSection({ data }) {

  // redux
  const currAuthor = useSelector(state => state.literature.currAuthor);

  // render
  return (
    <>
      {
        data.data.data.details[currAuthor].profile &&
        <Box sx={ { width: '100%', mt: '30px' } }>
          <WhiteContainedInDark
            text='Redirect to Profile'
            linkTo={ data.data.data.details[currAuthor].profile } />
        </Box>
      }
    </>
  );
}

export default ButtonSection;
