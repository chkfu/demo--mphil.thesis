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
        <FullPageSlideTitle title='problem solved?' />
        <FullPageSlideText>
          With decades of efforts on reforms, police elites received far less than they spent.
          <br /><br />
          In 1950, a new police reform was announced, It inherited former ideas and exercised highly top-down control for the party-state.
          Subsequent problems, namely ideological control and the anti-police sentiment,
          again, brought the new discussions over the starting point  - what the police is.
        </FullPageSlideText>
      </FullPageContentBox>

    </SkewFullPageContainer>
  );
}

export default Section_04;
