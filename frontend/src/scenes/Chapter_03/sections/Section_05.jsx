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
        <FullPageSlideTitle title='How to adapt' />
        <FullPageSlideText>
          Under the military-first policies, the role of police force was getting important with its local functions.
          Intellectuals saw the police force as military reservists; meanwhile, the administrator to educate and organise the masses for further support.
          During the wartime, the police functions of prevention, surveilience and mass management could further assist for military use.
          <br /><br />
          The affordability of police force was a big question due to its heavy and motley duties.
          Later discussions mostly focused on wartime role-playing of police force, redirected their modern state-building towards militarism.
          Thus, the Chinese police model started to derive from its social-oriented mission.

        </FullPageSlideText>
      </FullPageContentBox>

    </SkewFullPageContainer>
  );
}

export default Section_05;
