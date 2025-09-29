export interface Experience {
  id: number;
  role: string;
  company: string;
  description: string;
  period: string;
  logo_url: string;
  company_url: string;
  current?: boolean;
}

const experiences: Experience[] = [
  {
    id: 1,
    role: 'Chief Operations Officer',
    company: 'Google Developer Group - University of San Carlos',
    description:
      'Developed management applications and streamlined multiple internal operations of the organization.',
    period: '2025 - Present',
    logo_url: '/experience/gdgoc.jpg',
    company_url: 'https://usc.gdgoc.tech',
    current: true,
  },
  {
    id: 2,
    role: 'Software Engineer Intern',
    company: 'EvoTech Software Solutions',
    description: 'Developing an AI-powered software solution for a client.',
    period: '2025 - Present',
    logo_url: '/experience/evotech.jpg',
    company_url: 'https://evotechdev.com',
    current: true,
  },
];

export { experiences };
