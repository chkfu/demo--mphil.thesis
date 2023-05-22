// from package
import React from 'react';
// import file
import FullPageSectionContainer from './../../../components/Pages/FullPageReusable/FullPageSectionContainer';
import FullPageContentBox from './../../../components/Pages/FullPageReusable/FullPageContentBox';
import FullPageSlideTitle from './../../../components/Pages/FullPageReusable/FullPageSlideTitle';
import FullPageSlideText from './../../../components/Pages/FullPageReusable/FullPageSlideText';
import FullPageButtonBox from './../../../components/Pages/FullPageReusable/FullPageButtonBox';
import WhiteContainedInDark from '../../../components/Buttons/WhiteContainedInDark';
import Section_01_background from '../backgrounds/Section_01_background';



function Section_01() {

  // button connection
  const linkTo = '/chapter-foreword';

  // rendering
  return (

    <FullPageSectionContainer>

      <Section_01_background />

      <FullPageContentBox>
        <FullPageSlideTitle title='A Wheel-running Reformation' />
        <FullPageSlideText>
          In 1905, Qing monarchists launched an eight-year police creation for modern national-building.
          <br /> <br />
          But, why did the Chinese still fail to adopt the plan with half of a century?
        </FullPageSlideText>

        <FullPageButtonBox>
          <WhiteContainedInDark text='Learn More' linkTo={ linkTo } />
        </FullPageButtonBox>

      </FullPageContentBox>
    </FullPageSectionContainer>

  );
}

export default Section_01;
