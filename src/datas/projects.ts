type ProjectType = {
    id: number;
    title: string;
    type: 'Production' | 'Toy' | 'Others';
    codeLink?: string;
    liveLink?: string;
    languages: string;
    year: string;
    duration: string;
    timespent?: number;
    stack: Array<string>;
    library?: string;
    profit?: string;
    result?: string;

    idea: string; //includes stack
    designIdea?: string;
    preview?: Array<string>;
    lesson: string;
}

export const projects: Array<ProjectType> = [
    {
        id: 0,
        type: 'Production',
        title: 'SelfBingo',
        codeLink: '',
        liveLink: 'https://selfbingo.com/ko',
        languages: 'English / Korean',
        timespent: 184,
        year: '2020',
        duration: '8.17. - 11.12.',
        stack: ['React.js(Next.js)', 'MySQL', 'AWS RDS'],
        profit: 'KaKao Adfit',
        library: 'https://github.com/stellarsailor/awesome-portfolio/blob/main/src/datas/dependencies/SelfBingo.json',

        idea: "After learning asd is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        lesson: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
        id: 1,
        type: 'Production',
        title: 'Valog',
        codeLink: '',
        liveLink: 'https://valog.gg',
        languages: 'Korean',
        year: '2020',
        duration: '4.28. - 10.28.',
        stack: ['React.js', 'Node.js(Express.js)', 'MySQL(EC2)', 'AWS S3/EC2/CloudFront/Route53'],
        profit: 'Google AdSense, KaKao Adfit',
        result: '180k Page Views in Google Analytics (Jan, 2021)',
        library: 'https://github.com/stellarsailor/awesome-portfolio/blob/main/src/datas/dependencies/Valog.json',
        
        idea: "After learning asd is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        lesson: '',
    },
    {
        id: 2,
        type: 'Production',
        title: 'BritTea',
        codeLink: '',
        liveLink: 'https://brittea.uk',
        languages: 'English / Korean',
        timespent: 314,
        year: '2019 - 2020',
        duration: '11.26. - 4.20.',
        stack: ['React Native', 'Node.js(Express.js)', 'MySQL(EC2)', 'AWS S3/EC2'],
        profit: 'Google Admob',
        result: '3k Downloads in Apple App store, 2k Downloads in Google Play',
        library: 'https://github.com/stellarsailor/awesome-portfolio/blob/main/src/datas/dependencies/BritTea.json',
        
        idea: "After learning asd is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        lesson: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
        id: 3,
        type: 'Toy',
        title: 'Genshin Party',
        codeLink: '',
        liveLink: 'https://genshinparty.com/en',
        languages: 'English / Korean',
        timespent: 30,
        year: '2020 - 2021',
        duration: '12.20. - 1. 1.',
        stack: ['React.js(Next.js)', 'AWS RDS(MySQL)', 'Vercel',],
        library: 'https://github.com/stellarsailor/awesome-portfolio/blob/main/src/datas/dependencies/Genshin%20Party.json',
        
        idea: "I love playing video games, and the one I have fallen in love at the moment is 'Genshin Impact'. I enjoy combining web development with what I like to play. However there is no visualized detailed party window in the game, so I made it to help people make their party comp easily and share by a link.",
        preview: [],
        lesson: '2개의 파티를 구성하는 로직을 구현하는데 꽤나 힘들었다. 주소를 통한 공유 기능을 만들때 쿼리 스트링을 어떤 방식으로 만들어야 가장 신뢰성이 높고 효율적으로 사용할 수 있을지에 대한 고민을 많이 함.',
    },
    {
        id: 4,
        type: 'Toy',
        title: 'Damwon Project',
        codeLink: '',
        liveLink: 'https://2020championdwg.com',
        languages: 'Korean',
        year: '2020',
        duration: '11. 4. - 11.14.',
        stack: ['React.js', 'AWS S3/CloudFront/Route53'],
        library: 'https://github.com/stellarsailor/awesome-portfolio/blob/main/src/datas/dependencies/Damwon%20Project.json',
        
        idea: "After learning asd is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        lesson: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
        id: 5,
        type: 'Toy',
        title: 'Memoiz',
        codeLink: '',
        languages: 'Korean',
        year: '2019',
        duration: '6.17. - 9. 7.',
        stack: ['React.js', 'Node.js(Express.js)', 'MySQL(EC2)', 'AWS S3/EC2/CloudFront/Route53'],
        library: 'https://github.com/stellarsailor/awesome-portfolio/blob/main/src/datas/dependencies/Memoiz.json',
        
        idea: "This is the first full-stack application with React.js I have ever developed. At that time I was learning English in London, UK so~",
        lesson: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
]