import React from 'react';
// form file
import { emergeLines, map_settings } from '../../../theme/styleDeclaration';
import HalfPageSectionContainer from '../../../components/Pages/HalfPageReusable/HalfPageSectionContainer';
import HalfPageMapGrid from '../../../components/Pages/HalfPageReusable/HalfPageMapGrid';
import HalfPageTextGrid from '../../../components/Pages/HalfPageReusable/HalfPageTextGrid';
import SlideSwitcher from '../switcher/SlideSwitcher';


// rendering 

function Section_03({ data }) {
  return (
    <HalfPageSectionContainer
      height={ emergeLines.chapter01.length }
      emerge={ emergeLines.chapter01.slide_00_end }>

      {/* display map */ }
      <HalfPageMapGrid
        data={ data }
        center={ map_settings.map_details.chapter01.center }
        zoom={ map_settings.map_details.chapter01.zoom } />

      {/* display texts */ }
      <HalfPageTextGrid>
        <SlideSwitcher />
      </HalfPageTextGrid>

    </HalfPageSectionContainer>
  );
}

export default Section_03;
