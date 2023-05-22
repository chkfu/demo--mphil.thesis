import React from 'react';
// from file
import FullPageContentBox from '../../../components/Pages/FullPageReusable/FullPageContentBox';
import FullPageSlideTitle from '../../../components/Pages/FullPageReusable/FullPageSlideTitle';
import FullPageSlideText from '../../../components/Pages/FullPageReusable/FullPageSlideText';
import SkewFullPageContainer from '../../../components/Pages/FullPageReusable/SkewFullPageContainer';
import Section_01_background from '../backgrounds/Section_01_background';

// rendering

function Section_03() {

  return (
    <SkewFullPageContainer>

      <Section_01_background />

      <FullPageContentBox>
        <FullPageSlideTitle title='Mind Games' />
        <FullPageSlideText>
          Faction members could only searched for differences within the framework of the authoritainship's needs.
          <br /><br />
          Juntong faction saw the police as the only state-run agency of national security.
          They separated special police from the regular system which instructed by the Superintendents without regulated.
          And local security forces were proposed to transplanted and unified into the top-down police system.
        </FullPageSlideText>
      </FullPageContentBox>

    </SkewFullPageContainer>
  );
}

export default Section_03;
