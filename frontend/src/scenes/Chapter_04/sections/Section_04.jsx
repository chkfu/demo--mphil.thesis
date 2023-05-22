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
        <FullPageSlideTitle title='Mind Games' />
        <FullPageSlideText>
          Academy faction also support centralised system but intended to transplant different police forces into the regular system.
          Their idea allowed local officials operate their police force under regulations, and the police would culticated local security building but not a complete replacement.
          <br /><br />
          The competition seems the result of power struggling over future police reform; indeed, it projects the contradictions between political ideal and reality.
        </FullPageSlideText>
      </FullPageContentBox>

    </SkewFullPageContainer>
  );
}

export default Section_04;
