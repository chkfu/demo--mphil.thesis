// from package
import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
// from file
import { color } from './../../../theme/styleDeclaration';
import SkewFullPageContainer from '../../../components/Pages/FullPageReusable/SkewFullPageContainer';
import FullPageContentBox from './../../../components/Pages/FullPageReusable/FullPageContentBox';
import Section_06_background from '../backgrounds/Section_06_background';
import FullPageSlideTitle from './../../../components/Pages/FullPageReusable/FullPageSlideTitle';
import FullPageSlideText from './../../../components/Pages/FullPageReusable/FullPageSlideText';


function Section_06() {
  return (
    <SkewFullPageContainer>

      <Section_06_background />

      <FullPageContentBox>
        <FullPageSlideTitle title='Platform' />

        <FullPageSlideText>
          Initially, police ideas only occupied a section in official gazettes. Later, the emergence of academy publications changed it.
          Monthly of Higher Police Academy (Nanking, 1934-36), the Police's Light' series (Chekiang, 1932-36) and Police's Lamp (Shanghai, 1934-36) were the dominated voice of police studies.
          <br /><br />
          As alumni / local elites operated journals, Modern Police (Peking, 1933-36), Police Managazine (Kwangtung, 1929-35) and Chekiang Police Magazine were also the core reading materials in their own region.
          <br /><br />
          Journals, therefore, were a stage of professional performance to fight for the better career path.
        </FullPageSlideText>

      </FullPageContentBox>
    </SkewFullPageContainer>
  );
}

export default Section_06;
