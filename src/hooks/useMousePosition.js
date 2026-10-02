import { useState, useEffect } from 'react';

export function useMousePosition() {
  const [mousePosition, setMousePosition] = useState(() => {
    const isTouch = typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0);
    return { x: -100, y: -100, isHovering: false, isTouchDevice: Boolean(isTouch) };
  });

  useEffect(() => {
    if (mousePosition.isTouchDevice) return;

    const handleMouseMove = (e) => {
      setMousePosition((prev) => ({
        ...prev,
        x: e.clientX,
        y: e.clientY
      }));
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      const isInteractive =
        target.closest('button') ||
        target.closest('a') ||
        target.closest('input') ||
        target.closest('select') ||
        target.closest('[role="button"]') ||
        (target.classList && target.classList.contains('interactive-hover'));

      setMousePosition((prev) => ({
        ...prev,
        isHovering: Boolean(isInteractive)
      }));
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [mousePosition.isTouchDevice]);

  return mousePosition;
}
