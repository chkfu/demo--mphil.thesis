import React from 'react';
// from file
import FullPageContentBox from '../../../components/Pages/FullPageReusable/FullPageContentBox';
import FullPageSlideTitle from '../../../components/Pages/FullPageReusable/FullPageSlideTitle';
import FullPageSlideText from '../../../components/Pages/FullPageReusable/FullPageSlideText';
import SkewFullPageContainer from '../../../components/Pages/FullPageReusable/SkewFullPageContainer';
import Section_01_background from '../backgrounds/Section_01_background';

// rendering

function Section_02() {

  return (
    <SkewFullPageContainer>

      <Section_01_background />

      <FullPageContentBox>
        <FullPageSlideTitle title='Factional Strife' />
        <FullPageSlideText>
          During wartime, the professional unions catalysed the factional strife between different professions and powers.
          <br /><br />
          Since 1936, Dai Li had created the Chinese Police Study Association with Chekiang and Juntong background.
          As competed, Li Shizhen established Study of Police Science to cohere CPA members.
          <br /><br />
          Competed for the professional orthodoxy, both unions published their affiliated journals, Chinese Police and Police Voice, respectively.
          Members further ellaborated earlier ideas for the postwar police reform and  debated against each other.
        </FullPageSlideText>
      </FullPageContentBox>

    </SkewFullPageContainer>
  );
}

export default Section_02;
