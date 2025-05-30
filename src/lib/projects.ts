export interface Project {
    id: number;
    title: string;
    imageUrl: string;
    tags: string[];
    link: string;
    description: string;
    accordionContent?: string;
  }

  const projects: Project[] = [
    {
      id: 1,
      title: "Schola",
      imageUrl: "/projects/schola.png",
      tags: ["PHP", "HTML", "CSS", "JavaScript", "FontAwesome", "Cropper", "tinyMCE", "Tailwind-Inspired", "School Project"],
      link: "https://github.com/devliqht/schola",
      description:
        "Schola is a forum application designed for schools, providing a platform for students, teachers, and staff to interact, share information, and participate in discussions. It features forum interactions, user profiles, a leveling system, and more.",
      accordionContent: "This is a school project, but I hope to implement something like this later in the future but with a more modern approach and with modern technologies."
    },
    {
      id: 2,
      title: "VLSM and Subnet Calculator",
      imageUrl: "/projects/vlsm.png",
      tags: ["React", "TypeScript", "Bun", "Next.js", "TailwindCSS", "ShadcnUI", "v0"],
      link: "https://vlsm-calculator.dcism.org",
      description:
        "A VLSM calculator featuring a subnetting mode as well for equal subnet calculations. A tool I made to help my classmates study for networking midterms.",
      accordionContent: "It is a tool created with v0 after a lot of prompts #promptEngineeringKekW"
    },
    {
      id: 3,
      title: "Portfolio",
      imageUrl: "/projects/portfolio.png",
      tags: ["React", "TypeScript", "Bun", "Vite", "TailwindCSS", "ShadcnUI", "React Router", "Vercel"],
      link: "https://github.com/devliqht/portfolio",
      description:
        "A personalized portfolio website built with React, TypeScript, Vite and Bun. It uses TailwindCSS and some Shadcn UI components powered with React Router.",
      accordionContent: "This portfolio showcases interactive animations, reusable components, and a responsive design optimized for performance using Vite and Bun."
    },
    {
      id: 4,
      title: "CIS1102N Portfolio",
      imageUrl: "/projects/computing.png",
      tags: ["React", "TypeScript", "Bun", "Vite", "TailwindCSS", "ShadcnUI", "React Router", "Vercel"],
      link: "https://cis1102n.vercel.app",
      description:
        "The primary goal of The Turing Site is to serve as an informative and visually appealing platform to showcase portfolios. The site focuses on organizing and presenting information effectively.  The site caters to students and readers who are eager to explore detailed portfolios for learning, inspiration, or research. ",
      accordionContent: "The concept of the website embodies a modern, minimalistic and stylish aesthetic. The minimalist elements provide a sleek, transparent feel, while the overall design exudes smoothness and flexibility to ensure a seamless user experience."
    },
    {
      id: 5,
      title: "OSA Violation Tracker",
      imageUrl: "/projects/osa.png",
      tags: ["React", "Node.js", "MongoDB", "Render.com", "Google API", "Express", "React Router", "Specialized School Project"],
      link: "https://github.com/devliqht/violation-tracker",
      description: "A full-stack CRUD web application for tracking and handling student violations. Submitted as CFP-01 Finals Project to attain a grade of 100.",
      accordionContent: "Features include role-based authentication, data visualization of violations, and integration with Google APIs for streamlined workflows."
    },
    {
      id: 6,
      title: "Lab Database System",
      imageUrl: "/projects/res.png",
      tags: ["React", "Node.js", "MongoDB", "Render.com", "Google API", "Express", "React Router", "Specialized School Project", "Capstone"],
      link: "https://github.com/devliqht/res-proiect",
      description: "A full-stack web application that streamlines the documentation of laboratory sessions using QR code scanning for quick experiment identification. Submitted as a research paper during Grade 12 SHS.",
      accordionContent: "Includes QR code generation and scanning, a database architecture for storing lab session details, and real-time updates."
    },
    {
      id: 7,
      title: "Canticum",
      imageUrl: "/projects/canticum.png",
      tags: ["React", "Bun", "Vite", "TailwindCSS", "DaisyUI", "Spotify API"],
      link: "https://github.com/devliqht/canticum",
      description:
        "This is a Spotify web application built with React, Vite, Tailwind (with DaisyUI), and Node. It allows users to log in with their Spotify account using the spotify-web-api-js wrapper. The application displays their top tracks, artists, and genres in a fashionable way.",
      accordionContent: "Provides detailed insights into Spotify listening habits, with an elegant UI powered by DaisyUI and spotify API integration."
    },
    {
      id: 8,
      title: "Misinformation Website",
      imageUrl: "/projects/misinfo.png",
      tags: ["HTML", "CSS", "JavaScript", "jQuery", "AoS", "Google Forms", "Animate.css", "FontAwesome","School Project"],
      link: "https://github.com/devliqht/tech01-website",
      description:
        "A campaign website submitted as the finals project for TECH01 class. It uses vanilla HTML and CSS, jQuery javascript to control the custom page progress bar, and the AoS (Animate-on-scroll) library for visual effects.",
      accordionContent: "A visually dynamic site with smooth scrolling animations, focused on raising awareness against misinformation."
    },
    {
      id: 9,
      title: "Old 2022 Portfolio",
      imageUrl: "/projects/hobby.png",
      tags: ["HTML", "CSS", "JavaScript", "jQuery", "Typing Library", "Spotify iFrame", "Animate.css", "FontAwesome", "Google Fonts API"],
      link: "https://github.com/devliqht/hobby-project",
      description:
        "An old portfolio website, featuring a pink and white minimalistic theme. It uses jQuery and a custom typing animation library, with UI design inspired from multiple platforms.",
      accordionContent: "Portfolio website with UI inspired from multiple platforms to showcase immersion of the content. Does not include a responsive mobile view."
    },
    {
      id: 10,
      title: "Genshin Damage Calculator",
      imageUrl: "/projects/genshin.png",
      tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      link: "https://github.com/devliqht/genshin-damage-calculator",
      description:
        "A simple genshin damage calculator that worked back in 2021. It used a formula provided by the Keqing discord server, now outdated. It uses Vanilla HTML, CSS and JavaScript to do the calculations. It uses Bootstrap for some of its component styles.",
      accordionContent: "Built as a practical tool for Genshin players, it features a clean Bootstrap interface for ease of use."
    },
    {
      id: 11,
      title: "Culminating Portfolio Activity",
      imageUrl: "/projects/oldportfolio.png",
      tags: ["HTML", "CSS", "JavaScript", "Animate.css", "FontAwesome", "Google Fonts API", "School Project"],
      link: "https://github.com/devliqht/website",
      description:
        "A culminating activity for a high school computer class featuring vanilla HTML, CSS and JavaScript and a fully responsive mobile view.",
      accordionContent: "A responsive website featuring full-paged video background along with dynamic ranking list and smooth animations."
    },
    {
      id: 12,
      title: "Adobe EULA Analysis",
      imageUrl: "/projects/adobe.png",
      tags: ["React", "TypeScript", "Bun", "Vite", "TailwindCSS", "ShadcnUI", "React Router", "Vercel"],
      link: "https://tfl-adobe.vercel.app",
      description:
        "A website featuring a comprehensive analysis of Adobe's EULA for GE-TFL midterm submission.",
      accordionContent: "Instead of making a canva presentation as usual, I made a website for our group just for fun. Reuses some of the code of this portfolio website."
    },
    {
      id: 13,
      title: "docs 101",
      imageUrl: "/projects/docs.png",
      tags: ["HTML", "CSS", "JS", "Bootstrap"],
      link: "https://devliqht.github.io/docs/index.html",
      description:
        "A docs website I made back in 2021 which is supposed to serve as a tutorial website for Bosconians who are struggling with HTML/CSS/Javascript. It is incomplete and only some information are present.",
      accordionContent: "Memory lane :')"
    },
  ];
  
  const UIDesigns: Project[] = [
    {
      id: 14,
      title: "Happy Hour",
      imageUrl: "/projects/happy_hour.png",
      tags: ["HTML", "CSS"],
      link: "#soon",
      description:
        "The Happy Hour App is our platform dedicated to addressing food waste and promoting sustainability. Our app connects users with local businesses, offering affordable packages of unsold food items.",
      accordionContent: "A finals project for GE-TFL. Link coming soon."
    },
    {
      id: 15,
      title: "ISMIS Conceptual",
      imageUrl: "/projects/ismis.png",
      tags: ["HTML", "CSS"],
      link: "https://github.com/devliqht/ismis-matt",
      description:
        "A redesign of the USC ISMIS with vanilla html and css. It features a more glassy and modern design with hover animation styles and padding.",
      accordionContent: "This redesign aims to enhance the usability of the ISMIS platform with an aesthetic, user-centered approach."
    },
    {
      id: 16,
      title: "DBTC Conceptual",
      imageUrl: "/projects/dbtc.png",
      tags: ["HTML", "CSS"],
      link: "https://github.com/devliqht/school-automate",
      description:
        "The DBTC school automate UI redesigned into a more modern, minimalistic and boxy style.",
      accordionContent: "Focused on clarity and simplicity, this design offers improved navigation and better visual hierarchy."
    },
    {
      id: 17,
      title: "Genshin Artifact Simulator UI",
      imageUrl: "/projects/genshinui.png",
      tags: ["HTML", "CSS", "SASS"],
      link: "https://github.com/devliqht/genshin-artifact-simulator",
      description:
        "A web redesign of the old Genshin Artifact UI dated back in 2021. Its supposed to be featured an imaginary artifact creator.",
      accordionContent: "This UI emphasizes creative freedom for users to simulate artifact builds in an immersive environment."
    },
  ];
  
  export {
    projects,
    UIDesigns
  };