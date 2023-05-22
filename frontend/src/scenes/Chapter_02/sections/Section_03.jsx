import React from 'react';
// from file
import FullPageContentBox from './../../../components/Pages/FullPageReusable/FullPageContentBox';
import FullPageSlideTitle from './../../../components/Pages/FullPageReusable/FullPageSlideTitle';
import FullPageSlideText from './../../../components/Pages/FullPageReusable/FullPageSlideText';
import FullPageSectionContainer from '../../../components/Pages/FullPageReusable/FullPageSectionContainer';
import Section_03_background from '../backgrounds/Section_03_background';

// rendering

function Section_03() {

  return (
    <FullPageSectionContainer>

      <Section_03_background />

      <FullPageContentBox>
        <FullPageSlideTitle title='top-down reform' />
        <FullPageSlideText>
          Despite of national standards, police education was provincial-dominated.
          <br /><br />
          Geographical differences were crucial in this phenomena. The three-year plan standardised police education in enrollment, training and accessment;
          indeed, many provinces failed to meet the targets because of their poor financial abilities and professional facilities.
          <br /><br />
          With special needs, provinces timely developed their police training system with their own security concerns.
          Sharing the connections, the professionals gradually formed professional networks with their affiliated institutions, and further published police journals as the platform of knowledge circulation.
        </FullPageSlideText>
      </FullPageContentBox>

    </FullPageSectionContainer>
  );
}

export default Section_03;
