import React from 'react';
// from file
import FullPageContentBox from '../../../components/Pages/FullPageReusable/FullPageContentBox';
import FullPageSlideTitle from '../../../components/Pages/FullPageReusable/FullPageSlideTitle';
import FullPageSlideText from '../../../components/Pages/FullPageReusable/FullPageSlideText';
import SkewFullPageContainer from '../../../components/Pages/FullPageReusable/SkewFullPageContainer';
import Section_01_background from '../backgrounds/Section_01_background';

// rendering

function Section_01() {

  return (
    <SkewFullPageContainer>

      <Section_01_background />

      <FullPageContentBox>
        <FullPageSlideTitle title='the final battle' />
        <FullPageSlideText>
          Challenged by Li Shizhen, finally, Juntong leaders settled their members in the Agency and Traffic Police Bureau.
          <br /><br />
          Later, the Agency tried to override Li's proposal with their 5-year proposal.
          The new plan separated police and security force in defferent systems.
          It further retrieved three-tier education to avoid CPA's monopoly over the police sector.
          But the proposal was also not approved.
          <br /><br />
          The finalised plan eventually adopted the highlighted ideas from Agency's proposal.
          Tang Zong therefore received his control over both of the police and the security systems, as the winner of timely competitions.
        </FullPageSlideText>
      </FullPageContentBox>

    </SkewFullPageContainer>
  );
}

export default Section_01;
