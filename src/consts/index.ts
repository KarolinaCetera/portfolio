import { ExperienceElementType } from "@component/typings";

export const dummyPosts = [
  {
    id: "p1",
    name: "Project 1",
    description: "Lorem ipsum project 1",
    type: "private",
    status: "finished",
  },
  {
    id: "p2",
    name: "Project 2",
    description: "Lorem ipsum project 2",
    type: "private",
    status: "in progress",
  },
  {
    id: "p3",
    name: "Project 3",
    description: "Lorem ipsum project 3",
    type: "work",
    status: "in progress",
  },
];

// TODO add Icon by <a href="https://freeicons.io/profile/433683">manshagraphics</a>
//                             on <a href="https://freeicons.io">freeicons.io</a>

export const techStack = [
  {
    name: "TypeScript",
    description:
      "Main language used for more than 3 years now. I've been working in projects build with plain language as well in those using TS with React. Now I can not imagine writing great code without strong typing",
    icon: "/tech/typescript.png",
  },
  {
    name: "React.js",
    description:
      "3+ years of experience. Proficiency with functional and class components. Also used with other libraries from ecosystem: React Query, MaterialUI, React Testing Library, react-router. ",
    icon: "/tech/react.svg",
  },
  {
    name: "Next.js",
    description:
      "Love from first sight. I appreciate built-in routing, SEO friendly functionalities and tools for building simple REST API. Used in private projects but already familiar with all core elements",
    icon: "/tech/next.svg",
  },
  {
    name: "Node.js",
    description:
      "I am focused on exploring JS ecosystem as much as possible - I could not avoid using Node.js then. Used for working with backend and creating services and libraries used within company projects",
    icon: "/tech/node.svg",
  },
  {
    name: "Nest.js",
    description:
      "As a React fan, I have to admit that using Angular's architecture for backend apps is a match made in heaven. I am heavily using this awesome framework in private projects (with Prisma, Apollo and GraphQL)",
    icon: "/tech/nest.svg",
  },
  {
    name: "Redux",
    description:
      "Used in cooperation with React in bigger projects, where Context API is not enough. Lastly I work with Redux Toolkit the most, however plain library is my go to when I need global state as well",
    icon: "/tech/redux.png",
  },
  {
    name: "Sass",
    description:
      "Sass makes my life easier when working with styles. I enjoy using all it's functionalities to make my apps beautiful",
    icon: "/tech/sass.png",
  },
  {
    name: "Others",
    description: "Yarn, Npm, Babel, Husky, ESLint, Prettier, Webpack, Git",
    icon: "/tech/gears.png",
  },
];

export const softSkills = [
  {
    name: "Scrum",
    description:
      "I am familiar with all rules of Scrum and Agile Project Management. However, I do not see it as an imperative - I believe part of being agile is choosing what's best for the project regarding changes circumstances",
    icon: "/tech/agile.png",
  },
  {
    name: "Team work",
    description:
      "We are all going toward the same goal, so we should cooperate. I am always doing my best to be valuable member of the team, help others and create the best solutions for the project. But I am also looking for environment that helps me grow and learn everyday.",
    icon: "/tech/team.png",
  },
  {
    name: "Code Refactor",
    description:
      "Once I had to fight with huge technical debt - now I know how to work even with the most clumsy legacy code. ",
    icon: "/tech/refactor.png",
  },
  {
    name: "Pair programming",
    description:
      "When encountering huge dilemma - brainstorming can save us. I appreciate value of two great minds coming together to solve the case and I like to use that technique in my work",
    icon: "/tech/pair.png",
  },
  {
    name: "Creating conventions",
    description:
      "I am a clean code fan and I enjoy using my knowledge about project patterns in my apps. I know some tricks and conventions that can make projects easier to maintain.",
    icon: "/tech/convention.png",
  },
  {
    name: "Responsive web design",
    description:
      "Core of modern web development - I know many techniques that make projects easily accessible on all screens and for all target groups",
    icon: "/tech/responsive.png",
  },
  {
    name: "Cooperation with others",
    description:
      "I have some design background, which makes my communication with designers easier and understandable. I find myself comfortable not only in typical code tasks, but also in contact with the client",
    icon: "/tech/cooperation.png",
  },
];

export const other = [
  {
    name: "Sports",
    description:
      "I am a huge football fan (well, coach fan) and FC Barcelona is my club. I attend functional training sessions at Hardy Wyższa Forma in Wrocław, I love cycling and hiking with my dog.",
    icon: "/tech/sports.png",
  },
  {
    name: "Music",
    description:
      "If I am not talking to someone, probably I am listening to music. Or talking about music to someone else. I know everything there is to know about David Bowie, Linkin Park and many other artits as I am a huge songs lyrics nerd. Also - I am learning to play ukulele. Sorry, neighbours!",
    icon: "/tech/music.png",
  },
  {
    name: "Riddles",
    description:
      "Solving mysteries in any form is definitely my thing. I enjoy going to escape rooms, reading crime stories and playing board games (not only mystery themed)",
    icon: "/tech/riddles.png",
  },
  {
    name: "History",
    description:
      "Do you want to get to know Wrocław better? I can be your guide as I live here for more than a decade and I am passionate about this city history",
    icon: "/tech/history.svg",
  },
  {
    name: "Philosophy",
    description:
      "Let's talk (if I am not listening to Bowie right now) - I want to listen to others and I am fascinated about what they have to say. I am here to exchange thoughts as I am so curious about others' points of view",
    icon: "/tech/philosophy.png",
  },
  {
    name: "Technologies",
    description:
      "I am always up to date with tech news. I love reading and talking about gadgets and... unfortunately also about purchasing them.",
    icon: "/tech/technologies.png",
  },
];

export const experienceElements: ExperienceElementType[] = [
  {
    companyName: "Heimstaden Group Poland",
    period: "August 2022 - May 2023",
    stack: "React, TypeScript, react-query, Xano, Sanity, Auth0, MaterialUI",
    points: [
      "developing and maintaining main company project (React + TS) for long- term rent management (used by over 250.000 customers)",
      "taking part in implementing new features for project using modern front- end solutions",
      "receiving and taking care of code review in a team with mid and senior frontend developers",
      "focusing on creating reusable front-end architecture",
      "creating low code backend solutions using Xano",
      "working with UX team on daily basis",
      "participating in company development process",
      "creating a service-oriented architecture within company project",
      "participation in road-map meeting and Scrum ceremonies",
    ],
  },
  {
    companyName: "LKQ Europe",
    period: "April 2022 - July 2022",
    stack:
      "React, TypeScript, react-query, Redux, MaterialUI, React Testing Library",
    points: [
      "creating and maintaining main company project (React + TS) for car repair shop management",
      "taking part in refactor project for company product",
      "writing unit tests for implemented solutions",
      "conducting code review",
      "cooperating with backend team in creating new features",
      "using Scrum on daily basis",
    ],
  },
  {
    companyName: "optAd360",
    period: "May 2020 - March 2022",
    stack:
      "Stack: React, TypeScript, Redux, Prebid.js, Google Ads, Blueprint.js, Cypress, Jest",
    points: [
      "taking part in creating a CMP window (React) that meets the requirements of the IAB (used by over 3000 sites around the world)",
      "creating and maintaining main project (TypeScript) for ad revenue optimization in company classified as Google Certified Publishing Partner",
      "adapting existing projects to the requirements of Core Web Vitals and delivering such solutions for clients",
      "planning and taking part in creating new lead company project (React + TS)",
      "working with Prebid.js and Google Ads",
      "using Scrum on daily basis, reviewing code within the team",
    ],
  },
];
