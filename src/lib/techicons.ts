import { 
    SiReact, SiVercel, SiPhp, SiLaravel, SiJavascript, SiTailwindcss,
    SiTypescript, SiNextdotjs, SiNodedotjs, SiMongodb, SiPostgresql,
    SiGit, SiPython, SiMysql, SiHtml5, SiCss3, SiBun, SiVite, SiApache, SiNotion, SiGooglegemini, SiCanva,
    SiCplusplus, 
    SiC          
  } from 'react-icons/si';

interface TechIcon {
    Icon: React.ComponentType<any>;
    name: string;
    color: string;
    x: number; 
    y: number; 
    z: number; 
    id: string;
    order: number;
  }
  
export const techIcons: TechIcon[] = [
    { Icon: SiJavascript, name: 'JavaScript', color: '#F7DF1E', x: 60, y: 60, z: -1500, id: 'javascript', order: 1 },
    { Icon: SiReact, name: 'React', color: '#00D8FF', x: -120, y: -90, z: -1450, id: 'react', order: 2 },
    { Icon: SiTypescript, name: 'TypeScript', color: '#3178C6', x: -60, y: 120, z: -1400, id: 'typescript', order: 3 },
    { Icon: SiNextdotjs, name: 'Next.js', color: '#FFFFFF', x: 90, y: -120, z: -1350, id: 'nextjs', order: 4 },
    { Icon: SiTailwindcss, name: 'Tailwind CSS', color: '#06B6D4', x: -180, y: 30, z: -1300, id: 'tailwind', order: 5 },
    { Icon: SiNodedotjs, name: 'Node.js', color: '#339933', x: 150, y: -60, z: -1250, id: 'nodejs', order: 6 },
    { Icon: SiMongodb, name: 'MongoDB', color: '#47A248', x: 0, y: 150, z: -1200, id: 'mongodb', order: 7 },
    { Icon: SiPostgresql, name: 'PostgreSQL', color: '#336791', x: -90, y: -150, z: -1150, id: 'postgresql', order: 8 },
    { Icon: SiLaravel, name: 'Laravel', color: '#fb503b', x: -150, y: -30, z: -1100, id: 'laravel', order: 9 },
    { Icon: SiMysql, name: 'MySQL', color: '#4479A1', x: 210, y: -90, z: -1050, id: 'mysql', order: 10 },
    { Icon: SiPython, name: 'Python', color: '#3776AB', x: -150, y: 90, z: -1000, id: 'python', order: 11 },
    { Icon: SiPhp, name: 'PHP', color: '#777BB4', x: 180, y: 60, z: -950, id: 'php', order: 12 },
    { Icon: SiGit, name: 'Git', color: '#F05032', x: -210, y: -90, z: -900, id: 'git', order: 13 },
    { Icon: SiC, name: 'C', color: '#A8B9CC', x: 120, y: 120, z: -850, id: 'c', order: 14 },
    { Icon: SiCplusplus, name: 'C++', color: '#00599C', x: -100, y: -180, z: -800, id: 'cpp', order: 15 },
    { Icon: SiVercel, name: 'Vercel', color: '#FFFFFF', x: 150, y: -30, z: -750, id: 'vercel', order: 16 },
    { Icon: SiHtml5, name: 'HTML5', color: '#E34F26', x: 0, y: -180, z: -700, id: 'html5', order: 17 },
    { Icon: SiCss3, name: 'CSS3', color: '#1572B6', x: 180, y: 180, z: -650, id: 'css3', order: 18 },
    { Icon: SiBun, name: 'Bun', color: '#FBF0DF', x: -180, y: 180, z: -600, id: 'bun', order: 19 },
    { Icon: SiVite, name: 'Vite', color: '#646CFF', x: 200, y: 0, z: -550, id: 'vite', order: 20 },
    { Icon: SiApache, name: 'Apache', color: '#D22128', x: -200, y: 0, z: -500, id: 'apache', order: 21 },
    { Icon: SiNotion, name: 'Notion', color: '#000000', x: 70, y: 200, z: -450, id: 'notion', order: 22 },
    { Icon: SiGooglegemini, name: 'Gemini', color: '#8952FF', x: -70, y: -200, z: -400, id: 'gemini', order: 23 },
    { Icon: SiCanva, name: 'Canva', color: '#00C4CC', x: 220, y: -100, z: -350, id: 'canva', order: 24 },
  ].sort((a, b) => a.order - b.order);
  