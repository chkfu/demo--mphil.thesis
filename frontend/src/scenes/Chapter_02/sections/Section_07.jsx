// from package
import React from 'react';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
// from file
import { color, font } from './../../../theme/styleDeclaration';
import FullPageSectionContainer from '../../../components/Pages/FullPageReusable/FullPageSectionContainer';
import FullPageContentBox from './../../../components/Pages/FullPageReusable/FullPageContentBox';
import FullPageSlideTitle from './../../../components/Pages/FullPageReusable/FullPageSlideTitle';
import FullPageSlideText from './../../../components/Pages/FullPageReusable/FullPageSlideText';
import Section_07_background from '../backgrounds/Section_07_background';



const LinkStyle = {
  marginLeft: '20px',
  fontSize: '16px',
  fontFamily: font.content,
  textDecoration: 'none',
  color: color.text_lightgrey,
};


function Section_07() {
  return (
    <FullPageSectionContainer>

      <Section_07_background />

      <FullPageContentBox>
        <FullPageSlideTitle title='Police Elites' />
        <FullPageSlideText>
          Here, the concept 'police elites' targets on those intellectualss who actively participated in the police studies.
          <br /><br />
          Most of them were journal editors or academy instructors;
          however, outsiders also contributed with their professional background.
          <br /><br />
          Elites will fade out once they left their role in the police system.
          Especially the waves of young oversea-trained experts subsequently replaced the old-fashioned and non-police background instructors.
          <br /><br />
          The concept is therefore highly diverse and flexible.
          <Link to='/' style={ LinkStyle }>
            Learn more
          </Link>
        </FullPageSlideText>
      </FullPageContentBox>

    </FullPageSectionContainer>
  );
}

export default Section_07;
