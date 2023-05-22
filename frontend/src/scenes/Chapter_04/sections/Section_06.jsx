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
          The decision of academies integration immediately shrinked the space that both of Nanking and Chekiang communities enjoyed.
          <br /><br />
          The discipline of the party-state did restrict the factional strife,
          however, the "discipline" allowed both of factions compete each other, serving the ruling needs by maintain the balance of powers.
          <br /><br />
          Was the factional strife continue in the new environment of postwar reform?
        </FullPageSlideText>
      </FullPageContentBox>

    </SkewFullPageContainer>
  );
}

export default Section_06;
