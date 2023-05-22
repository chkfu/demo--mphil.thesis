// from package
import React from 'react';
// from file
import FullPageContentBox from './../../../components/Pages/FullPageReusable/FullPageContentBox';
import FullPageSlideTitle from './../../../components/Pages/FullPageReusable/FullPageSlideTitle';
import FullPageSlideText from './../../../components/Pages/FullPageReusable/FullPageSlideText';
import FullPageSectionContainer from './../../../components/Pages/FullPageReusable/FullPageSectionContainer';
import Section_02_background from './../backgrounds/Section_02_background';


// rendering

function Section_02() {
  return (
    <FullPageSectionContainer>

      <Section_02_background />

      <FullPageContentBox>
        <FullPageSlideTitle title='Unintended Result' />
        <FullPageSlideText>
          The idea of 'policing' can be traced since the book 'Japanese History' recorded in 1887.
          <br /> <br />
          Unlike the state's military focus, the author Huang Junxian further explored Japanese politics and society with his diplomatic experience.
          <br /> <br />
          Relevant descriptions only occupied few paragraphs; however, those words brought the core ideas of policing
          (i.e. Risk removal, hygeine, accusation and detection).
          <br /> <br />
        </FullPageSlideText>
      </FullPageContentBox>

    </FullPageSectionContainer>
  );
}

export default Section_02;
