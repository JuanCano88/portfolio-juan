import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'polloskate',
    cat: 'ECOMMERCE',
    year: '2026',
    title: 'Polloskate',
    desc: 'Skate shop built with WooCommerce, custom plugins, and carefully crafted UX.',
    tags: ['WordPress', 'WooCommerce', 'GSAP', 'SCSS'],
    filter: ['ecommerce', 'ux'],
    challenge: 'Build a shopping experience that reflects skate culture: raw, direct, frictionless. Native WooCommerce plugins were not enough.',
    solution: 'Custom plugin architecture built from scratch: LERP-based custom cursor, GSAP/ScrollTrigger scroll effects, chip-based size selector, and animated homepage system.',
    type: 'Custom E-commerce · WordPress',
    image: '/images/polloskate.jpg',
    url: 'https://www.polloskate.com',
  },
  {
    id: 'cywareness',
    cat: 'CORPORATE',
    year: '2023',
    title: 'Cywareness.io',
    desc: 'Multilingual cybersecurity corporate platform with RTL support.',
    tags: ['WordPress', 'Polylang', 'PHP', 'RTL', 'JS'],
    filter: ['corporate'],
    challenge: 'Multilingual platform with RTL support. Three CPTs and scalable architecture, language-based team filters, and navigation with back-button handling.',
    solution: 'Custom multilingual option plugin for the blog. Custom modules for WPBakery.',
    type: 'Corporate · Multilingual',
    image: '/images/cywareness.jpg',
  },
  {
    id: 'cyberpro-ai',
    cat: 'CORPORATE',
    year: '2025',
    title: 'Cyberpro-ai',
    desc: 'Corporate website and business portfolio.',
    tags: ['WordPress', 'Polylang', 'PHP', 'JS'],
    filter: ['corporate'],
    challenge: 'Multilingual setup, multiple language versions, and integrated job platform.',
    solution: 'Custom plugins with visual admin interface, dynamic shortcodes, back-button fix using sessionStorage, and CSS reorganized into 20 sections.',
    type: 'Corporate · Multilingual',
    image: '/images/cyberproai.jpg',
  }  
/*
  {
    id: 'portfolio',
    cat: 'UX & DESIGN',
    year: '2025',
    title: 'Portfolio v2',
    desc: 'This very portfolio. Clean tech, bold typography, dark mode by default.',
    tags: ['Next.js', 'Framer Motion', 'TypeScript'],
    filter: 'ux',
    challenge: 'Rebuild an Angular portfolio with a clear visual identity: design and code at the same level, without clichés.',
    solution: 'Custom design. Bold display typography, acidic accent, JSON-driven data, Next.js dynamic routing, and Framer Motion animations.',
    type: 'Portfolio · Personal',
    image: '/images/portfolio.jpg',
  },
*/  
];