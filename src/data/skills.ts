type skillType = {
  type: "FE" | "BE" | "DB" | "DO" | "PL" | "etc" | "OS"
  name: string
  image: string
  comment: string
  highlight: boolean
}

export const skills: Array<skillType> = [
  {
    type: "FE",
    name: "JavaScript",
    image: "javascript",
    comment:
      "I am familiar with ES6 or above, and use appropriate data structures depending on the situation.",
    highlight: true,
  },
  {
    type: "FE",
    name: "TypeScript",
    image: "typescript",
    comment:
      "I know the importance of type writing and try to use Typescript whenever I can.",
    highlight: true,
  },
  {
    type: "FE",
    name: "HTML",
    image: "html",
    comment:
      "I follow the semantic markup and have experience of SEO. I can support various platforms and browsers. I have learned HTML since 2006 when I made the first website with Macromedia Flash and iframe.",
    highlight: true,
  },
  {
    type: "FE",
    name: "CSS",
    image: "css",
    comment: "I am used to using Flexbox and can use CSS preprocessor.",
    highlight: true,
  },
  {
    type: "FE",
    name: "React.js",
    image: "react",
    comment:
      "The library I love the most. I enjoy using React Hooks and can divide components by reasonable way and modularize with some common logics.",
    highlight: true,
  },
  {
    type: "FE",
    name: "React Native",
    image: "rn",
    comment:
      "I have published full-stack mobile applications on both Apple App Store and Google Play.",
    highlight: true,
  },
  {
    type: "FE",
    name: "Next.js",
    image: "next",
    comment:
      "I know what to do to achieve SEO in Next.js SSR Application. Love to use Next.js and Vercel.",
    highlight: true,
  },
  {
    type: "FE",
    name: "Angular.js",
    image: "angular",
    comment:
      "I know how the components are managed and rendered, and how to make services.",
    highlight: false,
  },
  {
    type: "FE",
    name: "jQuery",
    image: "jquery",
    comment: "I can use basic jQuery library.",
    highlight: false,
  },
  {
    type: "FE",
    name: "Redux",
    image: "redux",
    comment: "I follow Ducks pattern in Redux.",
    highlight: false,
  },
  // {
  //     type: 'FE',
  //     name: 'MobX',
  //     image: 'mobx',
  //     comment: "I do basic state management.",
  //     highlight: false,
  // },
  {
    type: "BE",
    name: "Node.js",
    image: "node",
    comment:
      "I am used to building a REST API Back-End server based on Express.js.",
    highlight: true,
  },
  {
    type: "BE",
    name: "Express.js",
    image: "express",
    comment:
      "I am used to building a REST API Back-End server based on Express.js.",
    highlight: true,
  },
  {
    type: "BE",
    name: "pm2",
    image: "pm2",
    comment:
      "I am used to building a REST API Back-End server based on Express.js.",
    highlight: true,
  },
  {
    type: "BE",
    name: "NGINX",
    image: "nginx",
    comment: "I",
    highlight: false,
  },
  {
    type: "BE",
    name: "Java Spring",
    image: "spring",
    comment:
      "I can set the development environment and build a Back-End server.",
    highlight: false,
  },
  {
    type: "BE",
    name: "JSP",
    image: "java",
    comment:
      "I can set the development environment and build a Back-End server.",
    highlight: false,
  },
  {
    type: "DB",
    name: "MySQL",
    image: "mysql",
    comment:
      "I have a Bachelor's knowledge of the database and am familiar with writing multiple subqueries.",
    highlight: true,
  },
  {
    type: "DB",
    name: "Oracle",
    image: "oracle",
    comment:
      "I have a Bachelor's knowledge of the database and am familiar with writing multiple subqueries.",
    highlight: true,
  },
  {
    type: "DB",
    name: "MongoDB",
    image: "mongodb",
    comment:
      "I know the pros and cons of NoSQL and how to use MongoDB and mongoose.",
    highlight: true,
  },
  {
    type: "DB",
    name: "GraphQL",
    image: "graphql",
    comment: "I studied basic GraphQL with Apollo.",
    highlight: false,
  },
  {
    type: "DO",
    name: "Git",
    image: "git",
    comment:
      "I have the basic knowledge of git. Even though I do not have that perfect experience in team collaboration, but I think time will solve it if I have a chance.",
    highlight: true,
  },
  {
    type: "DO",
    name: "Docker",
    image: "docker",
    comment:
      "I know what image and container is in Docker, and Docker Compose. I am willing to learn deeply if I have a job related to the Back-End.",
    highlight: false,
  },
  {
    type: "DO",
    name: "S3",
    image: "aws",
    comment:
      "I have been running React websites served by S3 and CloudFront that has a domain by Route53.",
    highlight: true,
  },
  {
    type: "DO",
    name: "CloudFront",
    image: "aws",
    comment:
      "I have deployed few instances with EC2, and they are used as a Back-End server or DB included instance. Https is also implemented with NginX and Let's Encrypt.",
    highlight: true,
  },
  {
    type: "DO",
    name: "EC2",
    image: "aws",
    comment:
      "I have experienced with RDS and Elastic Beanstalk. I prefer these if I have enough money.",
    highlight: true,
  },
  {
    type: "DO",
    name: "RDS",
    image: "aws",
    comment:
      "I have experienced with RDS and Elastic Beanstalk. I prefer these if I have enough money.",
    highlight: true,
  },
  {
    type: "DO",
    name: "App Center",
    image: "appcenter",
    comment:
      "My React Native project BritTea relies on Microsoft Codepish. When an update is needed, it can be distributed directly without getting approval from Google Play or Apple App Store.",
    highlight: true,
  },
  {
    type: "DO",
    name: "Vercel",
    image: "vercel",
    comment:
      "I have deployed several Next.js applications in Vercel and was satisfied because it was comfortable to use.",
    highlight: true,
  },
  {
    type: "DO",
    name: "Heroku",
    image: "heroku",
    comment:
      "I have deployed several React.js, Angular.js and Node.js applications.",
    highlight: true,
  },
  // {
  //     type: 'DO',
  //     name: 'Enzyme',
  //     image: 'enzyme',
  //     comment: "",
  //     highlight: false,
  // },
  // {
  //     type: 'DO',
  //     name: 'Jenkins',
  //     image: 'jenkins',
  //     comment: "",
  //     highlight: false,
  // },
  // {
  //     type: 'PL',
  //     name: 'Java',
  //     image: 'java',
  //     comment: "I have a Bachelor's knowledge of Java language and OOP.",
  //     highlight: false,
  // },
  // {
  //     type: 'PL',
  //     name: 'C/C++',
  //     image: 'c',
  //     comment: "I have a Bachelor's knowledge of C/C++ language and know how to use STL.",
  //     highlight: false,
  // },
  {
    type: "etc",
    name: "Jest",
    image: "jest",
    comment:
      "I know importance of TDD and have tried basics of Jest and Enzyme before.",
    highlight: false,
  },
  {
    type: "etc",
    name: "Yarn",
    image: "yarn",
    comment: "",
    highlight: true,
  },
  {
    type: "etc",
    name: "npm",
    image: "npm",
    comment: "",
    highlight: true,
  },
  {
    type: "etc",
    name: "webpack",
    image: "webpack",
    comment:
      "I can set up an environment that meets the requirements of the project.",
    highlight: false,
  },
  {
    type: "etc",
    name: "Photoshop",
    image: "photoshop",
    comment:
      "I have been using Photoshop for more than 10 years since version 7.0.",
    highlight: true,
  },
  {
    type: "etc",
    name: "Illustrator",
    image: "illustrator",
    comment: "I know the basic usage.",
    highlight: false,
  },
  {
    type: "etc",
    name: "Premiere Pro",
    image: "premiere",
    comment: "I know the basic usage of them.",
    highlight: false,
  },
  {
    type: "OS",
    name: "Windows",
    image: "windows",
    comment: "I am using Dell XPS 9560 and used to have a custom-built PC.",
    highlight: true,
  },
  {
    type: "OS",
    name: "Mac",
    image: "mac",
    comment: "I am using MacBook Pro 2019 Touch Bar.",
    highlight: true,
  },
  {
    type: "OS",
    name: "Linux(Ubuntu)",
    image: "ubuntu",
    comment: "I have installed Ubuntu in AWS EC2 and Raspberry Pi before.",
    highlight: true,
  },
]
