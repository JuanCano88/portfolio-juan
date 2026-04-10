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
          {[
            { label: 'linkedin', href: 'https://www.linkedin.com/in/juan-cano-arnaiz/' },
            { label: 'contact', href: 'mailto:jac.arnaiz@gmail.com' },
          ].map(({ label, href }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" className={styles.link}>
              {label}
            </a>
          ))}
      </div>
    </footer>
  );
}