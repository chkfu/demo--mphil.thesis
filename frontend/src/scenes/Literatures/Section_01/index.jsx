// from package
import React from 'react';
import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
// from file
import AuthorImageBox from './components/AuthorImageBox';
import IntroductionBox from './components/IntroductionBox';
import AuthorSwitchers from './../switcherBtns/AuthorSwitchers';


// rendering

function Section_01({ screenWidth, data }) {

  // redux
  const currAuthor = useSelector(state => state.literature.currAuthor);

  // styles
  const SectionContainerStyle = {
    width: '100vw',
    height: '800px',
    backgroundImage: `url('${data.data.data.details[currAuthor].background}')`,
    backgroundPosition: 'left',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    filter: 'grayscale(0.3) contrast(1.2)'
  };

  return (
    <Box sx={ SectionContainerStyle }>
      <AuthorSwitchers
        data={ data }
      />
      <IntroductionBox
        data={ data }
      />
      <AuthorImageBox
        screenWidth={ screenWidth }
        data={ data }
      />
    </Box>
  );
}

export default Section_01;
