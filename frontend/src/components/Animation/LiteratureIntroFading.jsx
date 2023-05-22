import React from 'react';
import { motion } from "framer-motion";


function LiteratureInfoFading({ children }) {

  const animation = {
    opacity: 1,
    transition: {
      type: 'spring', delay: 1, duration: 5
    }
  };

  return (
    <>
      <motion.div
        initial={ { opacity: 0 } }
        animate={ animation }>
        { children }
      </motion.div>
    </>
  );
}

export default LiteratureInfoFading;
