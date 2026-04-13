'use client';

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [clicking, setClicking] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [mounted, setMounted] = useState(false);

  const rawX = useMotionValue(-100);
  const rawY = useMotionValue(-100);

  const x = useSpring(rawX, { stiffness: 400, damping: 28 });
  const y = useSpring(rawY, { stiffness: 400, damping: 28 });

  const xDot = useSpring(rawX, { stiffness: 1000, damping: 40 });
  const yDot = useSpring(rawY, { stiffness: 1000, damping: 40 });

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;
    setMounted(true);

    function onMove(e: MouseEvent) {
      rawX.set(e.clientX);
      rawY.set(e.clientY);
      if (!visible) setVisible(true);
    }

    function onDown() { setClicking(true); }
    function onUp()   { setClicking(false); }

    function onEnter(e: MouseEvent) {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, [data-cursor="pointer"]')) {
        setHovering(true);
      }
    }

    function onLeave(e: MouseEvent) {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, [data-cursor="pointer"]')) {
        setHovering(false);
      }
    }

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);
    window.addEventListener('mouseover', onEnter);
    window.addEventListener('mouseout', onLeave);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
      window.removeEventListener('mouseover', onEnter);
      window.removeEventListener('mouseout', onLeave);
    };
  }, [visible, rawX, rawY]);

  if (!mounted || !visible) return null;

  return createPortal(
    <>
      <motion.div
        style={{
          x,
          y,
          position: 'fixed',
          top: 0,
          left: 0,
          width: hovering ? 44 : clicking ? 28 : 36,
          height: hovering ? 44 : clicking ? 28 : 36,
          borderRadius: '50%',
          border: `1.5px solid ${hovering ? 'var(--accent)' : 'rgba(240,240,238,0.5)'}`,
          pointerEvents: 'none',
          zIndex: 9999,
          translateX: '-50%',
          translateY: '-50%',
          mixBlendMode: hovering ? 'normal' : 'difference',
          transition: 'width 0.2s ease, height 0.2s ease, border-color 0.2s ease',
        }}
      />
      <motion.div
        style={{
          x: xDot,
          y: yDot,
          position: 'fixed',
          top: 0,
          left: 0,
          width: hovering ? 6 : 5,
          height: hovering ? 6 : 5,
          borderRadius: '50%',
          background: hovering ? 'var(--accent)' : 'var(--text)',
          pointerEvents: 'none',
          zIndex: 9999,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
    </>,
    document.body
  );
}