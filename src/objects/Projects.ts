export type Project = {
    nameEn: string
    nameSk?: string
    slug: string
    technologies: string[]
    isPro: boolean
    link?: string
    startDate: Date
    endDate?: Date
    relatedTo?: string[]
    client?: string
    logoStaticPath?: string
    descriptionEn: string
    descriptionSk: string
}

export const projectList: Project[] = [
    {
        nameEn: 'Vroom',
        slug: 'vroom',
        technologies: [
            'AWS',
            'Django',
            'HTMX',
            'Serverless',
            'TailwindCSS',
            'Bootstrap',
            'PostgreSQL',
            'Docker',
            'Figma',
        ],
        isPro: true,
        link: 'https://vroom.be',
        startDate: new Date('2021-10-01'),
        endDate: new Date('2022-12-31'),
        relatedTo: ['Remaster Solutions'],
        client: 'Mobly',
        logoStaticPath: '/logos/vroom.svg',
        descriptionEn:
            'Online car dealership and magazine platform implementation as a contractor for Remaster Solutions for customer Mobly(.be). Focused primarily on Django framework programming - both backend (Python) and frontend (JavaScript, Tailwind, HTMX, DTL). Actively participating in third-party services integration. Involved in designing the system and data flow architecture. In later stages of development, I also took over the tech lead duties, managing the development team and the development flow of the project as well.',
        descriptionSk:
            'Implementácia online platformy obsahujúcej autobazár a magazín ako kontraktor pre Remasted Solutions pre zákazníka Mobly(.be). Projekt bol zameraný na programovanie v Django frameworku - oba backend (Python) a frontend (JavaScript, Tailwind, HTMX, DTL). Aktívna účasť na integrácii služieb tretích strán. K náplni práce rovnako patrila spoluúčasť na dizajne systému a architektúty dátových tokov. V neskorších fázach výcoja som taktiež prevzal zodpovednosti technického vedúceho projektu, manažment developerského tímu a celkového vývoja projektu.',
    },

    {
        nameEn: 'Broker Platform',
        slug: 'broker-platform',
        technologies: [
            'AWS',
            'Django',
            'React.js',
            'Next.js',
            'Serverless',
            'TailwindCSS',
            'PostgreSQL',
            'Docker',
        ],
        isPro: true,
        startDate: new Date('2023-01-01'),
        endDate: new Date('2023-04-30'),
        relatedTo: ['Remaster Solutions'],
        client: 'Baloise',
        logoStaticPath: '/logos/baloise.svg',
        descriptionEn:
            "An online web tool providing a comprehensive car insurance management platform for the customer's brokers, The Baloise Group (Belgium). The project involves the continuous development of a web application consisting of the Django Rest Framework with PostgreSQL, as well as front-end implementation in React. Additionally, we were working on system internationalization and the integration of translation services. We were also developing new React app features with extensive usage of Redux and TailwindCSS. Furthermore, there is a front-end migration of the React application from the deprecated create-react-app solution to the Next.js framework.",
        descriptionSk:
            'Online webový nástroj poskytujúci komplexnú platformu na správu poistky automobilov pre maklérov zákazníka, Baloise Group (Belgicko). Projekt zahŕňa kontinuálny vývoj webovej aplikácie pozostávajúcej z Django Rest Frameworku s PostgreSQL a implementáciu front-endu v Reacte. Okrem toho práca na projekte zahŕňala internacionalizáciu systému a integráciu služieb prekladu. Nové funkcie aplikácie React boli implementované s rozsiahlym využitím Reduxu a TailwindCSS. Taktiež prebehla migrácia front-endovej aplikácie React zo zastaranej create-react-app na Next.js.',
    },
    {
        nameEn: 'eBoard',
        slug: 'eboard',
        technologies: [
            'Azure',
            '.Net',
            'Angular',
            'KendoUI',
            'SQL Server',
            'WPF',
            'Azure Pipelines',
        ],
        isPro: true,
        startDate: new Date('2023-05-01'),
        relatedTo: ['Esten'],
        client: 'Essity',
        logoStaticPath: '/logos/essity.svg',
        descriptionEn:
            "Taking on the role of a full-stack developer for the implementation of a web interface that integrates various systems into a single application displayed on a large touchscreen. This interface digitizes processes and streamlines the work of operators and managers directly within the production environment. It gathers and consolidates data that was previously lost and provides analytical insights, contributing to enhanced safety, quality, and ultimately boosting the factory's profitability.",
        descriptionSk:
            'V rámci funkcie full stack developera som sa zaoberal implementáciou webového rozhrania, integrujúceho rôzne systémy do jednej aplikácie zobrazovanej na veľkom dotykovom displeji. Toto rozhranie digitalizuje procesy a zjednodušuje prácu operátorov a manažérov priamo výrobnom prostredí. Získava a sústreďuje údaje, ktoré boli doteraz stratené, a poskytuje analytické výstupy, prispievajúce k zvýšeniu bezpečnosti, kvality a tým i k ziskovosti továrne.',
    },
    {
        nameEn: 'Open-Air Theatre App',
        nameSk: 'Amfiteáter Levoča',
        slug: 'amfik',
        technologies: [
            'Django',
            'React.js',
            'Bootstrap',
            'SQLite',
            'Docker',
            'Figma',
        ],
        isPro: true,
        startDate: new Date('2021-05-20'),
        endDate: new Date('2022-09-04'),
        logoStaticPath: '/logos/amfik.svg',
        descriptionEn:
            'I undertook a solo freelance project for a student civic association, which entailed designing and implementing a full-stack web application along with its user interface (UI). The UI was created in Figma. The primary technology used was the Django (REST) framework with an SQLite database, and the frontend was implemented in React with the use of Redux. The goal of the project was creating website promoting civic association, providing information about organized public events and allowing community donations to the old open-air theatre restoration.',
        descriptionSk:
            'Zaoberal som sa samostatným projektom pre študentskú občiansku organizáciu, ktorý zahŕňal návrh a implementáciu plnohodnotnej webovej aplikácie a jej užívateľského rozhrania (UI). UI bolo vytvorené v programe Figma. Hlavnou technológiou použitou pri tomto projekte bol rámec Django (REST) s databázou SQLite a frontend bol implementovaný v Reacte s využitím Reduxu. Cieľom projektu bolo vytvorenie webstránky na propagáciu občianskeho združenia a jeho aktivít, poskytovanie informácií o organizovaných podujatiach a umožnenie finančnej pomoci s rekonštrukciou starého amfiteátra.',
    },
    {
        nameEn: 'Personal Website',
        nameSk: 'Osobná Webstránka',
        slug: 'personal-web',
        technologies: [
            'Vercel',
            'Next.js',
            'TailwindCSS',
            'PostgreSQL',
            'Prisma',
            'Docker',
        ],
        isPro: false,
        link: 'https://gernath.net',
        startDate: new Date('2023-09-05'),
        descriptionEn:
            'My personal website serves as a platform for promoting myself and showcasing my skills as a full-stack software developer. In addition to this, the motivation behind this project was to create a functional piece of code that I can share with anyone without violating a non-disclosure agreement (NDA). The website is continuously evolving, and you can find the source code on my GitHub profile. There, you can also track the current development status and check out plans for the future (take a look at the milestones and issues section). The application is written in Next.js 13, following an App Directory approach, and it is deployed on Vercel.',
        descriptionSk:
            'Moja osobná webová stránka slúžiaca ako platforma na propagáciu môjho profilu a prezentáciu mojich zručností ako full-stack softvérového vývojára. Okrem toho bol dôvodom tohto projektu aj zámer vytvoriť funkčný kód, ktorý môžem zdieľať s kýmkoľvek bez porušenia zmluvy o zachovaní dôvernosti (NDA). Webová stránka sa neustále vyvíja, a jej zdrojový kód nájdete na mojom GitHub profile. Tam môžete sledovať aj aktuálny stav vývoja a plány do budúcnosti (pozrite si sekciu míľniky a problémy). Aplikácia je naprogramovaná v Next.js 13 s využitím "App Directory" prístupu a je nasadená na platforme Vercel.',
    },
    {
        nameEn: 'Web Content Recommendation Service',
        nameSk: 'Systém Odporúčania Obsahu Webu',
        slug: 'master-thesis',
        technologies: [
            'AWS',
            'Django',
            'GO',
            'Serverless',
            'MongoDB',
            'PostgreSQL',
            'Pytorch',
            'Scikit-Learn',
            'Docker',
        ],
        isPro: false,
        startDate: new Date('2022-02-01'),
        endDate: new Date('2023-03-31'),
        relatedTo: ['Remaster Solutions', 'TUKE'],
        descriptionEn:
            'This project involves creating a recommendation service for a Django web application with PostgreSQL, with a focus on minimizing the use of financial and computational resources. The system is optimized for deployment on the AWS cloud infrastructure and utilizes Golang Lambda functions for efficient processing. Data embedding is achieved using NLP algorithms, and recommendations are generated based on Chebyshev user-object vector similarity.',
        descriptionSk:
            'Tento projekt zahŕňal vytvorenie služby na odporúčanie pre webovú aplikáciu Django s použitím PostgreSQL, s dôrazom na minimalizáciu finančných a výpočtových zdrojov. Systém je optimalizovaný pre nasadenie v cloudovom prostredí AWS a využíva Golang Lambda funkcie na efektívne spracovanie dát. Embedovanie údajov je dosiahnuté pomocou algoritmov pre spracovanie prirodzeného jazyka (NLP), a odporúčania sú generované na základe podobnosti vektorov používateľa a objektu pomocou Chebyshevovej metriky vzdialenosti.',
    },
    {
        nameEn: 'RehaPiano',
        slug: 'rehapiano',
        technologies: ['Python', 'RaspberyPi', 'WebSocket', 'Docker'],
        isPro: true,
        startDate: new Date('2023-07-01'),
        endDate: new Date('2023-11-31'),
        relatedTo: ['Esten'],
        logoStaticPath: '/logos/esten.svg',
        descriptionEn:
            'Development of the software necessary for a rehabilitation and treatment monitoring hardware device in Python. More information will be added later since the project is still under development, and a non-disclosure agreement (NDA) may apply to all the project details.',
        descriptionSk:
            'Vývoj softvéru potrebného pre zariadenie na rehabilitáciu a monitorovanie progresu liečby v jazyku Python. Ďalšie informácie budú pridané neskôr, pretože projekt je stále vo vývoji, a na všetky podrobnosti projektu sa môže vzťahovať zmluva o zachovaní dôvernosti (NDA).',
    },
]
