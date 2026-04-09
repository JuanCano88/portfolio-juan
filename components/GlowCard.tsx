'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import styles from '@/app/works/works.module.css';

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function GlowCard({ children, className }: Props) {
  const cardRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!cardRef.current || !glowRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    glowRef.current.style.setProperty('--mouse-x', `${x}%`);
    glowRef.current.style.setProperty('--mouse-y', `${y}%`);
    glowRef.current.style.opacity = '1';
  }

  function handleMouseLeave() {
    if (!glowRef.current) return;
    glowRef.current.style.opacity = '0';
  }

  return (
    <motion.div
      ref={cardRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.015 }}
      transition={{ duration: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      <div ref={glowRef} className={styles.glow} />
      {children}
    </motion.div>
  );
}