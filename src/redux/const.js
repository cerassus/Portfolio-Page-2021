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
  // freeCodeCamp: [
  //   {
  //     course: "Responsive Web Design",
  //     url: "https://www.freecodecamp.org/certification/cerassus/responsive-web-design",
  //   },
  //   {
  //     course: "JavaScript Algorithms and Data Structures",
  //     url: "https://www.freecodecamp.org/certification/cerassus/javascript-algorithms-and-data-structures",
  //   },
  //   {
  //     course: "Front-End Libraries",
  //     url: "https://www.freecodecamp.org/certification/cerassus/front-end-libraries",
  //   },
  // ],
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
    desc: "// This project is in progress // ",
    techs: [
      "express",
      "mongoose",
    ],
    source: "https://github.com/cerassus/REST-API-for-wrostat",
    website: "https://wroclaw.cerassus.eu",
  },
  {
    title: "REST-API for Silver-Screen",
    desc: "Simple REST API written in node.js with Express and Mongoose for my Silver-Screen project",
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

