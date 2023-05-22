// from package
import React from 'react';
// from files
import { useScrollYHook } from '../../../theme/useScrollYHook';
import { emergeLines } from '../../../theme/styleDeclaration';
// from slides
import Slide_01 from '../slides/Slide_01';
import Slide_02 from '../slides/Slide_02';

function SlideSwitcher() {

  // scrolling detector
  let scrollVal = useScrollYHook();

  // declaration
  const divider_01 = emergeLines.chapter04.slide_01_end;
  const divider_02 = emergeLines.chapter04.slide_02_end;
  const divider_03 = emergeLines.chapter04.slide_03_end;
  const divider_04 = emergeLines.chapter04.slide_04_end;
  const divider_05 = emergeLines.chapter04.slide_05_end;
  // requirements
  if (scrollVal < divider_01) {
    return <Slide_01 />;
  }
  else if (scrollVal > divider_01 && scrollVal < divider_03) {
    return <Slide_02 />;
  }
  else return;
}

export default SlideSwitcher;
