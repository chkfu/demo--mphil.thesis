// from package
import React from 'react';
// from file
import HalfPageContentBox from '../../../components/Pages/HalfPageReusable/HalfPageContentBox';
import HalfPageSlideTitle from '../../../components/Pages/HalfPageReusable/HalfPageSlideTitle';
import HalfPageSlideText from '../../../components/Pages/HalfPageReusable/HalfPageSlideText';


function Slide_01() {
  return (
    <HalfPageContentBox>

      <HalfPageSlideTitle title='Coersive Restructure' />
      <HalfPageSlideText>
        In 1936, Nationalist Government finally restructured police edication for the upcoming war.
        They merged Nanking and Chekiang Acadamies; meanwhile, they terminated entire academies over China.
        <br /> <br />
        The new Central Police Academy ("CPA") seems united the police sector;
        in contrast, it sparked the storm of factional strife which began with the inner-school competition.
        <br /> <br />
        How did the factional powers change the environemnt of the police sector?
      </HalfPageSlideText>

    </HalfPageContentBox>
  );
}

export default Slide_01;;
