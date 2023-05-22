import React from 'react';
import { Box } from '@mui/material';
import SectionButtonFading from '../../Animation/SectionButtonFading';

// style 

const ButtonBoxStyle = {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  mt: '60px'
};

function HomeButtonBox({ children }) {
  return (
    <SectionButtonFading>
      <Box
        className='slide-01--button--container'
        sx={ ButtonBoxStyle }>
        { children }
      </Box>
    </SectionButtonFading>
  );
}

export default HomeButtonBox;
