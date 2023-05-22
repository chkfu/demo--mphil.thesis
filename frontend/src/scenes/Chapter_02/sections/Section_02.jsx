import React from 'react';
// from file
import FullPageContentBox from './../../../components/Pages/FullPageReusable/FullPageContentBox';
import FullPageSlideTitle from './../../../components/Pages/FullPageReusable/FullPageSlideTitle';
import FullPageSlideText from './../../../components/Pages/FullPageReusable/FullPageSlideText';
import FullPageSectionContainer from '../../../components/Pages/FullPageReusable/FullPageSectionContainer';
import Section_02_background from '../backgrounds/Section_02_background';

// rendering

function Section_02() {

  return (
    <FullPageSectionContainer>

      <Section_02_background />

      <FullPageContentBox>
        <FullPageSlideTitle title='Top-down reform' />
        <FullPageSlideText>
          Top-down measures were restricted.
          Firstly, managerial groups of police reform were short-lived.
          The new Professional Committee was only an advisory without regular composition.
          Naitonal Congresses in 1930-31 offered a blueprint of police reform, but further meeting was suspended until next decade.
          <br /><br />
          Besides, local resistance still challenged the new reform. Nationalist Government streamlined provincial system to enhance their control over minicipalities.
          They also adopted a three-year plan to standardise creation and composition of local police system. With conflict of power, therefore, regional governments were not supportive enough to the police reform.
        </FullPageSlideText>
      </FullPageContentBox>

    </FullPageSectionContainer>
  );
}

export default Section_02;
