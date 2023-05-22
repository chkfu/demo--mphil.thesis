// from package
import React from 'react';
// from file
import HalfPageContentBox from '../../../components/Pages/HalfPageReusable/HalfPageContentBox';
import HalfPageSlideTitle from '../../../components/Pages/HalfPageReusable/HalfPageSlideTitle';
import HalfPageSlideText from '../../../components/Pages/HalfPageReusable/HalfPageSlideText';


function Slide_01() {
  return (
    <HalfPageContentBox>

      <HalfPageSlideTitle title='First Attempt' />
      <HalfPageSlideText>
        The experiment finally came with the wave of the Hundred Days' Reform in 1898.
        <br /><br />
        Supported by the Reformists, Huang and his company established Security Bureau in Hunan Province. They formed the central bureau with its branches subordinated, as the projection of national policing. The constables also carried municipal duties alongside with police services.
        <br /><br />
        Disappointedly, the bureau was soon abolished due to the failed coup that Reformists triggered.
      </HalfPageSlideText>

    </HalfPageContentBox>
  );
}

export default Slide_01;
