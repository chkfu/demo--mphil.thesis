import React from 'react';
// from file
import FullPageContentBox from '../../../components/Pages/FullPageReusable/FullPageContentBox';
import FullPageSlideTitle from '../../../components/Pages/FullPageReusable/FullPageSlideTitle';
import FullPageSlideText from '../../../components/Pages/FullPageReusable/FullPageSlideText';
import SkewFullPageContainer from '../../../components/Pages/FullPageReusable/SkewFullPageContainer';
import Section_01_background from '../backgrounds/Section_01_background';

// rendering

function Section_06() {

  return (
    <SkewFullPageContainer>

      <Section_01_background />

      <FullPageContentBox>
        <FullPageSlideTitle title='Summary' />
        <FullPageSlideText>
          Instead of focusing on the system, the reformists did care about the coherence of police system, from individual to collective, from theory to practice.
          <br /><br />
          They keened on latest skills and knowledges; nevertheless, overlooked their adoption in the poor-developed society.
          Deteriorated situations further redirected the discussions towards nationalism and militarism, which diverged original ideas of the police.
          <br /><br />
          At least, they ellaborated overwhelming ideas, supporting the unprecedented growth of policing during wartime later.
        </FullPageSlideText>
      </FullPageContentBox>

    </SkewFullPageContainer>
  );
}

export default Section_06;
