import React from 'react';
import { motion } from 'framer-motion';
import { useMousePosition } from '../../hooks/useMousePosition';

export default function CustomCursor() {
  const { x, y, isHovering, isTouchDevice } = useMousePosition();

  // Do not render custom cursor on touch devices
  if (isTouchDevice) return null;

  return (
    <>
      {/* Main Cursor Dot */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-[#B90124] rounded-full pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: x - 6,
          y: y - 6,
          scale: isHovering ? 2.5 : 1,
          backgroundColor: isHovering ? '#60BAB1' : '#B90124'
        }}
        transition={{
          type: 'spring',
          damping: 30,
          stiffness: 400,
          mass: 0.2
        }}
      />

      {/* Trailing Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border-2 border-[#B90124]/40 rounded-full pointer-events-none z-[9998]"
        animate={{
          x: x - 16,
          y: y - 16,
          scale: isHovering ? 1.8 : 1,
          borderColor: isHovering ? '#60BAB1' : 'rgba(185, 1, 36, 0.4)'
        }}
        transition={{
          type: 'spring',
          damping: 25,
          stiffness: 200,
          mass: 0.5
        }}
      />
    </>
  );
}
