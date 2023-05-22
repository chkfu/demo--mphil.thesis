// from package
import React from 'react';
// from file
import HalfPageContentBox from '../../../components/Pages/HalfPageReusable/HalfPageContentBox';
import HalfPageSlideTitle from '../../../components/Pages/HalfPageReusable/HalfPageSlideTitle';
import HalfPageSlideText from '../../../components/Pages/HalfPageReusable/HalfPageSlideText';


function Slide_01() {
  return (
    <HalfPageContentBox>

      <HalfPageSlideTitle title='Academic Cores' />
      <HalfPageSlideText>
        In 1929, Central Government adopted the three-tier system for police education.
        <br /><br />
        Peking Academy (later relocated) was the only tertiary police education in China.
        <br /><br />
        Province-based Academies provided regular offcier training in secondary level. Wealthy areas, particularly Kwangtung, Chekiang and Liaoning, even offered advanced programmes following its rapid development of police studies.
        <br /><br />
        The Constable Schools was the base of police training with practical skills oriented.
      </HalfPageSlideText>

    </HalfPageContentBox>
  );
}

export default Slide_01;;
