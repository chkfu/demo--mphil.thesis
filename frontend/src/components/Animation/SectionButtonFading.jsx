import React, { useEffect } from 'react';
import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';

function SectionButtonFading({ children }) {

  const animation = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      animation.start({ y: 0, opacity: 1, transition: { duration: 2, delay: 1.2 } });
    }
    if (!inView) {
      animation.start({ y: 0, opacity: 0 });
    }
  }, [animation, inView]);

  return (
    <>
      <motion.div
        initial={ { y: 0, opacity: 0 } }
        ref={ ref }
        animate={ animation }>
        { children }
      </motion.div>
    </>
  );
}

export default SectionButtonFading;
