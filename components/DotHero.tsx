'use client';

import { useRef } from 'react';

type Props = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export default function DotHero({ children, className, style }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current || !glowRef.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    glowRef.current.style.setProperty('--glow-x', `${x}px`);
    glowRef.current.style.setProperty('--glow-y', `${y}px`);
    glowRef.current.style.opacity = '1';
  }

  function handleMouseLeave() {
    if (!glowRef.current) return;
    glowRef.current.style.opacity = '0';
  }

  return (
    <div
      ref={ref}
      className={`dot-hero ${className ?? ''}`}
      style={style}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div ref={glowRef} className="dot-glow" />
      {children}
    </div>
  );
}