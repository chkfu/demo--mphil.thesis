// from package
import React from 'react';
// from file
import FullPageSectionContainer from '../../../components/Pages/FullPageReusable/FullPageSectionContainer';
import FullPageContentBox from '../../../components/Pages/FullPageReusable/FullPageContentBox';
import FullPageSlideTitle from '../../../components/Pages/FullPageReusable/FullPageSlideTitle';
import FullPageSlideText from '../../../components/Pages/FullPageReusable/FullPageSlideText';
import Section_08_background from '../backgrounds/Section_08_background';


function Section_08() {
  return (
    <FullPageSectionContainer>

      <Section_08_background />

      <FullPageContentBox>
        <FullPageSlideTitle title='Summary' />
        <FullPageSlideText>
          During the days before Sino-Japanese War (1937-45), the state's insititutional reform was helpless on centralising power of local police systems and its education.
          The failure, however, provided the good soil to cultivate the professional spectrum locally, achieving their another desire of modernisation.
          <br /><br />
          Local police elites ethuasically discussed in the platform of professional journals,
          and further broke the geographical barriers with their overlapping educational and provincial networks.
          Knowledge circulation did brought police elites together, pushing China towards their wished modern state from the bottom.
        </FullPageSlideText>
      </FullPageContentBox>

    </FullPageSectionContainer>
  );
}

export default Section_08;
