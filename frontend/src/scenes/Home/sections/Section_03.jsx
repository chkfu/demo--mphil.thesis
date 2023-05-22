import React from 'react';
// import file
import FullPageSectionContainer from './../../../components/Pages/FullPageReusable/FullPageSectionContainer';
import FullPageContentBox from './../../../components/Pages/FullPageReusable/FullPageContentBox';
import FullPageSlideTitle from './../../../components/Pages/FullPageReusable/FullPageSlideTitle';
import FullPageSlideText from './../../../components/Pages/FullPageReusable/FullPageSlideText';
import FullPageButtonBox from './../../../components/Pages/FullPageReusable/FullPageButtonBox';
import WhiteContainedInDark from '../../../components/Buttons/WhiteContainedInDark';
import Section_03_background from '../backgrounds/Section_03_background';


function Section_03() {

  // button connection
  const linkTo = '/chapter-02';

  // rendering
  return (
    <FullPageSectionContainer>

      <Section_03_background />

      <FullPageContentBox>
        <FullPageSlideTitle title='Legacy' />
        <FullPageSlideText>
          With the success of Northern Expendition (1927-28), the Nationalists announced a series of national reforms for their ultimate goal of unification and modernisation.
          <br /> <br />
          How did previous development of policing platforms and elites benefit future restructure of policing?
        </FullPageSlideText>

        <FullPageButtonBox>
          <WhiteContainedInDark text='Learn More' linkTo={ linkTo } />
        </FullPageButtonBox>

      </FullPageContentBox>
    </FullPageSectionContainer >
  );
}

export default Section_03;
