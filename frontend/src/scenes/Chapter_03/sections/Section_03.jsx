import React from 'react';
// from file
import FullPageContentBox from '../../../components/Pages/FullPageReusable/FullPageContentBox';
import FullPageSlideTitle from '../../../components/Pages/FullPageReusable/FullPageSlideTitle';
import FullPageSlideText from '../../../components/Pages/FullPageReusable/FullPageSlideText';
import SkewFullPageContainer from '../../../components/Pages/FullPageReusable/SkewFullPageContainer';
import Section_01_background from '../backgrounds/Section_01_background';

// rendering

function Section_02() {

  return (
    <SkewFullPageContainer>

      <Section_01_background />

      <FullPageContentBox>
        <FullPageSlideTitle title='how to organise' />
        <FullPageSlideText>
          As the basic unit, manpower problem was the first challenge that they faced.
          Intellectuals saw the police education as the foundation of manpower cultivation.
          Furthermore, police agencies also required to regulate enforcemnet power, streamlining organisation, and improving frontline and backend practices for better performance.
          <br /><br />
          However, intellectuals over-estimated their abilities and blindly believed in the foreign models.
          Only a few of them arranged feasible plans to put those modern arrangements into practice.
          In a nutshell, many ideas were suggested but helpless on their future reform.
        </FullPageSlideText>
      </FullPageContentBox>

    </SkewFullPageContainer>
  );
}

export default Section_02;
