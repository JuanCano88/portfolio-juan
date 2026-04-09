'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import styles from '@/app/about/about.module.css';

type Props = {
  name: string;
  pct: number;
  delay?: number;
};

export default function SkillBar({ name, pct, delay = 0 }: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <div ref={ref} className={styles.skillRow}>
      <div className={styles.skillMeta}>
        <span className={styles.skillName}>{name}</span>
        <motion.span
          className={styles.skillPct}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.4, delay: delay + 0.3 }}
        >
          {pct}%
        </motion.span>
      </div>
      <div className={styles.skillBar}>
        <motion.div
          className={styles.skillFill}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${pct}%` } : { width: 0 }}
          transition={{
            duration: 0.9,
            delay,
            ease: [0.21, 0.47, 0.32, 0.98],
          }}
        />
      </div>
    </div>
  );
}