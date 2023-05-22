import React from 'react';
// import file
import FullPageSectionContainer from './../../../components/Pages/FullPageReusable/FullPageSectionContainer';
import FullPageContentBox from './../../../components/Pages/FullPageReusable/FullPageContentBox';
import FullPageSlideTitle from './../../../components/Pages/FullPageReusable/FullPageSlideTitle';
import FullPageSlideText from './../../../components/Pages/FullPageReusable/FullPageSlideText';
import FullPageButtonBox from './../../../components/Pages/FullPageReusable/FullPageButtonBox';
import WhiteContainedInDark from '../../../components/Buttons/WhiteContainedInDark';
import Section_04_background from '../backgrounds/Section_04_background';


function Section_04() {

  // button connection
  const linkTo = '/chapter-03';

  // rendering
  return (
    <FullPageSectionContainer>

      <Section_04_background />

      <FullPageContentBox>
        <FullPageSlideTitle title='Country First' />
        <FullPageSlideText>
          As the path of learning, the elites explored modern policing from the its images to its duties, functions and role playing.
          <br /> <br />
          Complicated situation drove the ideas towards nationalist and militarised, even 'all-rounded policemen' were debated.
          <br /> <br />
          What is wrong with their pursuit of perfection?
        </FullPageSlideText>

        <FullPageButtonBox>
          <WhiteContainedInDark text='Learn More' linkTo={ linkTo } />
        </FullPageButtonBox>

      </FullPageContentBox>
    </FullPageSectionContainer>
  );
}

export default Section_04;
