
import { FaReact, FaNodeJs, FaHtml5,  FaJs, FaDatabase, FaPython, FaCode } from "react-icons/fa";


// Features Data
export const featuresData = [
  {
    id: 1,
    title: "Full Stack Developer",
    des: "I am a Full Stack Developer and proficient in using the MERN stack (MongoDB, Express.js, React.js, Node.js) to create projects.",
  },
  {
    id: 2,
    icon: <FaReact />,
    title: "Frontend Development",
    des: "I specialize in frontend development using React.js. I am experienced with concepts like component-based architecture and state management. I also have knowledge of Material-UI for designing UI components.",
  },
  {
    id: 3,
    icon: <FaNodeJs />,
    title: "Backend Development",
    des: "For backend development, I use Node.js and Express.js. I have worked with various frameworks and libraries to build RESTful APIs and server-side applications.",
  },
  {
    id: 4,
    icon: <FaHtml5 />,
    title: "Static and Responsive Websites",
    des: "I have expertise in creating static and responsive websites using HTML, CSS, and Bootstrap. I ensure that websites are visually appealing and optimized for different screen sizes.",
  },
  {
    id: 5,
    icon: <FaJs />,
    title: "Dynamic Websites",
    des: "I develop dynamic websites using HTML, CSS, and JavaScript. I utilize JavaScript to implement interactive features and functionality on the client-side.",
  },
  {
    id: 6,
    title: "Other Technologies",
    des: "I have experience working with tools like Postman for API testing and debugging. I am also familiar with using Visual Studio Code as my primary code editor. Additionally, I am proficient in Python and have worked with SQL databases and MongoDB.",
    icons: [
      <FaDatabase />,
      <FaPython />,
      <FaCode />,
    ],
  },
];
