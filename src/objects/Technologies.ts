export type TechnologySection = {
    translationKey: string
    technologies: Technology[]
}

export type Technology = {
    title: string
    progress: number
    certification?: Certification
}

export type Certification = {
    logoPath: string
    link: string
}

export const technologies: TechnologySection[] = [
    {
        translationKey: 'Programming and Markup Languages',
        technologies: [
            { title: 'TypeScript', progress: 80 },
            { title: 'C#', progress: 60 },
            { title: 'Python', progress: 60 },
            { title: 'GO', progress: 20 },
            { title: 'SQL', progress: 60 },
            { title: 'JavaScript', progress: 70 },
        ],
    },
    {
        translationKey: 'Frameworks and Libraries',
        technologies: [
            {
                title: 'Angular',
                progress: 85,
                certification: {
                    logoPath: '/logos/angular-cert.svg',
                    link: 'https://api.certificates.dev/certificates/9f6300ec-b01a-407b-8987-4e034b19c51e/download?signature=2130a076b24bf16867b39cf3a5a3e36bd72880a21b3897985bf177592c69ee22',
                },
            },
            { title: '.Net', progress: 70 },
            { title: 'Django', progress: 60 },
            { title: 'Next.js', progress: 70 },
            { title: 'React.js', progress: 50 },
            { title: 'Flask', progress: 40 },
            { title: 'HTMX', progress: 80 },
            { title: 'TailwindCSS', progress: 90 },
            { title: 'Bootstrap', progress: 50 },
            { title: 'WPF', progress: 50 },
            { title: 'Prisma', progress: 40 },
        ],
    },
    {
        translationKey: 'Databases',
        technologies: [
            { title: 'PostgreSQL', progress: 70 },
            { title: 'MongoDB', progress: 50 },
            { title: 'SQL Server', progress: 70 },
            { title: 'SQLite', progress: 60 },
            { title: 'CosmosDB', progress: 20 },
        ],
    },
    {
        translationKey: 'Development and Design Tools',
        technologies: [
            { title: 'Git', progress: 90 },
            { title: 'Figma', progress: 60 },
            { title: 'Docker', progress: 70 },
            { title: 'CircleCI', progress: 40 },
            { title: 'Jira', progress: 60 },
            { title: 'Azure Pipelines', progress: 70 },
            { title: 'Github Actions', progress: 40 },
        ],
    },
    {
        translationKey: 'Cloud and DevOps',
        technologies: [
            { title: 'AWS', progress: 40 },
            { title: 'Serverless', progress: 30 },
            { title: 'Azure', progress: 30 },
            { title: 'PowerAutomate', progress: 20 },
            { title: 'Vercel', progress: 20 },
        ],
    },
]
