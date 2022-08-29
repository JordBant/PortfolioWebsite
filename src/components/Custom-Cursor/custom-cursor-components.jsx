import React, {useRef} from 'react'
import { useFollowPointer } from '../../hooks/useFollowPointer'
import { motion } from "framer-motion";
import './custom-cursor.scss'

const CustomCursor = () => {
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);

  return (
    <motion.div
      ref={ref}
      className="cursor"
      animate={{ x, y }}
      transition={{
        type: "spring",
        damping: 50,
        stiffness: 2000,
        restDelta: 0.0001,
      }}
    ></motion.div>
  );
}

export default CustomCursor