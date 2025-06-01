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
      title: "Quickmed",
      imageUrl: '/projects/quickmed.png',
      tags: ["React", "TypeScript", "Next.js", "TailwindCSS", "Framer Motion", "Vercel"],
      link: "https://github.com/devliqht/quickmed"
    },
    {
      id: 2,
      title: "Schola",
      imageUrl: "/projects/schola.png",
      tags: ["PHP", "HTML", "CSS", "JavaScript", "FontAwesome", "Cropper", "tinyMCE", "Tailwind-Inspired", "School Project"],
      link: "https://github.com/devliqht/schola"
    },
    {
      id: 3,
      title: "VLSM Calculator",
      imageUrl: "/projects/vlsm.png",
      tags: ["React", "TypeScript", "Bun", "Next.js", "TailwindCSS", "ShadcnUI", "v0"],
      link: "https://vlsm-calculator.dcism.org"
    },
    {
      id: 4,
      title: "Portfolio",
      imageUrl: "/projects/portfolio.png",
      tags: ["React", "TypeScript", "Bun", "Vite", "TailwindCSS", "ShadcnUI", "React Router", "Vercel"],
      link: "https://github.com/devliqht/portfolio"
    },
    {
      id: 5,
      title: "CIS1102N Portfolio",
      imageUrl: "/projects/computing.png",
      tags: ["React", "TypeScript", "Bun", "Vite", "TailwindCSS", "ShadcnUI", "React Router", "Vercel"],
      link: "https://cis1102n.vercel.app"
    },
    {
      id: 6,
      title: "OSA Violation Tracker",
      imageUrl: "/projects/osa.png",
      tags: ["React", "Node.js", "MongoDB", "Render.com", "Google API", "Express", "React Router", "Specialized School Project"],
      link: "https://github.com/devliqht/violation-tracker"
    },
    {
      id: 7,
      title: "Lab Database System",
      imageUrl: "/projects/res.png",
      tags: ["React", "Node.js", "MongoDB", "Render.com", "Google API", "Express", "React Router", "Specialized School Project", "Capstone"],
      link: "https://github.com/devliqht/res-proiect"
    },
    {
      id: 8,
      title: "Canticum",
      imageUrl: "/projects/canticum.png",
      tags: ["React", "Bun", "Vite", "TailwindCSS", "DaisyUI", "Spotify API"],
      link: "https://github.com/devliqht/canticum"
    },
    {
      id: 9,
      title: "Misinformation Website",
      imageUrl: "/projects/misinfo.png",
      tags: ["HTML", "CSS", "JavaScript", "jQuery", "AoS", "Google Forms", "Animate.css", "FontAwesome","School Project"],
      link: "https://github.com/devliqht/tech01-website"
    },
    {
      id: 10,
      title: "Old 2022 Portfolio",
      imageUrl: "/projects/hobby.png",
      tags: ["HTML", "CSS", "JavaScript", "jQuery", "Typing Library", "Spotify iFrame", "Animate.css", "FontAwesome", "Google Fonts API"],
      link: "https://github.com/devliqht/hobby-project"
    },
    {
      id: 11,
      title: "Genshin Damage Calculator",
      imageUrl: "/projects/genshin.png",
      tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      link: "https://github.com/devliqht/genshin-damage-calculator"
    },
    {
      id: 12,
      title: "Culminating Portfolio Activity",
      imageUrl: "/projects/oldportfolio.png",
      tags: ["HTML", "CSS", "JavaScript", "Animate.css", "FontAwesome", "Google Fonts API", "School Project"],
      link: "https://github.com/devliqht/website"
    },
    {
      id: 13,
      title: "Adobe EULA Analysis",
      imageUrl: "/projects/adobe.png",
      tags: ["React", "TypeScript", "Bun", "Vite", "TailwindCSS", "ShadcnUI", "React Router", "Vercel"],
      link: "https://tfl-adobe.vercel.app"
    },
    {
      id: 14,
      title: "docs 101",
      imageUrl: "/projects/docs.png",
      tags: ["HTML", "CSS", "JS", "Bootstrap"],
      link: "https://devliqht.github.io/docs/index.html"
    }
  ];
  
  const UIDesigns: Project[] = [
    {
      id: 15,
      title: "Happy Hour",
      imageUrl: "/projects/happy_hour.png",
      tags: ["HTML", "CSS"],
      link: "#soon"
    },
    {
      id: 16,
      title: "ISMIS Conceptual",
      imageUrl: "/projects/ismis.png",
      tags: ["HTML", "CSS"],
      link: "https://github.com/devliqht/ismis-matt"
    },
    {
      id: 17,
      title: "DBTC Conceptual",
      imageUrl: "/projects/dbtc.png",
      tags: ["HTML", "CSS"],
      link: "https://github.com/devliqht/school-automate"
    },
    {
      id: 18,
      title: "Genshin Artifact Simulator UI",
      imageUrl: "/projects/genshinui.png",
      tags: ["HTML", "CSS", "SASS"],
      link: "https://github.com/devliqht/genshin-artifact-simulator"
    }
  ];
  
  export {
    projects,
    UIDesigns
  };