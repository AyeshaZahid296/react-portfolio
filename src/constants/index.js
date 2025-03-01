import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  c,
  java,
  githubp,
  mysql,
  nodejs,
  mongodb,
  git,
  bootstrap,
  figma,
  adobe,
  firebase,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "project",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Graphic Designer",
    icon: mobile,
  },
  // {
  //   title: "Backend Developer",
  //   icon: backend,
  // },
  {
    title: "Artist",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "githubp",
    icon: githubp,
  },
  {
    name: "mysql",
    icon: mysql,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "bootstrap",
    icon: bootstrap,
  },
  {
    name: "firebase",
    icon: firebase,
  },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  // {
  //   name: "git",
  //   icon: git,
  // },
  {
    name: "c",
    icon: c,
  },
  {
    name: "java",
    icon: java,
  },
  {
    name: "adobe",
    icon: adobe,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://ayeshazahid296.github.io/apple-clone/",
  },
];

const projects = [
  {
    name: "Apple Clone",
    description:
      " This is Apple website clone built using HTML, CSS, and JavaScript. It recreates Apple's sleek design and responsive layout for a visually appealing user experience.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javaScript",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/AyeshaZahid296/apple-clone",
  },
  {
    name: "Positivus",
    description:
      " this is a responsive website built using HTML, JavaScript, and Bootstrap, based on a Figma design. It transforms a UI concept into a fully functional web page with a clean and modern layout. ",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/AyeshaZahid296/design-to-code",
  },
  {
    name: "Library Managment System",
    description:
      "library management system built using C++ with Windows Forms in Visual Studio for the frontend and MySQL Workbench for the backend. It helps manage books, users, and lending operations efficiently.",
    tags: [
      {
        name: "C++",
        color: "blue-text-gradient",
      },
      {
        name: "visual studio",
        color: "green-text-gradient",
      },
      {
        name: "windows forms",
        color: "yellow-text-gradient",
      },
      {
        name: "My sql",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/AyeshaZahid296/LibraryProject",
  },
  // {
  //   name: "Positivus",
  //   description:
  //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //   tags: [
  //     {
  //       name: "html",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "bootstrap",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/AyeshaZahid296/design-to-code",
  // },
];

export { services, technologies, experiences, testimonials, projects };
