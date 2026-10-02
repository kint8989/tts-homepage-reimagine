import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const variants = {
  fadeUp: {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  },
  slideLeft: {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 }
  },
  slideRight: {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 }
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.92 },
    visible: { opacity: 1, scale: 1 }
  },
  staggerContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1
      }
    }
  }
};

export default function ScrollReveal({
  children,
  variant = 'fadeUp',
  delay = 0,
  duration = 0.6,
  className = '',
  viewportMargin = '-50px',
  once = true
}) {
  const shouldReduceMotion = useReducedMotion();

  // If user prefers reduced motion, disable transform animations
  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const selectedVariant = variants[variant] || variants.fadeUp;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: viewportMargin }}
      variants={selectedVariant}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
