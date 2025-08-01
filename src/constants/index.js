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
  node,
  mongodb,
  expressjs,
  bootstrap,
  adobe,
  firebase,
  apple,
  librarysystem,
  positivus,
  taskmanager,
  studentfeedback,
  devconnect,
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
    title: "Full-Stack Web Developer",
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

const projects = [
  {
    name: "Task Manager",
    description:
      "A full-stack Task Manager app built with the MERN stack for creating, updating, and deleting daily tasks. Includes secure authentication, role-based access, and a fully responsive UI for smooth usage on all devices.",
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
      {
        name: "TailwindCss",
        color: "green-text-gradient",
      },
    ],
    image: taskmanager,
    source_code_link: "https://github.com/AyeshaZahid296/task-manager-MERN",
  },
  {
    name: "Student Feedback Management System",
    description:
      "A full-stack feedback management app using the MERN stack. Students can submit feedback while admins view, filter, paginate, and delete entries. Features secure login, role-based routing, and responsive UI design.",
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
        name: "TailwindCss",
        color: "green-text-gradient",
      },
    ],
    image: studentfeedback,
    source_code_link: "https://github.com/AyeshaZahid296/studentFeedbackSystem",
  },
  {
    name: "DevConnect Landing Page",
    description:
      "A responsive landing page for DevConnect built with React.js and Tailwind CSS. Features reusable components, smooth animations, clean architecture, and a visually modern design that adapts across all devices.",
    tags: [
      {
        name: "React.js",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
      {
        name: "TailwindCss",
        color: "green-text-gradient",
      },
    ],
    image: devconnect,
    source_code_link: "https://github.com/AyeshaZahid296/devconnect-react-landingPage",
  },
  {
    name: "Apple Clone",
    description:
      "An Apple website clone built using HTML, CSS, and JavaScript. Recreates the sleek Apple design with a responsive layout, smooth interactions, and a visually appealing interface for a premium user experience.",
    tags: [
      {
        name: "Html",
        color: "green-text-gradient",
      },
      {
        name: "Css",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: apple,
    source_code_link: "https://github.com/AyeshaZahid296/apple-clone",
  },
  {
    name: "Library Managment System",
    description:
      "A desktop-based library system built with C++ Windows Forms and MySQL. Helps manage books, members, and lending activities efficiently, with a user-friendly interface and reliable database integration.",
    tags: [
      {
        name: "C++",
        color: "green-text-gradient",
      },
      {
        name: "Windows forms",
        color: "blue-text-gradient",
      },
      {
        name: "My sql",
        color: "pink-text-gradient",
      },

    ],
    image: librarysystem,
    source_code_link: "https://github.com/AyeshaZahid296/LibraryProject",
  },
  {
    name: "Positivus (Design to code)",
    description:
      "A responsive website built with HTML, JavaScript, and Bootstrap from a Figma design. Transforms the UI concept into a functional web page with a clean layout and adaptive design for all screen sizes.",
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
    image: positivus,
    source_code_link: "https://github.com/AyeshaZahid296/design-to-code",
  },
];

export { services, technologies, projects };
