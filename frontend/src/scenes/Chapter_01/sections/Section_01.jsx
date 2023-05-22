import React from 'react';
// from file
import FullPageContentBox from './../../../components/Pages/FullPageReusable/FullPageContentBox';
import FullPageSlideTitle from './../../../components/Pages/FullPageReusable/FullPageSlideTitle';
import FullPageSlideText from './../../../components/Pages/FullPageReusable/FullPageSlideText';
import SkewFullPageContainer from '../../../components/Pages/FullPageReusable/SkewFullPageContainer';
import Section_01_background from '../backgrounds/Section_01_background';


// rendering

function Section_01() {

  return (
    <SkewFullPageContainer>

      <Section_01_background />

      <FullPageContentBox>
        <FullPageSlideTitle title='Why did they learn from japan' />
        <FullPageSlideText>
          The defeat in the First Sino-Japanese War (1894-95) did not turn down Qing China's interest on their imitation from Japan.
          <br /><br />
          Meiji Japan did play a good model with their similar concerns on foreign threats, weak state and strong local powers, plus the geographical advantages over European countries.
          <br /><br />
          Hence, the Chinese saw Japan as a springboard to learn modern ideas, developing the state as imaginated.
        </FullPageSlideText>
      </FullPageContentBox>

    </SkewFullPageContainer>
  );
}

export default Section_01;
