import { skills } from '@/data/skills';
import Footer from '@/components/Footer';
import styles from './about.module.css';
import SkillBar from '@/components/SkillBar';
import FadeUp from '@/components/FadeUp';
import DotHero from '@/components/DotHero';
import { about } from '@/data/about';
import Image from 'next/image';

const timeline = [
  {
    year: '2022 →',
    role: 'UX Developer Freelance',
    company: 'AUTÓNOMO',
    desc: 'WordPress avanzado, WooCommerce, plugins custom, React/Next.js. Clientes directos en España y Europa.',
  },
  {
    year: '2019–2022',
    role: 'Frontend Developer',
    company: 'AGENCIA · BILBAO',
    desc: 'Proyectos web para clientes corporativos. WordPress, SCSS, JavaScript, APIs.',
  },
  {
    year: '2015–2019',
    role: 'UI / UX Designer',
    company: 'DISEÑO DIGITAL',
    desc: 'Interfaces, identidades corporativas y experiencia de usuario.',
  },
  {
    year: '→ 2015',
    role: 'Diseño Gráfico & Comunicación Visual',
    company: 'FORMACIÓN',
    desc: 'Base en diseño, tipografía, composición y comunicación visual.',
  },
];

function highlightText(text: string, highlights: string[]) {
  const escaped = highlights.map(h => h.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  const regex = new RegExp(`(${escaped.join('|')})`, 'g');

  return text.split('\n\n').map((paragraph, i, arr) => (
    <span key={i}>
      {paragraph.split(regex).map((part, j) =>
        highlights.includes(part)
          ? <strong key={j} style={{ color: 'var(--text)', fontWeight: 500 }}>{part}</strong>
          : part
      )}
      {i < arr.length - 1 && <><br /><br /></>}
    </span>
  ));
}


export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <DotHero className={styles.hero}>
        <div className={styles.heroInner}>
          <div>
            <h1 className={styles.title}>About</h1>
            <p className={styles.bio}>
              {highlightText(about.intro, about.introHighlights)}
            </p>
          </div>
          <div className={styles.avatarWrap}>
            <div className={styles.avatar} style={{ position: 'relative' }}>
              {about.avatar ? (
                <Image
                  src={about.avatar}
                  alt="Juan Cano"
                  fill
                  style={{ objectFit: 'cover', borderRadius: 8 }}
                />
              ) : (
                '[ foto ]'
              )}
            </div>
          </div>
        </div>
      </DotHero>

      {/* Skills */}
      <section className={styles.skillsSection}>
        <p className={styles.sectionLabel}>// SKILLS</p>
        <div className={styles.skillsGrid}>
          {skills.map((s, i) => (
            <SkillBar
              key={s.name}
              name={s.name}
              pct={s.pct}
              delay={i * 0.08}
            />
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className={styles.timelineSection}>
        <p className={styles.timelineLabelTop}>// TRAYECTORIA</p>
        {timeline.map((item, i) => (
          <FadeUp key={i} delay={i * 0.12}>
            <div className={`${styles.tlItem} ${i < timeline.length - 1 ? styles.tlItemSpaced : ''}`}>
              <div className={styles.tlYear}>{item.year}</div>
              <div className={styles.tlLineCol}>
                <div className={styles.tlDot} />
                {i < timeline.length - 1 && <div className={styles.tlVert} />}
              </div>
              <div>
                <p className={styles.tlRole}>{item.role}</p>
                <p className={styles.tlCompany}>{item.company}</p>
                <p className={styles.tlDesc}>{item.desc}</p>
              </div>
            </div>
          </FadeUp>
        ))}
      </section>

      {/* Contacto */}
      <div className={styles.contactSection}>
        <div className={styles.contactCard}>
          <div>
            <p className={styles.contactLabel}>// ¿HABLAMOS?</p>
            <p className={styles.contactEmail}>hola@juan-cano.com</p>
          </div>
          <div className={styles.contactBtn}>contactar →</div>
        </div>
      </div>

      <Footer />
    </>
  );
}