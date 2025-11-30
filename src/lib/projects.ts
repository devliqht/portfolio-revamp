export interface Project {
  id: number;
  title: string;
  imageUrl: string;
  tags: string[];
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'DCISM r/place',
    imageUrl: '/projects/place.jpg',
    tags: [
      'React',
      'Express',
      'TypeScript',
      'Tailwind',
      'Axios',
      'Zustand',
      'Socket.io',
      'PostgreSQL',
      'Redis',
      'Google Cloud',
      'Nginx',
    ],
    link: 'https://place.dcism.org',
  },
  {
    id: 2,
    title: 'GDG USC Welcome Site',
    imageUrl: '/projects/welcome.png',
    tags: ['Astro', 'React', 'TypeScript', 'Three.js', 'Tailwind', 'Vercel'],
    link: 'https://usc.gdgoc.tech',
  },
  {
    id: 3,
    title: 'GDG USC Dashboard',
    imageUrl: '/projects/dashboard.png',
    tags: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind',
      'Supabase',
      'Google Cloud',
      'Cloudflare',
    ],
    link: 'https://dashboard.gdgoc.tech',
  },
  {
    id: 4,
    title: 'GDG USC Merch Portal',
    imageUrl: '/projects/merch.png',
    tags: ['WordPress', 'Elementor', 'WooCommerce'],
    link: 'https://merch.gdgoc.tech',
  },
  {
    id: 5,
    title: 'Dentalign CMS',
    imageUrl: '/projects/northhill.png',
    tags: ['PHP', 'Tailwind', 'Bun', 'Prettier'],
    link: 'https://github.com/devliqht/dentalign',
  },
  {
    id: 6,
    title: 'Schola',
    imageUrl: '/projects/schola.png',
    tags: [
      'PHP',
      'HTML',
      'CSS',
      'JavaScript',
      'FontAwesome',
      'Cropper',
      'tinyMCE',
      'Tailwind-Inspired',
      'School Project',
    ],
    link: 'https://github.com/devliqht/schola',
  },
  {
    id: 7,
    title: 'VLSM Calculator',
    imageUrl: '/projects/vlsm.png',
    tags: [
      'React',
      'TypeScript',
      'Bun',
      'Next.js',
      'TailwindCSS',
      'ShadcnUI',
      'v0',
    ],
    link: 'https://vlsm-calculator.dcism.org',
  },
  {
    id: 8,
    title: 'Portfolio',
    imageUrl: '/projects/portfolio.png',
    tags: [
      'React',
      'TypeScript',
      'Bun',
      'Vite',
      'TailwindCSS',
      'ShadcnUI',
      'React Router',
      'Vercel',
    ],
    link: 'https://github.com/devliqht/portfolio',
  },
  {
    id: 9,
    title: 'OSA Violation Tracker',
    imageUrl: '/projects/osa.png',
    tags: [
      'React',
      'Node.js',
      'MongoDB',
      'Render.com',
      'Google API',
      'Express',
      'React Router',
      'Specialized School Project',
    ],
    link: 'https://github.com/devliqht/violation-tracker',
  },
  {
    id: 10,
    title: 'Lab Database System',
    imageUrl: '/projects/res.png',
    tags: [
      'React',
      'Node.js',
      'MongoDB',
      'Render.com',
      'Google API',
      'Express',
      'React Router',
      'Specialized School Project',
      'Capstone',
    ],
    link: 'https://github.com/devliqht/res-proiect',
  },
];

export { projects };
