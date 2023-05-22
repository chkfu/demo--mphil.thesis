import React from 'react';
// from file
import FullPageContentBox from '../../../components/Pages/FullPageReusable/FullPageContentBox';
import FullPageSlideTitle from '../../../components/Pages/FullPageReusable/FullPageSlideTitle';
import FullPageSlideText from '../../../components/Pages/FullPageReusable/FullPageSlideText';
import SkewFullPageContainer from '../../../components/Pages/FullPageReusable/SkewFullPageContainer';
import Section_01_background from '../backgrounds/Section_01_background';

// rendering

function Section_04() {

  return (
    <SkewFullPageContainer>

      <Section_01_background />

      <FullPageContentBox>
        <FullPageSlideTitle title='how to work' />
        <FullPageSlideText>
          With the sense of inferiority, intellectuals pursued scientification by overwhelming introductions on those latest technologies and measures, especially traffic management and mass control.
          They overthought potential threats in the modern world and optismistically foresaw the best effects of new methods;
          in contrast, the concerns of adaptability was seldom evaluated or being raised.
          <br /><br />
          Worse still, intellectuals overinterpreted the role of police force, even misunderstood the concept of police-citizen relation as mutual assimilation.
          For the party-state needs, they even sacrificed professional development to explore social and political usages on state-building.
        </FullPageSlideText>
      </FullPageContentBox>

    </SkewFullPageContainer>
  );
}

export default Section_04;
