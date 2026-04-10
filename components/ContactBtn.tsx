'use client';

import { motion } from 'framer-motion';
import styles from '@/app/about/about.module.css';

type Props = {
  href?: string;
  label?: string;
};

export default function ContactBtn({ href = 'mailto:hola@juan-cano.com', label = 'contact →' }: Props) {
  return (
    <motion.a
      href={href}
      className={styles.contactBtn}
      whileHover={{ scale: 1.04, y: -3 }}
      whileTap={{ scale: 0.96 }}
      transition={{ duration: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {label}
    </motion.a>
  );
}