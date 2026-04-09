import { skills } from '@/data/skills';
import Footer from '@/components/Footer';
import styles from './about.module.css';
import SkillBar from '@/components/SkillBar';
import FadeUp from '@/components/FadeUp';
import DotHero from '@/components/DotHero';
import { about } from '@/data/about';
import Image from 'next/image';
import ContactBtn from '@/components/ContactBtn';

const timeline = [
  {
    year: '2020 →',
    role: 'UX Developer',
    company: 'CyberproAi',
    desc: 'WordPress avanzado, plugins custom, React/Next.js. Clientes directos nacionales e internacionales.',
  },
  {
    year: '2017–2026',
    role: 'Freelance',
    company: 'MADRID · BILBAO',
    desc: 'Proyectos web para clientes corporativos. WordPress, SCSS, JavaScript, APIs.',
  },
  {
    year: '2016-2019',
    role: 'Web Developer',
    company: 'UVE',
    desc: 'Interfaces, campañas estacionales, landing pages campañas de email marketing para Leroy Merlin y Totota',
  },
  {
    year: '2014–2016',
    role: 'Diseño Gráfico & Desarrollo Web',
    company: 'Balthazar Comunicación',
    desc: 'Realización de Artes Finales y Comunicaciones Web para Carrefour, GoodYear y Latam Airlines',
  },
  {
    year: '→ 2012',
    role: 'Diseño Gráfico & Web',
    company: 'Thalentia',
    desc: 'Base en diseño, Flash, HTML, CSS y Jquery. Diseño y realización de cursos e-Learning',
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
            <p className={styles.contactEmail}>jac.arnaiz@gmail.com</p>
          </div>
            <ContactBtn />
        </div>
      </div>

      <Footer />
    </>
  );
}