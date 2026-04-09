import type { Metadata } from 'next';
import './globals.css';
import Nav from '@/components/Nav';
import PageTransition from '@/components/PageTransition';
import CustomCursor from '@/components/CustomCursor';

export const metadata: Metadata = {
  title: 'Juan Cano · UX Developer',
  description: 'Portfolio de Juan Cano, UX Developer en Bilbao. WordPress avanzado, WooCommerce, React y Next.js.',
  keywords: ['UX Developer', 'Freelance', 'WordPress', 'React', 'Next.js', 'Bilbao'],
  authors: [{ name: 'Juan Cano' }],
  creator: 'Juan Cano',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://juan-cano.com',
    title: 'Juan Cano · UX Developer',
    description: 'Del diseño al código. UX Developer freelance ubicado en Bilbao.',
    siteName: 'Juan Cano',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Juan Cano · UX Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Juan Cano · UX Developer',
    description: 'Del diseño al código. UX Developer freelance ubicado en Bilbao.',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <CustomCursor />
      <body>
        <Nav />
        <PageTransition>
          <main>{children}</main>
        </PageTransition>
      </body>
    </html>
  );
}