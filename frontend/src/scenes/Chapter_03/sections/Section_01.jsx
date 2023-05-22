import React from 'react';
// from file
import FullPageContentBox from './../../../components/Pages/FullPageReusable/FullPageContentBox';
import FullPageSlideTitle from './../../../components/Pages/FullPageReusable/FullPageSlideTitle';
import FullPageSlideText from './../../../components/Pages/FullPageReusable/FullPageSlideText';
import SkewFullPageContainer from '../../../components/Pages/FullPageReusable/SkewFullPageContainer';
import Section_01_background from './../backgrounds/Section_01_background';

// rendering

function Section_01() {

  return (
    <SkewFullPageContainer>

      <Section_01_background />

      <FullPageContentBox>
        <FullPageSlideTitle title='how to Learn' />
        <FullPageSlideText>
          Imitation was a complicated question of modern state-building. Except the imagination, practical considerations of long-term problem and current needs were the real challenges.
          <br /><br />
          Next, they had to design the optimal scale of police model by asking 'what to learn', and considering the a series of questions on 'how to learn' from theorectical basis to actual practiice.
        </FullPageSlideText>
      </FullPageContentBox>

    </SkewFullPageContainer>
  );
}

export default Section_01;
