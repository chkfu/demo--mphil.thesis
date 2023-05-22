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
        <FullPageSlideTitle title='National Police Agency' />
        <FullPageSlideText>
          As the highest police authority, National Police Agency became the new battlefield of factional strife.
          <br /><br />
          To secure his power after upcoming Juntong dismissal, Dai Li ethusiasitically supported his Juntong cadre to be the Head of agency; meanwhile, Li Shizhen also recommended the Zhongtong and CPA cadres to fight for the vacaccy.
          <br /><br />
          Surprisingly, Tang Zong, an outsider of police sector, was appointed following the sudden death of Dai Li in 1947.
        </FullPageSlideText>
      </FullPageContentBox>

    </SkewFullPageContainer>
  );
}

export default Section_01;
