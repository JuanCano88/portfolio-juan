'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Nav.module.css';
import ContactBtn from '@/components/ContactBtn';

export default function Nav() {
  const pathname = usePathname();

  const links = [
    { href: '/',       label: 'home' },
    { href: '/works',  label: 'works' },
    { href: '/about',  label: 'about' },
  ];

  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.logo}>
        jc<span className={styles.logoAccent}>.</span>dev
      </Link>

      <div className={styles.links}>
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`${styles.link} ${pathname === href ? styles.linkActive : ''}`}
          >
            {label}
          </Link>
        ))}
      </div>

      <ContactBtn href="/about" label="contact" />
    </nav>
  );
}