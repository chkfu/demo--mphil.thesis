import React, { useEffect } from 'react';
import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';

function SectionTitleFading({ children }) {

  const animation = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      animation.start({
        y: 0,
        opacity: 1,
        transition: {
          type: 'spring',
          stiffness: '100',
          duration: 2,
          delay: 0.2
        }
      });
    }
    if (!inView) {
      animation.start({
        y: '-100px',
        opacity: 0
      });
    }
  }, [animation, inView]);

  return (
    <>
      <motion.div
        initial={ {
          y: '-100px',
          opacity: 0
        } }
        ref={ ref }
        animate={ animation }>
        { children }
      </motion.div>
    </>
  );
}

export default SectionTitleFading;
