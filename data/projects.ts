import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'polloskate',
    cat: 'ECOMMERCE',
    year: '2026',
    title: 'Polloskate',
    desc: 'Tienda de skate con WooCommerce, plugins custom y UX cuidada al detalle.',
    tags: ['WordPress', 'WooCommerce', 'GSAP', 'SCSS'],
    filter: ['ecommerce', 'ux'],
    challenge: 'Construir una experiencia de compra que transmita la cultura skate: raw, directa, sin fricciones. Los plugins nativos de WooCommerce no eran suficientes.',
    solution: 'Arquitectura de plugins propios desde cero: cursor custom con LERP, efectos de scroll con GSAP/ScrollTrigger, selector de tallas con chips, y sistema de animaciones en home.',
    type: 'E-commerce custom · WordPress',
    image: '/images/polloskate.jpg',
  },
  {
    id: 'cywareness',
    cat: 'CORPORATE',
    year: '2023',
    title: 'Cywareness.io',
    desc: 'Plataforma corporativa de ciberseguridad multilenguaje con soporte RTL.',
    tags: ['WordPress', 'Polylang', 'PHP', 'RTL', 'JS'],
    filter: ['corporate'],
    challenge: 'Plataforma multilenguaje con soporte RTL. Tres CPTs y arquitectura escalable, filtros de equipo por idioma, y navegación con back-button.',
    solution: 'Plugin personalizado de opción multilenguaje para el blog. Módulos custom para WP Backery.',
    type: 'Corporate · Multilingual',
    image: '/images/cywareness.jpg',
  },
  {
    id: 'cyberpro-ai',
    cat: 'CORPORATE',
    year: '2025',
    title: 'Cyberpro-ai',
    desc: 'Página corporativa y portfolio empresarial',
    tags: ['WordPress', 'Polylang', 'PHP', 'JS'],
    filter: ['corporate'],
    challenge: 'Opción multilenguaje, versiones para varios idiomas, plataforma de empleo',
    solution: 'Plugins personalizados con interfaz visual en admin, shortcodes dinámicos, fix de back-button con sessionStorage y CSS reorganizado en 20 secciones.',
    type: 'Corporate · Multilingual',
    image: '/images/cyberproai.jpg',
  }  
/*
  {
    id: 'portfolio',
    cat: 'UX & DISEÑO',
    year: '2025',
    title: 'Portfolio v2',
    desc: 'Este mismo portfolio. Clean tech, tipografía fuerte, dark mode by default.',
    tags: ['Next.js', 'Framer Motion', 'TypeScript'],
    filter: 'ux',
    challenge: 'Rehacer un portfolio en Angular con identidad visual clara: diseño y código a la vez, sin clichés.',
    solution: 'Diseño propio. Tipografía display bold, acento ácido, datos en JSON, rutas dinámicas Next.js y animaciones con Framer Motion.',
    type: 'Portfolio · Personal',
    image: '/images/portfolio.jpg',
  },
*/  
];