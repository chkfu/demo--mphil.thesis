import React from 'react';
// import file
import FullPageSectionContainer from './../../../components/Pages/FullPageReusable/FullPageSectionContainer';
import FullPageContentBox from './../../../components/Pages/FullPageReusable/FullPageContentBox';
import FullPageSlideTitle from './../../../components/Pages/FullPageReusable/FullPageSlideTitle';
import FullPageSlideText from './../../../components/Pages/FullPageReusable/FullPageSlideText';
import FullPageButtonBox from './../../../components/Pages/FullPageReusable/FullPageButtonBox';
import WhiteContainedInDark from '../../../components/Buttons/WhiteContainedInDark';
import Section_05_background from '../backgrounds/Section_05_background';



function Section_05() {

  // button connection
  const linkTo = '/chapter-04';

  // rendering
  return (
    <FullPageSectionContainer>

      <Section_05_background />

      <FullPageContentBox>
        <FullPageSlideTitle title='Factional Strifes' />
        <FullPageSlideText>
          For the wartime control, the Nationalists merged Academies in Nanking and Chekiang, as the only insititution of police training.
          <br /> <br />
          Internal conflicts soon exaggerated as battles over multiple agencies and political factions.
          <br /> <br />
          How professional knowledge act crucially in the strifes?
        </FullPageSlideText>

        <FullPageButtonBox>
          <WhiteContainedInDark text='Learn More' linkTo={ linkTo } />
        </FullPageButtonBox>

      </FullPageContentBox>
    </FullPageSectionContainer>
  );
}

export default Section_05;
