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
        <FullPageSlideTitle title='summary' />
        <FullPageSlideText>
          Nationalist Government finally established a police system for centralisation.
          By appointing an outsider, the ruler maintained the balance of police sector; at least, it was under his control.
          <br /><br />
          Problems of postwar reforms seems a failure.
          Factional strifes also damaged what reforms timely built.
          However, the professionals turned fragmented ideas into feasible proposals and finally found the way to develop their modern police.
          <br /><br />
          With dynamic situations, postwar reform was terminated and its ideas failed to transplant.
          Intellectual thoughts kept accumulating and evolving.
          Reforms were recurring but its progress was not.

        </FullPageSlideText>
      </FullPageContentBox>

    </SkewFullPageContainer>
  );
}

export default Section_05;
