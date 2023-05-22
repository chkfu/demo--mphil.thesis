// from package
import React from 'react';
// from file
import HalfPageContentBox from '../../../components/Pages/HalfPageReusable/HalfPageContentBox';
import HalfPageSlideTitle from '../../../components/Pages/HalfPageReusable/HalfPageSlideTitle';
import HalfPageSlideText from '../../../components/Pages/HalfPageReusable/HalfPageSlideText';


function Slide_02() {
  return (
    <HalfPageContentBox>
      <HalfPageSlideTitle title='Academic Cores' />
      <HalfPageSlideText>
        Peking Academy had been subsequently transformed since Kawashima Naniwa created,
        and became stablised after Beiyang Government restructured in 1917.
        <br /><br />
        The Academy deeply inherited the Japanese tradition.
        Nearly a half of teaching staffs came from Japanese-studied background.
        It also sent graduates and staff to Japan for training and visits before 1931.
        <br /><br />
        As the highest insitution, the Academy trained many provincial students for regional agencies, as a professional hub in Northern China.
        <br /><br />
        With the state inteventions, the academy relocated to Nanking in 1934 and finally transformed into Central Police Academy in 1936.
      </HalfPageSlideText>
    </HalfPageContentBox>
  );
}

export default Slide_02;;
