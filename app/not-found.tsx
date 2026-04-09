import Link from 'next/link';
import Footer from '@/components/Footer';
import DotHero from '@/components/DotHero';

export default function NotFound() {
  return (
    <>
      <DotHero style={{
        minHeight: 'calc(100vh - 65px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottom: '1px solid var(--border)',
        padding: '0 32px',
        textAlign: 'center',
      }}>
        <p style={{
          fontFamily: 'var(--mono)',
          fontSize: 11,
          color: 'var(--muted)',
          letterSpacing: '0.2em',
          marginBottom: 24,
        }}>
          // ERROR 404
        </p>
        <h1 style={{
          fontFamily: 'var(--display)',
          fontSize: 'clamp(80px, 15vw, 180px)',
          fontWeight: 900,
          lineHeight: 1,
          letterSpacing: '-0.05em',
          color: 'var(--border2)',
        }}>
          404
        </h1>
        <p style={{
          fontFamily: 'var(--display)',
          fontSize: 'clamp(20px, 3vw, 32px)',
          fontWeight: 900,
          letterSpacing: '-0.03em',
          marginTop: 16,
          marginBottom: 12,
        }}>
          Esta página no existe
        </p>
        <p style={{
          fontFamily: 'var(--mono)',
          fontSize: 13,
          color: 'var(--muted)',
          lineHeight: 1.7,
          fontWeight: 300,
          maxWidth: 400,
          marginBottom: 40,
        }}>
          Puede que la URL esté mal escrita o que la página haya sido eliminada.
        </p>
        <Link href="/" style={{
          fontFamily: 'var(--mono)',
          fontSize: 11,
          letterSpacing: '0.1em',
          background: 'var(--accent)',
          color: 'var(--bg)',
          padding: '12px 28px',
          borderRadius: 4,
          textDecoration: 'none',
        }}>
          volver al inicio →
        </Link>
      </DotHero>
      <Footer />
    </>
  );
}