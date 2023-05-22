// from package
import React from 'react';
import { Box } from '@mui/material';
// from file
import { color } from './../../../theme/styleDeclaration';
import SkewFullPageContainer from './../../../components/Pages/FullPageReusable/SkewFullPageContainer';
import FullPageContentBox from './../../../components/Pages/FullPageReusable/FullPageContentBox';
import FullPageSlideTitle from './../../../components/Pages/FullPageReusable/FullPageSlideTitle';
import FullPageSlideText from './../../../components/Pages/FullPageReusable/FullPageSlideText';
import Section_05_background from '../backgrounds/Section_05_background';


function Section_05() {
  return (
    <SkewFullPageContainer>

      <Section_05_background />

      <FullPageContentBox>
        <FullPageSlideTitle title='Platform' />
        <FullPageSlideText>
          Even though the academic cores were fragmented, but the social and geographical mobility of professionals did bring their knowledge to different level and places.
          They also strengthened their cohesion with the platforms of police associaton and its affiliated publications.
          A complex network of knowledge circulation thus formed.
          <br /><br />
          Financial expenses and intellectual manpower were always problems to operate professional journals.
          Therefore, Nanking, wealthy areas enjoyed the advantages with their powerful state or regional government supported.
        </FullPageSlideText>
      </FullPageContentBox>

    </SkewFullPageContainer>
  );
}

export default Section_05;
