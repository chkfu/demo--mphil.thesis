// from package
import React from 'react';
// from file
import HalfPageContentBox from '../../../components/Pages/HalfPageReusable/HalfPageContentBox';
import HalfPageSlideTitle from '../../../components/Pages/HalfPageReusable/HalfPageSlideTitle';
import HalfPageSlideText from '../../../components/Pages/HalfPageReusable/HalfPageSlideText';


function Slide_03() {
  return (
    <HalfPageContentBox>

      <HalfPageSlideTitle title='Academic Cores' />
      <HalfPageSlideText>
        In 1928, Comissioner Chu Chia-hua created Chekiang Academy for local police reform.
        Apart from the huge investment, the Academy itself also imitate the high standards of tertiary education.
        <br /><br />
        The Academy flavored the models from Austria and Japan.
        It hired foreign advisors and developed its own scientific facilities.
        Elite graduates were also sent to Vienna and Tokyo for training.
        <br /><br />
        Since 1932, the spymaster Dai Li gradually control the academy management.
        Oversea-trained experts were employed for his aim to create the professional police force..
        <br /><br />
        Hence, Chekiang Academy soon became a leading insititution in the Southern China.
      </HalfPageSlideText>

    </HalfPageContentBox>
  );
}

export default Slide_03;;;
