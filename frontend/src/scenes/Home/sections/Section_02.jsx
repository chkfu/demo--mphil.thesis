import React from 'react';
// import file
import FullPageSectionContainer from './../../../components/Pages/FullPageReusable/FullPageSectionContainer';
import FullPageContentBox from './../../../components/Pages/FullPageReusable/FullPageContentBox';
import FullPageSlideTitle from './../../../components/Pages/FullPageReusable/FullPageSlideTitle';
import FullPageSlideText from './../../../components/Pages/FullPageReusable/FullPageSlideText';
import FullPageButtonBox from './../../../components/Pages/FullPageReusable/FullPageButtonBox';
import WhiteContainedInDark from '../../../components/Buttons/WhiteContainedInDark';
import Section_02_background from '../backgrounds/Section_02_background';


function Section_02() {

  // button connection
  const linkTo = '/chapter-01';

  // rendering
  return (
    <FullPageSectionContainer>

      <Section_02_background />

      <FullPageContentBox>
        <FullPageSlideTitle title='The Fairy Tales of Two Nations' />
        <FullPageSlideText>
          Amidst the threats from European imperialists, both Meiji Japan and Qing China desired to be a powerful state. Policing, therefore, was one of the major projects in their modern reform.
          <br /> <br />
          As a latecomer, did the China copied previous successes by timely imitations?
        </FullPageSlideText>

        <FullPageButtonBox>
          <WhiteContainedInDark text='Learn More' linkTo={ linkTo } />
        </FullPageButtonBox>

      </FullPageContentBox>
    </FullPageSectionContainer>
  );
}

export default Section_02;
