// from package
import React from 'react';
// from files
import { useScrollYHook } from '../../../theme/useScrollYHook';
import { emergeLines, slide_mapCentre } from '../../../theme/styleDeclaration';
// from slides

function CenterSwitcher({ setCenter }) {

  // scrolling detector
  let scrollVal = useScrollYHook();

  // declaration
  const divider_01 = emergeLines.chapter01.slide_01_end;
  const divider_02 = emergeLines.chapter01.slide_02_end;
  const divider_03 = emergeLines.chapter01.slide_03_end;
  const divider_04 = emergeLines.chapter01.slide_04_end;

  const center_01 = slide_mapCentre.chapter_01.slide_01;
  const center_02 = slide_mapCentre.chapter_01.slide_02;
  const center_03 = slide_mapCentre.chapter_01.slide_03;
  const center_04 = slide_mapCentre.chapter_01.slide_04;
  const center_05 = slide_mapCentre.chapter_01.slide_05;


  // requirements
  if (scrollVal < divider_01) {
    setCenter(center_01[0]);
  }
  else if (scrollVal > divider_01 && scrollVal < divider_02) {
    setCenter(center_02[0]);
  }
  else if (scrollVal > divider_02 && scrollVal < divider_03) {
    setCenter(center_03[0]);
  }
  else if (scrollVal > divider_03 && scrollVal < divider_04) {
    setCenter(center_04[0]);
  }
  else if (scrollVal > divider_04) {
    setCenter(center_05[0]);
  }
  else return;
}

export default CenterSwitcher;
