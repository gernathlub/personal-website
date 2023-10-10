export type Project = {
  nameEn: string;
  nameSk?: string;
  slug: string;
  technologies: string[];
  isPro: boolean;
  link?: string;
  startDate: Date;
  endDate?: Date;
  relatedTo?: string[];
  client?: string;
  logoStaticPath?: string;
  descriptionEn: string;
  descriptionSk: string;
};

export const projectList: Project[] = [
  {
    nameEn: "Vroom",
    slug: "vroom",
    technologies: [
      "AWS",
      "Django",
      "HTMX",
      "Serverless",
      "TailwindCSS",
      "Bootstrap",
      "PostgreSQL",
      "Docker",
      "Figma"
    ],
    isPro: true,
    link: "https://vroom.be",
    startDate: new Date("2021-10-01"),
    endDate: new Date("2022-12-31"),
    relatedTo: ["Remaster Solutions"],
    client: "Mobly",
    logoStaticPath: "/logos/vroom.svg",
    descriptionEn:
      "Online car dealership and magazine platform implementation as a contractor for Remaster Solutions for customer Mobly(.be). Focused primarily on Django framework programming - both backend (Python) and frontend (JavaScript, Tailwind, HTMX, DTL). Actively participating in third-party services integration. Involved in designing the system and data flow architecture. In later stages of development, I also took over the tech lead duties, managing the development team and the development flow of the project as well.",
    descriptionSk:
      "Implementácia online platformy obsahujúcej autobazár a magazín ako kontraktor pre Remasted Solutions pre zákazníka Mobly(.be). Projekt bol zameraný na programovanie v Django frameworku - oba backend (Python) a frontend (JavaScript, Tailwind, HTMX, DTL). Aktívna účasť na integrácii služieb tretích strán. K náplni práce rovnako patrila spoluúčasť na dizajne systému a architektúty dátových tokov. V neskorších fázach výcoja som taktiež prevzal zodpovednosti technického vedúceho projektu, manažment developerského tímu a celkového vývoja projektu.",
  },

  {
    nameEn: "Broker Platform",
    slug: "broker-platform",
    technologies: [
      "AWS",
      "Django",
      "React.js",
      "Next.js",
      "Serverless",
      "TailwindCSS",
      "PostgreSQL",
      "Docker",
    ],
    isPro: true,
    startDate: new Date("2023-01-01"),
    endDate: new Date("2023-04-30"),
    relatedTo: ["Remaster Solutions"],
    client: "Baloise",
    logoStaticPath: "/logos/baloise.svg",
    descriptionEn: "Online web tool providing a complex car insurance management platform to the brokers of the customer, The Baloise Group (Belgium). Continuum development of a web application consisting of the Django Rest Framework with PostgreSQL and front-end implementation in React. Among others, working on system internationalisation and integration of translation services. Development of new React app features with extensive usage of Redux and TailwindCSS. Front-end migration of the React application from deprecated create-react-app dsolution to Next.js framework",
    descriptionSk: "",
  },
  {
    nameEn: "eBoard",
    slug: "eboard",
    technologies: [
      "Azure",
      ".Net",
      "Angular",
      "KendoUI",
      "SQL Server",
      "WPF"
    ],
    isPro: true,
    startDate: new Date("2023-05-01"),
    relatedTo: ["Esten"],
    client: "Essity",
    logoStaticPath: "/logos/essity.svg",
    descriptionEn:
      "Full stack developer role on implementation of web interface integrating various systems into one application displayed on a large touch screen. It digitizes processes and simplifies the work of operators and managers directly in production. It collects and concentrates data that has been lost until now and provides analytical outputs on it, which serves to increase safety and quality and thus contributes to the factory's profitability.",
    descriptionSk: "",
  },
  {
    nameEn: "Open-Air Theatre App",
    nameSk: "Amfiteáter Levoča",
    slug: "amfik",
    technologies: [
      "Django",
      "React.js",
      "Bootstrap",
      "SQLite",
      "Docker",
      "Figma"
    ],
    isPro: true,
    startDate: new Date("2021-05-20"),
    endDate: new Date("2022-09-04"),
    logoStaticPath: "/logos/amfik.svg",
    descriptionEn:
      "Freelance project for a student civic association involving the design and implementation of a full stack web application and its UI. UI created in Figma. Main technology Django (REST) framework with SQLite database. Frontend implemented in React with usage of Redux",
    descriptionSk: "",
  },
  {
    nameEn: "Personal Website",
    nameSk: "Osobná Webstránka",
    slug: "personal-web",
    technologies: [
      "Vercel",
      "Next.js",
      "TailwindCSS",
      "PostgreSQL",
      "Prisma",
      "Docker",
    ],
    isPro: false,
    link: "https://gernath.net",
    startDate: new Date("2023-09-05"),
    descriptionEn:
      "",
    descriptionSk: "",
  },
  {
    nameEn: "Web Content Recommendation Service",
    nameSk: "Systém Odporúčania Obsahu Webu",
    slug: "master-thesis",
    technologies: [
      "AWS",
      "Django",
      "GO",
      "Serverless",
      "MongoDB",
      "PostgreSQL",
      "Pytorch",
      "Scikit-Learn",
      "Docker",
    ],
    isPro: false,
    startDate: new Date("2022-02-01"),
    endDate: new Date("2023-03-31"),
    relatedTo: ["Remaster Solutions", "TUKE"],
    descriptionEn:
      "Recommendation service for a Django (with PostgreSQL) web application with minimal usage of financial and computational resources, optimised for AWS cloud deployment. Golang Lambda functions. Data embedding using NLP algorithms. Recommendations based on Chebyshev user-object vector similarity",
    descriptionSk: "",
  },
  {
    nameEn: "RehaPiano",
    slug: "rehapiano",
    technologies: [
      "Python",
      "RaspberyPi",
      "WebSocket",
      "AioSerial",
      "Docker"
    ],
    isPro: true,
    startDate: new Date("2023-07-01"),
    relatedTo: ["Esten"],
    logoStaticPath: "/logos/esten.svg",
    descriptionEn:
      "",
    descriptionSk: "",
  },
];
