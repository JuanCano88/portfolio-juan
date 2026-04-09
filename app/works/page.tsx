'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '@/data/projects';
import Footer from '@/components/Footer';
import FadeUp from '@/components/FadeUp';
import styles from './works.module.css';
import GlowCard from '@/components/GlowCard';
import DotHero from '@/components/DotHero';

type Filter = 'all' | 'ecommerce' | 'corporate' | 'app' | 'ux';

const FILTERS: { value: Filter; label: string }[] = [
  { value: 'all',       label: 'all' },
  { value: 'ecommerce', label: 'ecommerce' },
  { value: 'corporate', label: 'corporate' },
  { value: 'app',       label: 'app / producto' },
  { value: 'ux',        label: 'ux & diseño' },
];

const cardVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit:    { opacity: 0, y: -10, transition: { duration: 0.2 } },
};

export default function WorksPage() {
  const [activeFilter, setActiveFilter] = useState<Filter>('all');

  const filtered = useMemo(
    () => activeFilter === 'all'
      ? projects
    : projects.filter(p => p.filter.includes(activeFilter)),
  [activeFilter]
  );

  return (
    <>
      <DotHero className={styles.hero}>
        <div className={styles.heroInner}>
          <FadeUp>
            <h1 className={styles.title}>Works</h1>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className={styles.subtitle}>
              // TODOS LOS PROYECTOS ·{' '}
              <span className={styles.subtitleAccent}>{filtered.length}</span>{' '}
              EN TOTAL
            </p>
          </FadeUp>
        </div>
      </DotHero>

      {/* Filtros */}
      <div className={styles.filters}>
        {FILTERS.map((f, i) => (
          <motion.button
            key={f.value}
            onClick={() => setActiveFilter(f.value)}
            className={`${styles.filterBtn} ${activeFilter === f.value ? styles.filterBtnActive : ''}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06, duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
            whileTap={{ scale: 0.95 }}
          >
            {f.label}
          </motion.button>
        ))}
      </div>

      {/* Grid */}
      <div className={styles.grid}>
        <AnimatePresence mode="popLayout">
        {filtered.map((p, i) => (
            <motion.div
            key={p.id}
            variants={cardVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
                duration: 0.45,
                delay: i * 0.06,
                ease: [0.21, 0.47, 0.32, 0.98],
            }}
            >
            <GlowCard>
                <Link href={`/works/${p.id}`} className={styles.card}>
                <div className={styles.thumb}>
                    {p.image ? (
                    <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        style={{ objectFit: 'cover' }}
                    />
                    ) : (
                    <span className={styles.thumbLabel}>{p.title}</span>
                    )}
                </div>
                <div className={styles.meta}>
                    <span className={styles.cat}>{p.cat}</span>
                    <span className={styles.year}>{p.year}</span>
                </div>
                <h2 className={styles.cardTitle}>{p.title}</h2>
                <div className={styles.tags}>
                    {p.tags.map(t => (
                    <span key={t} className={styles.tag}>{t}</span>
                    ))}
                </div>
                <span className={styles.arrow}>↗</span>
                </Link>
            </GlowCard>
            </motion.div>
        ))}
        </AnimatePresence>  
      </div>

      <Footer />
    </>
  );
}