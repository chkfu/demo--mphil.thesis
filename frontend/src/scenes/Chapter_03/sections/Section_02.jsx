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
        <FullPageSlideTitle title='how to understand' />
        <FullPageSlideText>
          Nation salvation became the main trend of professional discussions in the 1930s.
          <br /><br />
          As suggested, modern police was responsible for enforcement and administration; and specifically, educating public in the modern-transforming society.
          They even imposed political requirements, particularly the emerged image of 'revolutionary police', to consolidate the Nationalist party-state control.
          <br /><br />
          Their differrent understandings made the discussions more complexed, leading the future model to be irrealistic.
        </FullPageSlideText>
      </FullPageContentBox>

    </SkewFullPageContainer>
  );
}

export default Section_02;
