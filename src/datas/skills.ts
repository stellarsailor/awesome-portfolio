type skillType = {
    type: 'FE' | 'BE' | 'DB' | 'DO' | 'PL' | 'etc' | 'OS';
    name: string;
    image: string;
    comment: string;
    proficiency: 1 | 2; // 1 for only read document, followed tutorial or under 10 hrs, 2 for 100+ hrs
}

export const skills: Array<skillType> = [
    {
        type: 'PL',
        name: 'Javascript',
        image: 'javascript',
        comment: "I did Javascript for a year right now something.",
        proficiency: 2,
    },
    {
        type: 'PL',
        name: 'Typescript',
        image: 'typescript',
        comment: "I did Typescript for a year right now something.",
        proficiency: 2,
    },
    {
        type: 'FE',
        name: 'React.js',
        image: 'react',
        comment: "I did Typescript for a year right now something.",
        proficiency: 2,
    },
    {
        type: 'FE',
        name: 'Angular.js',
        image: 'angular',
        comment: "I did Typescript for a year right now something.",
        proficiency: 1,
    },
    {
        type: 'BE',
        name: 'Node.js',
        image: 'node',
        comment: "I did Typescript for a year right now something.",
        proficiency: 2,
    },
    {
        type: 'BE',
        name: 'Java Spring',
        image: 'spring',
        comment: "I did Typescript for a year right now something.",
        proficiency: 2,
    },
    {
        type: 'FE',
        name: 'HTML',
        image: 'html',
        comment: "I did Typescript for a year right now something.",
        proficiency: 2,
    },
    {
        type: 'FE',
        name: 'CSS',
        image: 'css',
        comment: "I did Typescript for a year right now something.",
        proficiency: 2,
    },
    {
        type: 'DB',
        name: 'MySQL',
        image: 'mysql',
        comment: "I did Typescript for a year right now something.",
        proficiency: 2,
    },
    {
        type: 'DB',
        name: 'Oracle',
        image: 'oracle',
        comment: "I did Typescript for a year right now something.",
        proficiency: 2,
    },
    {
        type: 'DB',
        name: 'MongoDB',
        image: 'mongodb',
        comment: "I did Typescript for a year right now something.",
        proficiency: 2,
    },
    {
        type: 'DO',
        name: 'Docker',
        image: 'docker',
        comment: "I did Typescript for a year right now something.",
        proficiency: 2,
    },
    {
        type: 'DO',
        name: 'Jenkins',
        image: 'jenkins',
        comment: "I did Typescript for a year right now something.",
        proficiency: 1,
    },
    {
        type: 'DO',
        name: 'Vercel',
        image: 'vercel',
        comment: "I did Typescript for a year right now something.",
        proficiency: 2,
    },
    {
        type: 'etc',
        name: 'Git',
        image: 'git',
        comment: "I did Typescript for a year right now something.",
        proficiency: 2,
    },
]