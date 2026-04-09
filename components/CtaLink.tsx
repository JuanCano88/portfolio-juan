'use client';

import { motion } from 'framer-motion';
import styles from '@/app/works/[id]/detail.module.css';

type Props = {
  url: string;
};

export default function CtaLink({ url }: Props) {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.ctaLink}
      whileHover={{ scale: 1.04, y: -3 }}
      whileTap={{ scale: 0.96 }}
      transition={{ duration: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      ver proyecto en vivo →
    </motion.a>
  );
}