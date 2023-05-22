import React, { useEffect } from 'react';
import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';

function SectionContainerFading({ children }) {

  const animation = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      animation.start({ y: 0, opacity: 1, transition: { delay: 0 } });
    }
    if (!inView) {
      animation.start({ y: '-20px', opacity: 0 });
    }
  }, [animation, inView]);

  return (
    <>
      <motion.div
        initial={ { y: '-100px', opacity: 0 } }
        ref={ ref }
        animate={ animation }>
        { children }
      </motion.div>
    </>
  );
}

export default SectionContainerFading;
