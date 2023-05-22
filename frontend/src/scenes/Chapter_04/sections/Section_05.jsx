import React from 'react';
// from file
import FullPageContentBox from '../../../components/Pages/FullPageReusable/FullPageContentBox';
import FullPageSlideTitle from '../../../components/Pages/FullPageReusable/FullPageSlideTitle';
import FullPageSlideText from '../../../components/Pages/FullPageReusable/FullPageSlideText';
import SkewFullPageContainer from '../../../components/Pages/FullPageReusable/SkewFullPageContainer';
import Section_01_background from '../backgrounds/Section_01_background';

// rendering

function Section_05() {

  return (
    <SkewFullPageContainer>

      <Section_01_background />

      <FullPageContentBox>
        <FullPageSlideTitle title='Participation of Spy Agencies' />
        <FullPageSlideText>
          The situation deteriorated since 1942. With the advantages of spy agency, Dai Li cultivated thier Special Police cadres with resources from Juntong.
          He accussed Li Shizhen's alliance with his spy competitor Zhongtong agency and their exclusion of Juntong and Special Police members.
          Even CPA dean replacement was suggested.
          <br /><br />
          On the other side, Li Shizhen proposed to develop veteran training programme in CPA and a 10-year-plan for postwar reform.
          The Dean further recommended Zhongtong cadres to positions in the postwar police system, as the counterattack against his competitor.
        </FullPageSlideText>
      </FullPageContentBox>

    </SkewFullPageContainer>
  );
}

export default Section_05;
