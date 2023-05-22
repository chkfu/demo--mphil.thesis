// from package
import React from 'react';
// from files
import { useScrollYHook } from '../../../theme/useScrollYHook';
import { emergeLines } from './../../../theme/styleDeclaration';
// from slides
import Slide_01 from '../slides/Slide_01';
import Slide_02 from '../slides/Slide_02';
import Slide_03 from '../slides/Slide_03';
import Slide_04 from '../slides/Slide_04';
import Slide_05 from '../slides/Slide_05';

function SlideSwitcher() {

  // scrolling detector
  let scrollVal = useScrollYHook();

  // declaration
  const divider_01 = emergeLines.chapter02.slide_01_end;
  const divider_02 = emergeLines.chapter02.slide_02_end;
  const divider_03 = emergeLines.chapter02.slide_03_end;
  const divider_04 = emergeLines.chapter02.slide_04_end;
  const divider_05 = emergeLines.chapter02.slide_05_end;
  // requirements
  if (scrollVal < divider_01) {
    return <Slide_01 />;
  }
  else if (scrollVal > divider_01 && scrollVal < divider_02) {
    return <Slide_02 />;
  }
  else if (scrollVal > divider_02 && scrollVal < divider_03) {
    return <Slide_03 />;
  }
  else if (scrollVal > divider_03 && scrollVal < divider_04) {
    return <Slide_04 />;
  }
  else if (scrollVal > divider_04) {
    return <Slide_05 />;
  }
  else return;
}

export default SlideSwitcher;
