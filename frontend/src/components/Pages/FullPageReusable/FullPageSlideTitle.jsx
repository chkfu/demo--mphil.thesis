// from package
import React from 'react';
import { Box, Typography } from '@mui/material';
// from file
import { color, font } from '../../../theme/styleDeclaration';
import SectionTitleFading from '../../Animation/SectionTitleFading';

// styles

const TitleBoxStyle = {
  mt: '10px'
};

const TitleTextStyle = {
  fontSize: '32px',
  fontFamily: font.title,
  textAlign: 'center',
  color: color.text_lightgrey
};


// rendering

function HomeSlideTitle({ title }) {
  return (
    <SectionTitleFading>
      <Box className='title--box' sx={ TitleBoxStyle }>
        <Typography
          sx={ TitleTextStyle }>
          { title }
        </Typography>
      </Box>
    </SectionTitleFading>
  );
}

export default HomeSlideTitle;
