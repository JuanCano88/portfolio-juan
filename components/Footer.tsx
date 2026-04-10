import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <span className={styles.copy}>
        © {year} Juan Cano ·{' '}
        <span className={styles.accent}>All rights reserved</span>
      </span>
      <div className={styles.links}>
        {['github', 'linkedin', 'contacto'].map(link => (
          <span key={link} className={styles.link}>
            {link}
          </span>
        ))}
      </div>
    </footer>
  );
}