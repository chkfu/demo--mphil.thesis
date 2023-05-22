import React from 'react';
import { Box, Typography } from '@mui/material';
import { color, font } from './../../../../../theme/styleDeclaration';

// styles

const TitleColStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  mt: '20px',
};

const TitleEngTextStyle = {
  textAlign: 'center',
  color: color.text_lightgrey,
  fontFamily: font.title,
  fontSize: '30px'
};

const TitleChiTextStyle = {
  textAlign: 'center',
  color: color.text_lightgrey,
  fontFamily: font.chinese,
  fontSize: '24px',
  ml: '10px'
};


// components

const TitleColumn = ({ hoverRef }) => {

  return (
    <Box sx={ TitleColStyle }>
      <Typography sx={ TitleEngTextStyle }>
        { hoverRef.current.nameEng }
      </Typography>
      <Typography sx={ TitleChiTextStyle }>
        { hoverRef.current.nameChi }
      </Typography>
    </Box>
  );
};

const ReminderColumn = () => {
  return (
    <Typography sx={ TitleEngTextStyle }>
      Please Select
    </Typography>
  );
};


// rendering

function Statistic_InfoBox_TitleCol({ hoverRef }) {
  return (
    <>
      { hoverRef.current === 'none' ? (<ReminderColumn />) : (<TitleColumn hoverRef={ hoverRef } />) }
    </>
  );
}

export default Statistic_InfoBox_TitleCol;
