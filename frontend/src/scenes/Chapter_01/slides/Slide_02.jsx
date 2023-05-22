// from package
import React from 'react';
// from file
import HalfPageContentBox from '../../../components/Pages/HalfPageReusable/HalfPageContentBox';
import HalfPageSlideTitle from '../../../components/Pages/HalfPageReusable/HalfPageSlideTitle';
import HalfPageSlideText from '../../../components/Pages/HalfPageReusable/HalfPageSlideText';


// rendering

function Slide_02() {
  return (
    <HalfPageContentBox>

      <HalfPageSlideTitle title={ `Peking's Model` } />

      <HalfPageSlideText>
        Boxer Rebellion was the turning point of policing development in modern China.
        <br /><br />
        During wartime, foreign commanders created their security forces for their occupation. At that time, Prince Yikuang admired the talent of Japanese Officer Kawashima Naniwa and the outstanding results of Japanese-trained constables.
        <br /><br />
        Later, Kawashima  established Peking Police Academy in 1901. With his supreme power over police education, Kawashima employed many Japanese advisors and imported the training system from Japan.
        The Peking-centred network was therefore formulated.
      </HalfPageSlideText>

    </HalfPageContentBox>
  );
}

export default Slide_02;
