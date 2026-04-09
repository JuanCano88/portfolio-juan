import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { projects } from '@/data/projects';
import Footer from '@/components/Footer';
import FadeUp from '@/components/FadeUp';
import styles from './detail.module.css';
import DotHero from '@/components/DotHero';

export function generateStaticParams() {
  return projects.map(p => ({ id: p.id }));
}

type Props = { params: Promise<{ id: string }> };

export default async function ProjectDetailPage({ params }: Props) {
  const { id } = await params;
  const project = projects.find(p => p.id === id);

  if (!project) notFound();

  return (
    <>
      <Link href="/works" className={styles.back}>
        ← volver a works
      </Link>

      {/* Hero */}
      <DotHero className={styles.hero}>
        <div className={styles.heroInner}>
          <div>
            <FadeUp>
              <p className={styles.cat}>{project.cat} · {project.year}</p>
            </FadeUp>
            <FadeUp delay={0.08}>
              <h1 className={styles.title}>{project.title}</h1>
            </FadeUp>
            <FadeUp delay={0.16}>
              <p className={styles.desc}>{project.desc}</p>
            </FadeUp>
          </div>
          <FadeUp delay={0.24}>
            <div className={styles.metaGrid}>
              {[
                { label: '// AÑO',  value: project.year },
                { label: '// TIPO', value: project.type },
                { label: '// ROL',  value: 'UX Developer · Diseño + Código' },
              ].map(m => (
                <div key={m.label}>
                  <p className={styles.metaLabel}>{m.label}</p>
                  <p className={styles.metaValue}>{m.value}</p>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </DotHero>

      {/* Imagen principal */}
      <FadeUp delay={0.1}>
        <div className={styles.mainImage}>
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              style={{ objectFit: 'cover' }}
            />
          ) : (
            <span className={styles.mainImagePlaceholder}>
              [ captura del proyecto ]
            </span>
          )}
        </div>
      </FadeUp>

      {/* Cuerpo */}
      <div className={styles.body}>
        <div>
          <FadeUp>
            <p className={styles.sectionLabel}>// EL RETO</p>
            <p className={styles.text}>{project.challenge}</p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className={styles.sectionLabel}>// LA SOLUCIÓN</p>
            <p className={styles.text}>{project.solution}</p>
          </FadeUp>
        </div>
        <div>
          <FadeUp delay={0.2}>
            <div className={styles.sideCard}>
              <p className={styles.sectionLabel}>// STACK TÉCNICO</p>
              {project.tags.map(t => (
                <span key={t} className={styles.techPill}>{t}</span>
              ))}
            </div>
            <div className={styles.sideCard}>
              <p className={styles.sectionLabel}>// TIPO</p>
              <p className={styles.sideType}>{project.type}</p>
            </div>
          </FadeUp>
        </div>
      </div>

      <Footer />
    </>
  );
}