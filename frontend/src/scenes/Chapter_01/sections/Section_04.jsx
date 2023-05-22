// from package
import React from 'react';
// from file
import FullPageContentBox from './../../../components/Pages/FullPageReusable/FullPageContentBox';
import FullPageSlideTitle from './../../../components/Pages/FullPageReusable/FullPageSlideTitle';
import FullPageSlideText from './../../../components/Pages/FullPageReusable/FullPageSlideText';
import FullPageSectionContainer from './../../../components/Pages/FullPageReusable/FullPageSectionContainer';
import Section_04_background from '../backgrounds/Section_04_background';

// rendering

function Section_04() {
  return (
    <FullPageSectionContainer>

      <Section_04_background />

      <FullPageContentBox>
        <FullPageSlideTitle title='Lessons to learn' />
        <FullPageSlideText>
          Unlike Meiji Japan, Qing China was frustrated by the context of rising localism and disappointed modernising progress. It is proven that copying foreign model would not be worked.
          <br /><br />
          Centralisation and modernisation were the first piority for the Chinese state-building.
          After the unification in 1928, the Naitonalists had to study again on modern policing, from its concpets, functions, composition to its operation, thoroughly.
          <br /><br />
          A reform that matchs current age and China itself was what they wanted.
        </FullPageSlideText>
      </FullPageContentBox>

    </FullPageSectionContainer>
  );
}

export default Section_04;


