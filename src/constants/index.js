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
  // mysql,
  node,
  mongodb,
  expressjs,
  bootstrap,
  // figma,
  adobe,
  firebase,
  // docker,
  // meta,
  // starbucks,
  // tesla,
  // shopify,
  carrent,
  jobit,
  tripguide,
  taskmanager,
  // threejs,
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
  {
    title: "UI/UX",
    icon: backend,
  },
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
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "mongodb",
    icon: mongodb,
  },
  {
    name: "node",
    icon: node,
  },
  {
    name: "expressjs",
    icon: expressjs,
  },
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
  {
    name: "githubp",
    icon: githubp,
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

// const experiences = [
//   {
//     title: "React.js Developer",
//     company_name: "Starbucks",
//     icon: starbucks,
//     iconBg: "#383E56",
//     date: "March 2020 - April 2021",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
//   {
//     title: "React Native Developer",
//     company_name: "Tesla",
//     icon: tesla,
//     iconBg: "#E6DEDD",
//     date: "Jan 2021 - Feb 2022",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
//   {
//     title: "Web Developer",
//     company_name: "Shopify",
//     icon: shopify,
//     iconBg: "#383E56",
//     date: "Jan 2022 - Jan 2023",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
//   {
//     title: "Full stack Developer",
//     company_name: "Meta",
//     icon: meta,
//     iconBg: "#E6DEDD",
//     date: "Jan 2023 - Present",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
// ];

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
    name: "Task Manager",
    description:
      "This is a full-stack Task Manager application built using the MERN stack (MongoDB, Express.js, React.js, excel.js and Node.js). It allows users to create, update, delete, and manage their daily tasks efficiently. The app features secure user authentication, role-based access, and a responsive UI for a seamless user experience across devices.",
    tags: [
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Express.js",
        color: "blue-text-gradient",
      },
      {
        name: "React.js",
        color: "pink-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "Excel.js",
        color: "blue-text-gradient",
      },
      {
        name: "Jwt",
        color: "pink-text-gradient",
      },
    ],
    image: taskmanager, // yahan tum apne project ka image variable use karo
    source_code_link: "https://github.com/AyeshaZahid296/task-manager", // apna actual repo link lagao
  },
  {
    name: "Student Feedback Management System",
    description:
      "This is a full-stack Student Feedback Management System built using the MERN stack (MongoDB, Express.js, React.js, and Node.js). It allows students to submit feedback through an intuitive form, and provides an admin dashboard to view, filter, paginate, and delete feedback entries. The app includes secure admin authentication, role-based routing, and a responsive UI for smooth usability across devices.",
    tags: [
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Express.js",
        color: "blue-text-gradient",
      },
      {
        name: "React.js",
        color: "pink-text-gradient",
      },
      {
        name: "Node.js",
        color: "yellow-text-gradient",
      },
    ],
    image: studentfeedback, // yahan tum apne project ka image variable use karo
    source_code_link: "https://github.com/AyeshaZahid296/student-feedback-system", // apna actual repo link lagao
  },
  {
    name: "Apple Clone",
    description:
      " This is Apple website clone built using HTML, CSS, and JavaScript. It recreates Apple's sleek design and responsive layout for a visually appealing user experience.",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "Css",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/AyeshaZahid296/apple-clone",
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
        name: "Windows forms",
        color: "green-text-gradient",
      },
      {
        name: "My sql",
        color: "pink-text-gradient",
      },

    ],
    image: jobit,
    source_code_link: "https://github.com/AyeshaZahid296/LibraryProject",
  },
  {
    name: "Positivus (Design to code)",
    description:
      " This is a responsive website built using HTML, JavaScript, and Bootstrap, based on a Figma design. It transforms a UI concept into a fully functional web page with a clean and modern layout. ",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/AyeshaZahid296/design-to-code",
  },
];

export { services, technologies, testimonials, projects };
