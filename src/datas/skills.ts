type skillType = {
    type: 'FE' | 'BE' | 'DB' | 'DO' | 'PL' | 'etc' | 'OS';
    name: string;
    image: string;
    comment: string;
    highlight: boolean;
}

export const skills: Array<skillType> = [
    {
        type: 'FE',
        name: 'HTML',
        image: 'html',
        comment: "시맨틱 마크업을 준수하며 SEO 경험이 있습니다",
        highlight: true,
    },
    {
        type: 'FE',
        name: 'CSS',
        image: 'css',
        comment: "CSS Preprocessor 를 사용할 수 있습니다.",
        highlight: true,
    },
    {
        type: 'FE',
        name: 'React.js',
        image: 'react',
        comment: "Hooks에 익숙하며 공통 비즈니스 로직을 적절히 모듈화해서 사용할 수 있습니다. 합리적인 방식으로 컴포넌트를 분리 합니다.",
        highlight: true,
    },
    {
        type: 'FE',
        name: 'Next.js',
        image: 'next',
        comment: "어떤 방식으로 SEO를 지원해야할 지 알고 있습니다",
        highlight: true,
    },
    {
        type: 'FE',
        name: 'Angular.js',
        image: 'angular',
        comment: "컴포넌트가 어떻게 관리되고 렌더링 되는지, 서비스를 어떻게 만드는지 알고 있습니다",
        highlight: false,
    },
    {
        type: 'FE',
        name: 'jQuery',
        image: 'jquery',
        comment: "I can use basic jQuery library.",
        highlight: false,
    },
    {
        type: 'FE',
        name: 'Redux',
        image: 'redux',
        comment: "Ducks pattern을 따라 사용합니다.",
        highlight: false,
    },
    {
        type: 'FE',
        name: 'MobX',
        image: 'mobx',
        comment: "기본적인 상태관리를 합니다.",
        highlight: false,
    },
    {
        type: 'FE',
        name: 'React Native',
        image: 'rn',
        comment: "I have published a full-stack mobile application on both Apple App Store and Google Play.",
        highlight: true,
    },
    {
        type: 'BE',
        name: 'Node.js',
        image: 'node',
        comment: "Express 기반의 REST API를 구축할 수 있습니다.",
        highlight: true,
    },
    {
        type: 'BE',
        name: 'Java Spring',
        image: 'spring',
        comment: "기본 환경 세팅 및 라이브러리를 활용한 백엔드 서버 개발",
        highlight: false,
    },
    {
        type: 'BE',
        name: 'GraphQL',
        image: 'graphql',
        comment: "",
        highlight: false,
    },
    {
        type: 'DB',
        name: 'MySQL',
        image: 'mysql',
        comment: "데이터베이스에 관한 학사 기본 지식을 가지고 있으며 다중 서브쿼리 작성에 익숙합니다.",
        highlight: true,
    },
    {
        type: 'DB',
        name: 'Oracle',
        image: 'oracle',
        comment: "데이터베이스에 관한 학사 기본 지식을 가지고 있으며 다중 서브쿼리 작성에 익숙합니다.",
        highlight: true,
    },
    {
        type: 'DB',
        name: 'MongoDB',
        image: 'mongodb',
        comment: "NOSQL 에 대한 장단점을 알고 있으며 사용방법을 알고 있습니다.",
        highlight: true,
    },
    {
        type: 'DO',
        name: 'AWS',
        image: 'aws',
        comment: "EC2, S3, Route53, CloudFront, RDS, Elastic Beanstalk의 사용 경험이 있습니다.",
        highlight: true,
    },
    {
        type: 'DO',
        name: 'Git',
        image: 'Git',
        comment: "형상관리에 필요한 기본적인 사용법을 알고 있습니다.",
        highlight: true,
    },
    {
        type: 'DO',
        name: 'Docker',
        image: 'docker',
        comment: "이미지를 어떻게 관리하고 컨테이너에 태우는지, 컴포즈를 써본적이 있습니다.",
        highlight: false,
    },
    {
        type: 'DO',
        name: 'Jest',
        image: 'jest',
        comment: "TDD 개발의 기본적인 지식을 가지고 있습니다.",
        highlight: false,
    },
    // {
    //     type: 'DO',
    //     name: 'Enzyme',
    //     image: 'enzyme',
    //     comment: "",
    //     highlight: false,
    // },
    {
        type: 'DO',
        name: 'Jenkins',
        image: 'jenkins',
        comment: "",
        highlight: false,
    },
    {
        type: 'DO',
        name: 'Vercel',
        image: 'vercel',
        comment: "Next.js 프로젝트를 여러번 배포한 적이 있습니다.",
        highlight: true,
    },
    {
        type: 'DO',
        name: 'Heroku',
        image: 'heroku',
        comment: "리액트, 앵귤러, 노드 프로젝트를 배포해본 적이 있습니다.",
        highlight: true,
    },
    {
        type: 'PL',
        name: 'Javascript',
        image: 'javascript',
        comment: "ES6 이상 문법에 익숙하며 상황에 따라 적절한 자료 구조를 사용합니다.",
        highlight: true,
    },
    {
        type: 'PL',
        name: 'Typescript',
        image: 'typescript',
        comment: "타입 작성의 중요성을 알고 있습니다.",
        highlight: true,
    },
    {
        type: 'PL',
        name: 'Java',
        image: 'java',
        comment: "자료구조의 기본을 알고 있습니다.",
        highlight: false,
    },
    {
        type: 'PL',
        name: 'C/C++',
        image: 'c',
        comment: "STL을 사용할 줄 압니다.",
        highlight: false,
    },
    {
        type: 'etc',
        name: 'Yarn',
        image: 'yarn',
        comment: "",
        highlight: true,
    },
    {
        type: 'etc',
        name: 'npm',
        image: 'npm',
        comment: "",
        highlight: true,
    },
    {
        type: 'etc',
        name: 'webpack',
        image: 'webpack',
        comment: "프로젝트의 요구사항에 알맞는 환경을 세팅할 수 있습니다.",
        highlight: false,
    },
    {
        type: 'etc',
        name: 'Adobe Photoshop',
        image: 'photoshop',
        comment: "7.0버전부터 10년 이상 사용해왔습니다.",
        highlight: true,
    },
    {
        type: 'etc',
        name: 'Adobe Illustrator',
        image: 'illustrator',
        comment: "기본적인 툴을 다룰 줄 압니다.",
        highlight: false,
    },
    {
        type: 'etc',
        name: 'Adobe Premiere Pro / After Effect',
        image: 'premiere',
        comment: "기본적인 사용법을 알고 있습니다.",
        highlight: false,
    },
    {
        type: 'OS',
        name: 'Windows',
        image: 'windows',
        comment: "",
        highlight: true,
    },
    {
        type: 'OS',
        name: 'Mac OS',
        image: 'mac',
        comment: "",
        highlight: true,
    },
    {
        type: 'OS',
        name: 'Linux(Ubuntu)',
        image: 'ubuntu',
        comment: "",
        highlight: true,
    },
]