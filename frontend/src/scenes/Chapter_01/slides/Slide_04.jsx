// from package
import React from 'react';
// from file
import HalfPageContentBox from '../../../components/Pages/HalfPageReusable/HalfPageContentBox';
import HalfPageSlideTitle from '../../../components/Pages/HalfPageReusable/HalfPageSlideTitle';
import HalfPageSlideText from '../../../components/Pages/HalfPageReusable/HalfPageSlideText';


// rendering

function Slide_04() {
  return (
    <HalfPageContentBox>

      <HalfPageSlideTitle title='National Policing' />

      <HalfPageSlideText>
        In 1905, the Ministry of Police is established to manage police affairs
        nationwide. Avoiding the reliance on Japanese experts, MoP appointed 2 Yuan's subordinates as directors, and further hired overseas-trained and jurisdical graduates into police agencies.
        <br /><br />
        As the eight-year reform announced, the national policing network would be developed from the state to the local level, before the end of 1915. However, the reform never succeed under serious concerns finance and localism. At least, no obvious change did made before the Qing monarchy collapsed.
      </HalfPageSlideText>

    </HalfPageContentBox>
  );
}

export default Slide_04;
