import React, { useEffect } from 'react';
import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';

function SectionTextFading({ children }) {

  const animation = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      animation.start({ y: 0, opacity: 1, transition: { type: 'spring', stiffness: '50', duration: 2, delay: 0.7 } });
    }
    if (!inView) {
      animation.start({ y: '-30px', opacity: 0 });
    }
  }, [animation, inView]);

  return (
    <>
      <motion.div
        initial={ { y: '-30px', opacity: 0 } }
        ref={ ref }
        animate={ animation }>
        { children }
      </motion.div>
    </>
  );
}

export default SectionTextFading;
