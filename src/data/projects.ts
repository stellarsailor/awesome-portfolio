import {
  DamwonProject,
  GenshinParty,
  Memoiz,
  BritTea,
  SelfBingo,
  Valog,
} from "./previews"

type ProjectType = {
  id: number
  title: string
  type: "Production" | "Toy" | "Others"
  codeLink?: string
  liveLink?: string
  mobileApp?: boolean
  appleLink?: string
  googleLink?: string
  languages: string
  year: string
  duration: string
  timespent?: number
  stack: Array<string>
  feature?: Array<string>
  library?: string
  profit?: string
  result?: string

  idea: string //includes stack
  explanation?: string
  preview?: any
  lesson?: string
}

export const projects: Array<ProjectType> = [
  {
    id: 0,
    type: "Production",
    title: "SelfBingo",
    codeLink: "https://github.com/stellarsailor/selfbingo",
    liveLink: "https://selfbingo.com/ko",
    languages: "English / Korean",
    timespent: 184,
    year: "2020",
    duration: "8.17. - 11.12.",
    stack: ["React.js(Next.js)", "MySQL", "AWS RDS"],
    feature: [
      "Responsive",
      "SSR",
      "SEO",
      "i18n (English/Korean)",
      "Social Login",
      "Serverless Back-End",
      "HTTPS",
    ],
    profit: "KaKao Adfit",
    library:
      "https://github.com/stellarsailor/awesome-portfolio/blob/main/src/data/dependencies/SelfBingo.json",

    idea:
      "I came up with the idea of 'Single Bingo', which is the bingo that you can play by yourself. I think this is not common in English culture. There is bingo, for example, 'Silver Spoon bingo - How rich is your family?' or 'Anime/Movie Otaku Bingo - How many Animes/Movies have you watched?'. The bingo elements are set whatever by the creator and everyone can play the bingo and share the result of it. Some people tend to show off what they have had or watched/known. That was the idea of the SelfBingo.",
    explanation:
      "The every bingo element should be searched in Google Search Engine to gather people, so I had to make this project SSR base. I used Next.js first time properly in this project, and I really loved how much Next.js was well made and comfortable to set SSR. In addition, Vercel was an amazing platform to deploy Next.js project easily, in terms of no need to set up SSL for https.",
    preview: SelfBingo,
    lesson:
      "It was difficult to implement Bingo logic and how to render neatly in every aspect ratio. It took some time to how to manage bingo Element as JSON data and to store in the database considering to implement average data or top percentage by rank-over. I think I have became good at handling arrays and objects in JavaScript.",
  },
  {
    id: 1,
    type: "Production",
    title: "Valog",
    codeLink: "https://github.com/stellarsailor/valopgg",
    liveLink: "https://valog.gg",
    mobileApp: true,
    googleLink:
      "https://play.google.com/store/apps/details?id=com.mobile_valopgg&hl=en&gl=US",
    languages: "Korean",
    year: "2020",
    duration: "4.28. - 10.28.",
    stack: [
      "React.js",
      "Node.js(Express.js)",
      "NGINX",
      "MySQL(EC2)",
      "AWS S3/EC2/CloudFront/Route53",
      "React Native (Web View App)",
    ],
    feature: [
      "SPA",
      "Responsive",
      "Pre-rendered by react-snapshot",
      "SEO",
      "RESTful Back-End",
      "HTTPS SSL(Let's Encrypt)",
    ],
    profit: "Google AdSense, KaKao Adfit / Google Admob(Mobile)",
    result:
      "220k Users, 400k Sessions on Google Analytics, 5k downloads on Google Play ( ~ Feb 2021)",
    library:
      "https://github.com/stellarsailor/awesome-portfolio/blob/main/src/data/dependencies/Valog.json",
    idea:
      "I am a big fan of video games and E-Sports, so when Riot Games' Valorant was released, I started to make a Valorant information website for the Koreans. I would say this is the very first Valorant website in the Korean community, so it went viral.",
    explanation:
      "In this project, there was no difficult logic, just JSON data communication between Front-End and Back-End for the information. I just had to make database tables properly. I deployed React project on AWS S3 and CloudFront and made Back-End API on AWS EC2 instance with NGINX and Let's Encrypt SSL. I also published an android mobile application with React Native to gather people more.",
    preview: Valog,
    lesson:
      "The thing I was really struggled with was SEO. I didn't expect people would visit my website this much, so I had to make a profit. If you know, getting approval from Google Adsense is really hard unless it is search engine optimized well and had enough content. I learned how to optimize the website a lot. I tried migrating to Next.js at that moment, but it took too much time. Instead of it, I found a solution which was 'react-snapshot'. It could help me get approval Google Adsense.",
  },
  {
    id: 2,
    type: "Production",
    title: "BritTea",
    codeLink: "https://github.com/stellarsailor/brittea-public",
    liveLink: "https://brittea.uk",
    mobileApp: true,
    appleLink: "https://apps.apple.com/app/id1504702021",
    googleLink:
      "https://play.google.com/store/apps/details?id=com.alice.brittea",
    languages: "English / Korean",
    timespent: 314,
    year: "2019 - 2020",
    duration: "11.26. - 4.20.",
    stack: [
      "React Native",
      "Redux",
      "Node.js(Express.js)",
      "NGINX",
      "MySQL(EC2)",
      "AWS S3/EC2",
      "Microsoft App Center",
    ],
    feature: [
      "i18n (English/Korean)",
      "Social Login",
      "RESTful Back-End",
      "HTTPS",
    ],
    profit: "Google Admob",
    result: "5k Downloads on Apple App store, 5k Downloads on Google Play",
    library:
      "https://github.com/stellarsailor/awesome-portfolio/blob/main/src/data/dependencies/BritTea.json",

    idea:
      "After I made a English learning website 'Memoiz', I was eager to make a mobile application with a mic recording feature. In addition, I have realized that the best way to get accent is listen and repeat, and then listen their voice again and again. That was the key to practice accent. Listening theirs and modifing it. I used Youtube videos as a learning material. Users can listen a sentence from youtube videos and record their voice sentence by sentence. And then, they can play both audio or either one of them.",
    explanation:
      "I used React Native for the first time, and it was quite satisfying compared to when I developed an android app with Android Studio ver 2.0. To release worldwide, it has to support i18n, and I used Redux as a state management tool. For the main feature 'listening and repeat', I had to select libraries for the recording and Youtube player carefully. Usually it is related to native features so. The most I have accomplished in this app is I added Microsoft Codepush, which helps you update code bundle without building, uploading and getting approval in Apple App Store and Google Play.",
    preview: BritTea,
    lesson:
      "In terms of developing a cross-platform mobile application, it is definitely comfortable than developing both OS. However, React Native was not officially release 1.0 version, so it was sort of 'not stable'. I think I saw 'red error screen' for hundreds times. The source of errors were really unexpectable. I have been thinking about giving up again and again, but there were always answers on Google. It saved me. In conclusion, I had learnt a lot while I was planning, designing, coding, collecting data, deploying and promoing by myself. I think the time 314 hours I spent here was worth it in my career.",
  },
  {
    id: 3,
    type: "Toy",
    title: "Genshin Party",
    codeLink: "https://github.com/stellarsailor/genshinProject",
    liveLink: "https://genshinparty.com/en",
    languages: "English / Korean",
    timespent: 30,
    year: "2020 - 2021",
    duration: "12.20. - 1. 1.",
    stack: ["React.js(Next.js)", "AWS RDS(MySQL)", "Vercel"],
    feature: [
      "SPA",
      "Responsive",
      "CSR",
      "Serverless Back-End",
      "i18n",
      "HTTPS",
    ],
    library:
      "https://github.com/stellarsailor/awesome-portfolio/blob/main/src/data/dependencies/Genshin%20Party.json",

    idea:
      "I love playing video games, and the one I have fallen in love at the moment is 'Genshin Impact'. I enjoy combining web development with what I like to play. However there is no visualized detailed party window in the game, so I made it to help people make their party comp easily and share by a link.",
    preview: GenshinParty,
    lesson:
      "It was difficult to implement the logic to compose two parties exactly same as the in-game one. I considered a lot how to make query string to be the most efficient when the URL is shared.",
  },
  {
    id: 4,
    type: "Toy",
    title: "Damwon Project",
    codeLink: "https://github.com/stellarsailor/damwongaming",
    liveLink: "https://2020championdwg.com",
    languages: "Korean",
    year: "2020",
    duration: "11. 4. - 11.14.",
    stack: ["React.js", "AWS S3/CloudFront/Route53"],
    feature: ["SPA", "Responsive", "CSR", "HTTPS"],
    library:
      "https://github.com/stellarsailor/awesome-portfolio/blob/main/src/data/dependencies/Damwon%20Project.json",

    idea:
      "I love watching E-Sports, and the biggest one is League of Legends. In 2020, the Korean team Damwon Gaming won the World Championship. I was so happy about that and I made a fan-letter/message book website from thousands of fans to celebrate together.",
    preview: DamwonProject,
    lesson:
      "The thing that's lacking is that I didn't pay much attention to the design and layout. I had to make a website quickly and the most time-consuming thing was managing JSON data. I received thousands of fan-letters, messages, fan-arts, articles and comments on clips. It took some time to process the JSON data.",
  },
  {
    id: 5,
    type: "Toy",
    title: "Memoiz",
    codeLink: "",
    languages: "Korean",
    year: "2019",
    duration: "6.17. - 9. 7.",
    stack: [
      "React.js",
      "Node.js(Express.js)",
      "NGINX",
      "MySQL(EC2)",
      "AWS S3/EC2/CloudFront/Route53",
    ],
    feature: [
      "SPA",
      "Responsive",
      "CSR",
      "RESTful Back-End",
      "Social Login",
      "HTTPS SSL(Let's Encrypt)",
    ],
    library:
      "https://github.com/stellarsailor/awesome-portfolio/blob/main/src/data/dependencies/Memoiz.json",

    idea:
      "This is the first full-stack application with React.js I have ever developed. At that time I was learning, English especially speaking. I wanted to combine it with a website. The name is derived from the word 'Memoization'. I thought memorizing sentences itself to speak fluently was similar to the 'Memoization' in Computer Science.",
    preview: Memoiz,
    lesson:
      "This was the first project ever, so the code was quite messy and not been modularized well. However, I could learn how to make responsive layout, how to store auth data, how to use JWT, how to make database tables to use practically, how to use AWS various services, especially setting back-End server in EC2 with NGINX and https SSL was a truly memorable experience.., literally many things in web development while working on this project. By doing this project, I was able to grasp what modern web development is.",
  },
]
