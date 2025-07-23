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
    title: 'Dentalign CMS',
    imageUrl: '/projects/northhill.png',
    tags: ['PHP', 'Tailwind', 'Bun', 'Prettier'],
    link: 'https://github.com/devliqht/dentalign',
  },
  {
    id: 2,
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
    id: 3,
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
    id: 4,
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
    id: 6,
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
    id: 7,
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
  {
    id: 8,
    title: 'Canticum',
    imageUrl: '/projects/canticum.png',
    tags: ['React', 'Bun', 'Vite', 'TailwindCSS', 'DaisyUI', 'Spotify API'],
    link: 'https://github.com/devliqht/canticum',
  },
];

export { projects };
