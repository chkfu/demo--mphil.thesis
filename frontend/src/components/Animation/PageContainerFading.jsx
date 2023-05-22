import React from 'react';
import { motion } from 'framer-motion';

function PageContainerFading({ children }) {
  return (
    <motion.div
      initial={ { x: '-100vw', opacity: 0, scale: 0.5 } }
      animate={ { x: 0, opacity: 1, scale: 1 } }
      transition={ {
        scale: { stiffness: 1000, velocity: -100, duration: 0.1 }
      } }
    >
      { children }
    </motion.div>
  );
}

export default PageContainerFading;
