import React from 'react';
// from file
import FullPageContentBox from './../../../components/Pages/FullPageReusable/FullPageContentBox';
import FullPageSlideTitle from './../../../components/Pages/FullPageReusable/FullPageSlideTitle';
import FullPageSlideText from './../../../components/Pages/FullPageReusable/FullPageSlideText';
import SkewFullPageContainer from '../../../components/Pages/FullPageReusable/SkewFullPageContainer';
import Section_01_background from '../../Chapter_02/backgrounds/Section_01_background';

// rendering

function Section_01() {

  return (
    <SkewFullPageContainer>

      <Section_01_background />

      <FullPageContentBox>
        <FullPageSlideTitle title='Preparation for learning' />
        <FullPageSlideText>
          Reformation, was a new fashion under the Nationalists' control. Not only the promise did Nationalists make, they also required new settings for their management.
          <br /><br />
          The development of policing was bi-directional. While the government kept revising on the police system, the elites also contributed sustantially with their local-based professional networks.
          <br /><br />
        </FullPageSlideText>
      </FullPageContentBox>

    </SkewFullPageContainer>
  );
}

export default Section_01;
