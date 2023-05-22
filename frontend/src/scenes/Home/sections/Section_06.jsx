import React from 'react';
// import file
import FullPageSectionContainer from './../../../components/Pages/FullPageReusable/FullPageSectionContainer';
import FullPageContentBox from './../../../components/Pages/FullPageReusable/FullPageContentBox';
import FullPageSlideTitle from './../../../components/Pages/FullPageReusable/FullPageSlideTitle';
import FullPageSlideText from './../../../components/Pages/FullPageReusable/FullPageSlideText';
import FullPageButtonBox from './../../../components/Pages/FullPageReusable/FullPageButtonBox';
import WhiteContainedInDark from '../../../components/Buttons/WhiteContainedInDark';
import Section_06_background from '../backgrounds/Section_06_background';

function Section_06() {

  // button connection
  const linkTo = '/chapter-05';

  // rendering
  return (
    <FullPageSectionContainer>

      <Section_06_background />

      <FullPageContentBox>
        <FullPageSlideTitle title='Destructive Construction' />
        <FullPageSlideText>
          The faction leaders finally phrased out from the political stage. Most of resolved policies were shortlived or even yet to adopt.
          <br /> <br />
          Did those costy experiences bring any contribution to the Chinese?
        </FullPageSlideText>

        <FullPageButtonBox>
          <WhiteContainedInDark text='Learn More' linkTo={ linkTo } />
        </FullPageButtonBox>

      </FullPageContentBox>
    </FullPageSectionContainer>
  );
}

export default Section_06;
