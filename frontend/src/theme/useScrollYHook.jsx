import React, { useState, useEffect } from 'react';

export const useScrollYHook = () => {

  // state management
  const [scrollVal, setScrollVal] = useState(window.scrollY);

  // mounting
  useEffect(() => {
    window.addEventListener('scroll', () => {
      const value = window.scrollY;
      setScrollVal(value);
    });
    window.removeEventListener('scroll', () => {
      const value = window.scrollY;
      setScrollVal(value);
    });
  }, [window.scrollY]);

  // rendering
  return scrollVal;
}

