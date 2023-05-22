// from package
import React from "react";
// from file
import { emergeLines, map_settings } from "../../../theme/styleDeclaration";
import HalfPageSectionContainer from "../../../components/Pages/HalfPageReusable/HalfPageSectionContainer";
import HalfPageMapGrid from "../../../components/Pages/HalfPageReusable/HalfPageMapGrid";
import HalfPageTextGrid from "../../../components/Pages/HalfPageReusable/HalfPageTextGrid";
import SlideSwitcher from "../switcher/SlideSwitcher";


function Section_04({ data }) {
  return (
    <HalfPageSectionContainer
      height={ emergeLines.chapter02.length }
      emerge={ emergeLines.chapter02.slide_00_end }>

      {/* display map */ }
      <HalfPageMapGrid
        data={ data }
        center={ map_settings.map_details.chapter02.center }
        zoom={ map_settings.map_details.chapter02.zoom } />

      {/* display texts */ }
      <HalfPageTextGrid>
        <SlideSwitcher />
      </HalfPageTextGrid>

    </HalfPageSectionContainer>
  );
}

export default Section_04;
