import { createGlobalStyle } from "styled-components"

export const links = ["About", "Experience", "Projects", "Hobbies", "Contact"]
export const about = [
  {
    title: "Everyday Life",
    icon: "https://cerassus.eu/icons/world_icon.png",
    content:
      "My Name is Michał Wiśniewski. I am 32 years old, living in Poland with my beautiful wife and Portos. Portos is our dog, cream-colored Golden Retriever who makes our lives happier. We both love to travel and visit new places during every vacation. I am a big fan of travelling by plane, sightseeing, Neapolitan pizza and single malt whisky. One of my life goals is to visit Seven Wonders of World.",
  },
  {
    title: "Everyday Work",
    icon: "https://cerassus.eu/icons/brain_icon.png",
    content:
      "My career started in sales in Consumer Electronics. I was selling cameras, RTV products and games. Since the beginning of 2020 I decided to move my career to a completely different direction and started to learn programming. I am constantly improving my knowledge by practicing writing code in JavaScript with Frameworks and popular libraries. I'm quick learner and hungry for knowledge and experience.",
  },
]
export const experience_tabs = ["Courses", "Technologies", "Resume"]
export const courses = {
  freeCodeCamp: [
    {
      course: "Responsive Web Design",
      url: "https://www.freecodecamp.org/certification/cerassus/responsive-web-design",
    },
    {
      course: "JavaScript Algorithms and Data Structures",
      url: "https://www.freecodecamp.org/certification/cerassus/javascript-algorithms-and-data-structures",
    },
    {
      course: "Front-End Libraries",
      url: "https://www.freecodecamp.org/certification/cerassus/front-end-libraries",
    },
  ],
  "CODE:ME": [
    {
      course: "JavaScript from scratch and React",
      url: "pdf/codeme.pdf",
    },
  ],
  "Coders Lab": [
    {
      course: "Basics of Web Development",
      url: "pdf/coderslab.pdf",
    },
    {
      course: "JavaScript and React/Redux for programmers",
      url: "pdf/coderslab2.pdf",
    },
  ],
  Udemy: [
    {
      course: "Web Developer Bootcamp",
      url: "https://www.udemy.com/certificate/UC-47741973-118b-4b4e-bbf0-4da7b95e3215/",
    },
    {
      course: "Bootstrap 4 Bootcamp",
      url: "https://www.udemy.com/certificate/UC-VNNBVF2O/",
    },
    {
      course: "Advanced CSS and Sass: Flexbox, Grid, Animations and More!",
      url: "https://www.udemy.com/certificate/UC-fec758fd-3ab6-4a55-a877-f72cd61c946e/",
    },
  ],
}
export const technologies = [
  {
    technology: "javascript",
    icon: "https://cerassus.eu/icons/tech/js.png",
  },
  {
    technology: "typescript",
    icon: "https://cerassus.eu/icons/tech/ts.png",
  },
  {
    technology: "react",
    icon: "https://cerassus.eu/icons/tech/react.png",
  },
  {
    technology: "redux",
    icon: "https://cerassus.eu/icons/tech/redux.png",
  },
  {
    technology: "sweet-state",
    icon: "https://cerassus.eu/icons/tech/sweetstate.png",
  },
  {
    technology: "react router",
    icon: "https://cerassus.eu/icons/tech/router.png",
  },
  {
    technology: "next",
    icon: "https://cerassus.eu/icons/tech/next.png",
  },
  {
    technology: "gatsby",
    icon: "https://cerassus.eu/icons/tech/gatsby.png",
  },
  {
    technology: "styled components",
    icon: "https://cerassus.eu/icons/tech/styled.png",
  },
  {
    technology: "bootstrap",
    icon: "https://cerassus.eu/icons/tech/bootstrap.png",
  },
  {
    technology: "material UI",
    icon: "https://cerassus.eu/icons/tech/mui.png",
  },
  {
    technology: "express",
    icon: "https://cerassus.eu/icons/tech/express.png",
  },
  {
    technology: "mongoDB",
    icon: "https://cerassus.eu/icons/tech/mongo.png",
  },
  {
    technology: "html",
    icon: "https://cerassus.eu/icons/tech/html.png",
  },
  {
    technology: "css",
    icon: "https://cerassus.eu/icons/tech/css.png",
  },
  {
    technology: "sass",
    icon: "https://cerassus.eu/icons/tech/sass.png",
  },
]
export const front_projects = [
  {
    title: "gamergeek",
    desc: "Single page app, a game where player needs to guess Video Game title based on 3 screenshots. Player has 60 seconds to guess as much game titles as possible.",
    techs: [
      "https://cerassus.eu/icons/tech/next.png",
      "https://cerassus.eu/icons/tech/react.png",
      "https://cerassus.eu/icons/tech/redux.png",
      "https://cerassus.eu/icons/tech/styled.png",
    ],
    source: "https://github.com/cerassus/gamergeek-nextjs",
    website: "https://gamergeek.cerassus.eu",
  },
  {
    title: "wrostat",
    desc: "This is a simple website about the city of Wrocław in Poland. You will find a lot about curiosities, must see places, food and history. Some demographic data are also included on the webpage.",
    techs: [
      "https://cerassus.eu/icons/tech/gatsby.png",
      "https://cerassus.eu/icons/tech/react.png",
      "https://cerassus.eu/icons/tech/redux.png",
      "https://cerassus.eu/icons/tech/styled.png",
    ],
    source: "https://github.com/cerassus/wroclaw-gatsby",
    website: "https://wroclaw.cerassus.eu",
  },
  {
    title: "silver-screen",
    desc: "This is an app that allows You to search for movies in database and rate them or put them on shelf. You can switch between the lists and search on top menu. You can always click on every movie to see its detailed information.",
    techs: [
      "https://cerassus.eu/icons/tech/react.png",
      "https://cerassus.eu/icons/tech/redux.png",
      "https://cerassus.eu/icons/tech/router.png",
      "https://cerassus.eu/icons/tech/mui.png",
    ],
    source: "https://github.com/cerassus/silver-screen-react",
    website: "https://silver-screen.cerassus.eu",
  },
]
export const back_projects = [
  {
    title: "REST-API for Gamergeek",
    desc: "Simple REST API written in node.js with Express and Mongoose for my Gamergeek project",
    techs: [
      "express",
      "mongoose",
      "node-cron",
    ],
    source: "https://github.com/cerassus/REST-API-for-gamergeek",
    website: "https://gamergeek.cerassus.eu",
  },
  {
    title: "REST-API for Wrostat",
    desc: "Simple REST API written in node.js with Express and Mongoose for my Wrostat project",
    techs: [
      "express",
      "mongoose",
    ],
    source: "https://github.com/cerassus/REST-API-for-wrostat",
    website: "https://wroclaw.cerassus.eu",
  },
  {
    title: "REST-API for Silver-screen",
    desc: "Simple REST API written in node.js with Express and Mongoose for my Gamergeek project",
    techs: [
      "express",
      "mongoose",
      "jwt",
      "bcrypt",
    ],
    source: "https://github.com/cerassus/REST-API-for-silver-screen",
    website: "https://silver-screen.cerassus.eu",
  },
]
export const hobbies_tabs = [
  {
    bigImg: "https://cerassus.eu/images/hobbies/travel_draw.png",
    img: "https://cerassus.eu/images/hobbies/travel.jpg",
    title: "travel",
    text: "I owe my passion for travel to my uncle, who traveled to India on business purposes when I was little. I love to discover new places and learn from foreign cultures. Seeing so many different worlds has taught me to pay attention to things that I miss and to appreciate things that I had underestimated before."
  },
  {
    bigImg: "https://cerassus.eu/images/hobbies/drawind_draw.png",
    img: "https://cerassus.eu/images/hobbies/draw.jpg",
    title: "art",
    text: "From time to time I reach for my pencil. People are main objects of my artistic inspirations. I like to draw portraits - it teaches me patience and helps me to relax. Drawing and painting has taught me to pay much attention to details, allowing me to look at people in different way."
  },
  {
    bigImg: "https://cerassus.eu/images/hobbies/whisky_draw.png",
    img: "https://cerassus.eu/images/hobbies/whisky.jpeg",
    title: "whisky",
    text: "I am a big fan of Single Malt Scotch and Irish whiskey. I really enjoy tasting new flavors using conventional methods, with ice or mixers. I prefer sweet and smooth flavor profile. So far, I had the greatest pleasure tasting Dalmore 12, Glendronach 12, Oban 14 and Glenmorangie Lasanta."
  },
]
export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
    --black: #000;
    --teal: #194146;
    --white: #FFF;
    --height: calc(100vh - 116px);
  }
  body {
    font-family: Roboto, Raleway, IBM Plex Mono, sans-serif;
    background-color: var(--black);
    width: 100%;
    height: 100vh;
    overflow: hidden;
    font-size: 1.4rem;
    color: var(--white);
    @media (max-width: 750px) {
      overflow: scroll!important;
    }
  }
  h1, h2 {
    font-size: inherit;
    font-weight: inherit;
    line-height: 90%;
    letter-spacing: 0.01em;

  }
  #gatsby-focus-wrapper {
    overflow: hidden;

    height: 100vh;
    background: linear-gradient(133.15deg, #1f1f1f 8.25%, rgba(19, 17, 17, 0.82) 59.63%);
    @media (max-width: 750px) {
      display: flex;
      flex-direction: column;
      height: auto;
    } 
  }
  a, a:link, a:visited, a:active {
    text-decoration: none;
  }
  @-webkit-keyframes load1 {
    0%,
    80%,
    100% {
      box-shadow: 0 0;
      height: 4em;
    }
    40% {
      box-shadow: 0 -2em;
      height: 5em;
    }
  }
  @keyframes load1 {
    0%,
    80%,
    100% {
      box-shadow: 0 0;
      height: 4em;
    }
    40% {
      box-shadow: 0 -2em;
      height: 5em;
    }
  }
  @-webkit-keyframes load2 {
    0%,
    80%,
    100% {
      box-shadow: 0 0 black;
      height: 4em;
    }
    40% {
      box-shadow: 0 -2em black;
      height: 5em;
    }
  }
  @keyframes load2 {
    0%,
    80%,
    100% {
      box-shadow: 0 0 black;
      height: 4em;
    }
    40% {
      box-shadow: 0 -2em black;
      height: 5em;
    }
  }
  @keyframes fadein {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes fadeout {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  @keyframes link_underline {
    0% {
      width: 0;
    }
    100% {
      width: 100%;
    }
  }
  @keyframes white_bg_to_black {
    0% {
      background-color: #FFF;
    }
    100% {
      background-color: transparent;
    }
  }
  @keyframes black_to_white {
    0% {
      background-color: transparent;
    }
    100% {
      background-color: #FFF;
    }
  }
`
