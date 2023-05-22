// from package
import React from 'react';
import { Typography } from '@mui/material';
// from file
import { color, font } from './../../../theme/styleDeclaration';
import SectionTitleFading from '../../Animation/SectionTitleFading';


// style
const TitleStyle = {
  color: color.text_lightgrey,
  fontFamily: font.title,
  fontSize: '32px',
  textAlign: 'center',
  p: '20px 0'
};

// rendering
function HalfPageSlideTitle(props) {
  return (
    <SectionTitleFading>
      <Typography sx={ TitleStyle }>
        { props.title }
      </Typography>
    </SectionTitleFading>
  );
}

export default HalfPageSlideTitle;
