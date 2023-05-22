// from package
import React from 'react';
// from file
import HalfPageContentBox from '../../../components/Pages/HalfPageReusable/HalfPageContentBox';
import HalfPageSlideTitle from '../../../components/Pages/HalfPageReusable/HalfPageSlideTitle';
import HalfPageSlideText from '../../../components/Pages/HalfPageReusable/HalfPageSlideText';


// rendering

function Slide_05() {
  return (
    <HalfPageContentBox>

      <HalfPageSlideTitle title={ `Beiyang's Failures` } />

      <HalfPageSlideText>
        The succeeding Beiyang Government attempted to keep the original settings and to strive on centralising power.
        <br /><br />
        But the deteriorated political situation granted local leaders larger flexibility, which exaggerated the geographical difference over China.
        <br /><br />
        The financial problems also theatened the continuity of police system as well. For saving police expense, conservatives even raised backwardness ideas, namely funding slashs, military-police assimilation, and revival of traditional baojia.
        <br /><br />
        At least, people explored deeper towards how to realise policing with their limitations, rather than staying in those basic concepts that previously imported.
      </HalfPageSlideText>

    </HalfPageContentBox>
  );
}

export default Slide_05;
