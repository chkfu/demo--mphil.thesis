import React from 'react';
import { motion } from "framer-motion";


function LiteratureInfoFading({ children }) {

  const animation = {
    x: '0',
    opacity: 1,
    transition: {
      type: 'spring', delay: 0.5, duration: 3
    }
  };

  return (
    <>
      <motion.div
        initial={ { x: '100px', opacity: 0 } }
        animate={ animation }>
        { children }
      </motion.div>
    </>
  );
}

export default LiteratureInfoFading;
