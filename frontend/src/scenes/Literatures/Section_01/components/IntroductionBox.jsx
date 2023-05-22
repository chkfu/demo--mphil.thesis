// from package
import React from 'react';
import { Box } from '@mui/material';
// from file
import { color } from './../../../../theme/styleDeclaration';
import LiteratureIntroFading from '../../../../components/Animation/LiteratureIntroFading';
import NameSection from './NameSection';
import ContentSection from './ContentSection';
import ButtonSection from './ButtonSection';


// styles

const ContainerStyle = {
  backgroundColor: color.bg_darkgrey,
  overflow: 'scroll',
  position: 'absolute',
  p: '60px',
  m: '250px 5vw 0 5vw',
  width: '45vw',
  minWidth: '450px',
  height: '500px',
  zIndex: '20',
  borderRadius: '50px',
  opacity: '0.6',
  boxShadow: '3'
};

function IntroductionBox({ data }) {
  return (
    <Box sx={ ContainerStyle }>
      <LiteratureIntroFading>
        <NameSection data={ data } />
        <ContentSection data={ data } />
        <ButtonSection data={ data } />
      </LiteratureIntroFading>
    </Box >
  );
}

export default IntroductionBox;
