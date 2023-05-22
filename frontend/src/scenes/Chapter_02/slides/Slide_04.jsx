// from package
import React from 'react';
// from file
import HalfPageContentBox from '../../../components/Pages/HalfPageReusable/HalfPageContentBox';
import HalfPageSlideTitle from '../../../components/Pages/HalfPageReusable/HalfPageSlideTitle';
import HalfPageSlideText from '../../../components/Pages/HalfPageReusable/HalfPageSlideText';


function Slide_04() {
  return (
    <HalfPageContentBox>
      <HalfPageSlideTitle title='Academic Cores' />
      <HalfPageSlideText>
        Localism benefited Fengtien (Liaoning) Police Academy to be an independent system in the Northeastern China.
        Ignored the state regulations, provincial governemnt upgraded its Academy as tertiary institution in 1929.
        <br /><br />
        For the border needs, the Academy focused on military and diplomatic training, alongside with programmes that tertiary education provided.
        Insead of the Japanese-oriented traditions, diverse backgrounds of overseas-trained staff shows the mature development of their education in this period.
        <br /><br />
        Unfortunately, the Academy was terminated due to Japanese invasions during the Mukden Incident in 1931.
      </HalfPageSlideText>
    </HalfPageContentBox>
  );
}

export default Slide_04;
