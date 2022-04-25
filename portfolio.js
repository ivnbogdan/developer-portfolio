import emoji from "react-easy-emoji";

export const greetings = {
  name: "Bogdan Ivanov",
  title: "Hello I'm Bogdan",
  description:
    "I've been working as a Full Stack developer until 2017, and since then focused more on the Front-End part. So I guess I should be called a Front-End Developer now? Built multiple apps with Angular, lately got into React. Since end of 2021 started spending time and researching Blockchain, Web3 and NFTs.",
  resumeLink: "/files/Bogdan_Ivanov_CV.pdf",
  lottieAnimationFile: "/lottie/skills/development.json",
};

export const openSource = {
  githubUserName: "ivnbogdan",
};

export const contact = {};

export const socialLinks = {
  facebook: "https://www.facebook.com/ivanov.bogdan",
  twitter: "https://twitter.com/bog_ivn",
  github: "https://github.com/ivnbogdan",
  linkedin: "https://www.linkedin.com/in/bogdan-ivanov-tech/",
};

export const skillsSection = {
  title: "What I do",
  subTitle:
    "Front-End developer senior in Angular, beginner in React, curious about Web3",
  data: [
    {
      title: "Development libraries",
      lottieAnimationFile: "/lottie/skills/web-dev.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Building Angular libraries and applications"),
        emoji("⚡ Building and learning React applications"),
        emoji(
          "⚡ Exploring all things Front-End: mobile, PWAs, interactions with Smart Contracts"
        ),
      ],
      softwareSkills: [
        {
          skillName: "Angular",
          fontAwesomeClassname: "vscode-icons:file-type-angular",
        },
        {
          skillName: "Reactjs",
          fontAwesomeClassname: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "HTML-5",
          fontAwesomeClassname: "vscode-icons:file-type-html",
        },
        {
          skillName: "SCSS",
          fontAwesomeClassname: "vscode-icons:file-type-scss",
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "logos:javascript",
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "logos:npm-icon",
        },
      ],
    },
    {
      title: "Deployments",
      lottieAnimationFile: "/lottie/skills/cloudinfra.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Deploying and integrating Web Apps wherever needed"),
        emoji(
          "⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions / Azure Dev Ops / AWS"
        ),
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "logos:aws",
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "logos:microsoft-azure",
        },
        {
          skillName: "Github",
          fontAwesomeClassname: "akar-icons:github-fill",
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "logos:docker-icon",
        },
        {
          skillName: "Github Actions",
          fontAwesomeClassname: "logos:github-actions",
        },
      ],
    },
    {
      title: "Curious about Blockchain",
      lottieAnimationFile: "/lottie/skills/blockchain.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Started building some hybrid web2-web3 apps"),
        emoji("⚡ Learning about Blockchains, Smart Contracts and Tokens"),
        emoji("⚡ Building Dapps with React.js & Solidity using Web3.js"),
      ],
      softwareSkills: [
        {
          skillName: "Ethereum",
          fontAwesomeClassname: "logos:ethereum",
        },
        {
          skillName: "Solidity",
          fontAwesomeClassname: "logos:solidity",
        },
        {
          skillName: "Web3js",
          fontAwesomeClassname: "logos:web3js",
        },
        {
          skillName: "Metamask",
          fontAwesomeClassname: "logos:metamask-icon",
        },
      ],
    },
  ],
};

export const SkillBars = [
  {
    Stack: "Angular",
    fontAwesomeClassname: "vscode-icons:file-type-angular",
    progressPercentage: "98",
  },
  {
    Stack: "React",
    fontAwesomeClassname: "vscode-icons:file-type-reactjs",
    progressPercentage: "30",
  },
  {
    Stack: "HTML/CSS design",
    fontAwesomeClassname: "vscode-icons:file-type-html",
    progressPercentage: "80",
  },
];

export const educationInfo = [
  {
    schoolName: "Master's degree",
    subHeader: "Faculty of Automatic Control and Computers",
    desc: "University Politehnica of Bucharest.",
    duration: "October 2014 - July 2016",
    descBullets: [
		"Management in software development",
		"Information technology"
	],
  },
  {
    schoolName: "Bachelor's degree",
    subHeader: "Faculty of Automatic Control and Computers",
    desc: "University Politehnica of Bucharest.",
    duration: "October 2009 - July 2013",
    descBullets: [
      "Computer science department",
      "Networking / OOP / Operating Systems",
    ],
  },
];

export const experience = [
  {
    role: "Front-end developer - Angular",
    company: "HTS Software",
    companylogo: "/img/icons/common/htss.jpg",
    date: "Nov 2021 - Present",
    desc: "Working as a Front-End engineer, developing a software solution for pharmacies. This includes a complete workflow of sales and management. Working with Angular, Nx Workspace, Azure.",
    // descBullets: [
    // 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
    // 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    // ],
  },
  {
    role: "Front-end developer - React",
    company: "Ninja Stack",
    companylogo: "/img/icons/common/ninja.png",
    date: "Dec 2021 - Present",
    desc: "We're building an NFT Sales Bot as SaaS. A tool integrated with Discord that posts messages on every sale, with a front-end to configure the collection and integration details.",
    // descBullets: [
    // 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
    // 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    // ],
  },
  {
    role: "Front-end developer - Angular",
    company: "Domino Byte",
    companylogo: "/img/icons/common/domino.png",
    date: "Dec 2017 - Oct 2021",
    desc: "Working on logistics application for XPO Logistics. Part of the core team that developed all Front-end Angular libraries used across multiple apps.",
  },
  {
    role: "Full stack developer",
    company: "Treptio",
    companylogo: "/img/icons/common/treptio.png",
    date: "Mar 2016 - Nov 2017",
    desc: "Developing an Education app for US private schools, working full stack with AngularJS and C# Web Api.",
  },
  {
    role: "Software developer",
    company: "Ixia",
    companylogo: "/img/icons/common/ixia.png",
    date: "2012 - 2016",
    desc: "Worked on multiple Apps, Windows app with C#, WPF, WinForms, and some WebApps with Angular + Typescript.",
  },
];

// export const projects = [
//   {
//     name: "AtlasMart",
//     desc: "With Atlas Mart, it’s easy to find the products with the best price and ship them straight to your door.",
//     link: "https://atlasmart.netlify.app/",
//   },
//   {
//     name: "Technota (Forum)",
//     desc: "Get hands-on experience in technical skills with Technota",
//     link: "https://technota.netlify.app/",
//   },
//   {
//     name: "Shopaza (Ecommerce)",
//     desc: "Now your reach to all your favorite entertainment and luxury items is just one touch apart",
//     link: "https://shopaza.herokuapp.com/",
//   },
//   {
//     name: "MMFmelody (Blog)",
//     desc: "Here you will find amazing tips about health, beauty, and modern-day life.",
//     // github: "https://github.com/1hanzla100",
//     link: "https://mmfmelody.herokuapp.com/",
//   },
//   {
//     name: "Developer-Portfolio",
//     desc: "Software Developer Portfolio Template built with react.js and next.js bootstrap that helps you showcase your work and skills as a software developer.",
//     github: "https://github.com/1hanzla100/developer-portfolio",
//     link: "https://developer-portfolio-1hanzla100.vercel.app/",
//   },
// ];

// export const feedbacks = [
//   {
//     name: "John Smith",
//     feedback:
//       "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.",
//   },
//   {
//     name: "John Smith",
//     feedback:
//       "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.",
//   },
// ];
