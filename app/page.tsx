'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { projects } from '@/data/projects';
import Footer from '@/components/Footer';
import FadeUp from '@/components/FadeUp';
import styles from './home.module.css';
import DotHero from '@/components/DotHero';
import Image from 'next/image';


const MARQUEE_ITEMS = [
  'REACT', 'NEXT.JS', 'WORDPRESS', 'WOOCOMMERCE', 'WEBFLOW',
  'GSAP', 'SCSS', 'FIGMA', 'UX DESIGN', 'PHP', 'TYPESCRIPT',
];

const stagger = {
  animate: { transition: { staggerChildren: 0.08 } },
};

const fadeItem = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] } },
};

export default function HomePage() {
  const selected = projects.slice(0, 2);

  return (
    <>
      {/* Hero */}
      <DotHero className={styles.hero}>
        <motion.div variants={stagger} initial="initial" animate="animate">
          <motion.div variants={fadeItem} className={styles.status}>
            <span className={styles.statusDot} />
            available for projects · bizkaia, eus
          </motion.div>
          <motion.p variants={fadeItem} className={styles.eyebrow}>
            UX DEVELOPER · FREELANCE
          </motion.p>
          <motion.h1 variants={fadeItem} className={styles.heroTitle}>
            Juan <span className={styles.heroAccent}>Cano</span>
          </motion.h1>
          <motion.div variants={fadeItem} className={styles.subtitleRow}>
            <h2 className={styles.heroSubtitle}>código</h2>
            <span className={styles.heroTag}>→ y diseño</span>
          </motion.div>
        </motion.div>
      </DotHero>

      {/* Bio */}
      <section className={styles.bioRow}>
        <FadeUp delay={0}>
          <p className={styles.bioLabel}>// SOBRE MÍ</p>
          <p className={styles.bioText}>
            Empecé en el diseño y me enamoré del código. Hoy vivo en la
            intersección entre ambos mundos como{' '}
            <strong>UX Developer freelance</strong>: construyo interfaces que
            son tan sólidas por dentro como hermosas por fuera.
          </p>
        </FadeUp>
        <FadeUp delay={0.1}>
          <p className={styles.bioLabel}>// ENFOQUE</p>
          <p className={styles.bioText}>
            WordPress avanzado, WooCommerce, React y Next.js. Cada proyecto
            es <strong>artesanía digital</strong>: atención milimétrica al
            detalle, código limpio, y experiencias que la gente recuerda.
          </p>
        </FadeUp>
      </section>

      {/* Stats */}
      <section className={styles.stats}>
        {[
          { num: '10+', label: 'AÑOS DE EXPERIENCIA' },
          { num: '60+', label: 'PROYECTOS ENTREGADOS' },
          { num: '2×',  label: 'PERFILES EN UNO' },
        ].map((s, i) => (
          <FadeUp key={i} delay={i * 0.1}>
            <div className={styles.statItem}>
              <div className={styles.statNum}>
                {s.num.replace(/[+×]/g, '')}
                <span className={styles.statAccent}>{s.num.match(/[+×]/)?.[0]}</span>
              </div>
              <div className={styles.statLabel}>{s.label}</div>
            </div>
          </FadeUp>
        ))}
      </section>

      {/* Marquee */}
      <div className={styles.marqueeRow}>
        <div className={styles.marqueeInner}>
          {[...Array(4)].flatMap((_, i) =>
            MARQUEE_ITEMS.flatMap(item => [
              <span key={`${i}-${item}`} className={styles.marqueeItem}>{item}</span>,
              <span key={`${i}-sep-${item}`} className={styles.marqueeSep}>·</span>,
            ])
          )}
        </div>
      </div>

      {/* Selected works */}
      <section className={styles.selected}>
        <FadeUp>
          <div className={styles.selectedHeader}>
            <span className={styles.selectedLabel}>// PROYECTOS SELECCIONADOS</span>
            <Link href="/works" className={styles.selectedAction}>ver todos →</Link>
          </div>
        </FadeUp>
        <div className={styles.selectedGrid}>
          {selected.map((p, i) => (
            <FadeUp key={p.id} delay={i * 0.12}>
              <Link href={`/works/${p.id}`} className={styles.selectedCard}>

                {p.image && (
                  <div className={styles.scImageWrap}>
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                    <div className={styles.scOverlay} />
                  </div>
                )}

                <div className={styles.scHoverTitle}>{p.title}</div>
                <div className={styles.scArrowHover}>↗</div>

                <div className={styles.scContent}>
                  <div className={styles.scMeta}>
                    <span className={styles.scTag}>{p.cat}</span>
                    <span className={styles.scYear}>{p.year}</span>
                  </div>
                  <h3 className={styles.scTitle}>{p.title}</h3>
                  <p className={styles.scDesc}>{p.desc}</p>
                  <div className={styles.scArrow}>ver proyecto →</div>
                </div>

              </Link>
            </FadeUp>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}