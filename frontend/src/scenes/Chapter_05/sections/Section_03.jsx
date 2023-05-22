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
        <FullPageSlideTitle title='Fall of the Elites' />
        <FullPageSlideText>
          In 1947, Li Shizhen left his position from CPA under pressure.
          For his return, Li proposed to establish the new Ministry over Agency's contol;
          however, he failed to get the approval from the government and never went back to the top-tier again.
          <br /><br />
          Juntong faction's triumph was also not lasting for long.
          The Agency was extremely shortlived, and the police reform finally failed due to the loss of the mainland control in 1949.
          <br /><br />
        </FullPageSlideText>
      </FullPageContentBox>

    </SkewFullPageContainer>
  );
}

export default Section_03;
