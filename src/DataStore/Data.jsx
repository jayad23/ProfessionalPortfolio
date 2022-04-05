import Self from "../imgs/self.jpg";
import Kike from "../imgs/Kike.JPG";
import Graduation from "../imgs/Graduation.jpg";
import GraduationPop from "../imgs/GraduationPop.png";
import BookOne from "../imgs/Book1.png";
import BookTwo from "../imgs/Books2.png";
import BookThree from "../imgs/Book3.png";
import Text1T1 from "../imgs/TextH1B.png";
import Text1T2 from "../imgs/TextH2W.png";
import Text2T1 from "../imgs/TextV1B.png";
import Text2T2 from "../imgs/TextV2W.png";
import CV from "../CV/RESUME.pdf";

//Images of Projects
import image1 from "../imgs/1.png";
import image2 from "../imgs/Pokemon.PNG";
import image3 from "../imgs/3.png";
import image4 from "../imgs/4.png";
import image5 from "../imgs/5.png";
import image6 from "../imgs/6.png";
import image7 from "../imgs/7.png";
import image8 from "../imgs/crud.jpg";
const text = "Hello, Kike. I am interested in your work...";
export const Data = {
  personal: {
    name: "Jaider",
    middleName: "Enrique",
    middleInitial: "E.",
    lastName: "Vanegas",
    secondLastName: "Palomino",
    age: "34",
    DOB: "June / 22nd / 1987",
    BIO: "I am Jaider Vanegas. You can call me Kike. At age of 34, and after 10 years as an English teacher at the top language centers in my city (Medellin, Col.) I have decided to leave my comfort zone to expand and look for new horizons. That's what defines me best.. that I am fearful like everyone else, but it won't keep me from testing my limits, and reaching out for what I want.",
    BIO2: "I am a multidisiciplinary person. I play the guitar, the harmonica and other musical instruments that I have learned on my own. I paint and draw using different techniques. I learned English and managed to get to a C2 level with a honorary mention given by the University of Michigan and Cambridge English Dep. I am learning French, and I am able to understand Portuguese... all of these with no official training, but just pure will, determination and a couple of videos on YouTube. I play different kinds of sports: I play soccer, American Football, and do free-style rollerblading... all of them at a competitive level. I love reading and learning new things. I often find myself challenged by what I am learning at the time, only to find myself again having it successfully learned.",
    social: {
      gitHub: "https://github.com/jayad23",
      facebook: "https://www.facebook.com/kkvz23/",
      twitter: "https://twitter.com/KkVngz23",
      instagram: "https://www.instagram.com/kkvngz23/",
      LinkedIn: "https://www.linkedin.com/in/jaidervanegas23/",
      YouTuBe: "https://www.youtube.com/channel/UCCzn5vab6xL1-Vwdzk8Meeg",
      WhatsApp: `https://api.whatsapp.com/send?phone=573196149019&text=${text}`,
      phone: +573016368707,
      email: "jaidervanegas@live.com",
    },
  },
  images: {
    avatar: Self,
    BGAbout: Kike,
    Graduation: Graduation,
    GraduationPop: GraduationPop,
    BookOne: BookOne,
    BookTwo: BookTwo,
    BookThree: BookThree,
    Text1T1: Text1T1,
    Text1T2: Text1T2,
    Text2T1: Text2T1,
    Text2T2: Text2T2,
    CV: CV,
  },
  academic: [
    {
      id: 1,
      degree: "Bachelor Degree in Education in Theology.",
      institute: "Adventist University",
      online: false,
      status: true,
      yearOfCompletion: 2011,
      yearsInTotal: 5,
      icon: "fas fa-university",
    },
    {
      id: 2,
      degree: "Diploma in Didactics of English.",
      institute: "Luis Amigo University",
      online: false,
      status: true,
      yearOfCompletion: 2018,
      yearsInTotal: 1,
      icon: "fas fa-file-alt",
    },
    {
      id: 3,
      degree: "Machine Learning",
      institute: "Stanford University",
      online: true,
      status: false,
      yearOfCompletion: 2022,
      yearsInTotal: 1,
      icon: "fas fa-laptop-code",
    },
    {
      id: 4,
      degree: "Full-Stack Software Development & Computer Science.",
      institute: "Academlo",
      online: true,
      status: false,
      yearOfCompletion: 2022,
      yearsInTotal: 1,
      icon: "fas fa-certificate",
    },
    {
      id: 5,
      degree: "Front-End Development.",
      institute: "Udemy",
      online: true,
      status: true,
      yearOfCompletion: 2021,
      yearsInTotal: 1,
      icon: "fas fa-certificate",
    },
  ],
  certifications: {
    logos: {
      react:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
      js: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png",
      styles:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
      html: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png",
      ts: "https://iconape.com/wp-content/png_logo_vector/typescript.png",
      tools:
        "https://i.pinimg.com/originals/ef/2b/c5/ef2bc5fb80c9435d9b04989fa2c0ecf1.gif",
      node: "https://midu.dev/images/tags/node.png",
      py: "",
      db: "",
      default:
        "https://c.tenor.com/ZrFooc6A9ysAAAAM/goodgoodgeneral-mental-health.gif",
    },
    react: [
      {
        id: 1,
        title: "Professional State Management",
        date: "March 2022",
        institute: "Platzi Academy",
      },
      {
        id: 2,
        title: "Building Modern Projects",
        date: "January 2022",
        institute: "LinkedIn Learning",
      },
      {
        id: 3,
        title: "Hooks",
        date: "January 2022",
        institute: "LinkedIn Learning",
      },
      {
        id: 4,
        title: "Design Patters",
        date: "January 2022",
        institute: "LinkedIn Learning",
      },
      {
        id: 5,
        title: "Testing and Debugging",
        date: "January 2022",
        institute: "LinkedIn Learning",
      },
      {
        id: 6,
        title: "React & Redux with TypeScript",
        date: "January 2022",
        institute: "LinkedIn Learning",
      },
    ],
    javascript: [
      {
        id: 1,
        title: "Object Oriented Programming",
        date: "December 2021",
        institute: "LinkedIn Learning",
      },
      {
        id: 2,
        title: "Coding Challenge",
        date: "December 2021",
        institute: "LinkedIn Learning",
      },
    ],
    styles: [
      {
        id: 1,
        title: "Animation with CSS",
        date: "January 2021",
        institute: "LinkedIn Learning",
      },
      {
        id: 2,
        title: "Tailwind CSS Essencial Training",
        date: "January 2021",
        institute: "LinkedIn Learning",
      },
      {
        id: 3,
        title: "Bootstrap",
        date: "October 2021",
        institute: "YouTube Tutorials",
      },
      {
        id: 4,
        title: "SASS",
        date: "August 2021",
        institute: "YouTube Tutorials",
      },
    ],
    html: [
      {
        id: 1,
        title: "Creating Responsive HTML Email",
        date: "February 2022",
        institute: "LinkedIn Learning",
      },
      {
        id: 2,
        title: "Essencial Training",
        date: "November 2020",
        institute: "YouTube Tutorials",
      },
      {
        id: 3,
        title: "Basic HTML",
        date: "September 2017",
        institute: "YouTube Tutorials",
      },
    ],
    typescript: [
      {
        id: 1,
        title: "OOP with Typescript",
        date: "January 2022",
        institute: "LinkedIn Learning",
      },
      {
        id: 2,
        title: "React, Redux & Typescript",
        date: "December 2021",
        institute: "LinkedIn Learning",
      },
      {
        id: 3,
        title: "The Complete Professional Guide",
        date: "November 2021",
        institute: "UDEMY",
      },
    ],
    tools: [
      {
        id: 1,
        title: "Git & GitHub",
        date: "February 2018",
        institute: "Platzi Academy",
      },
      {
        id: 2,
        title: "Web Development",
        date: "November 2017",
        institute: "Platzi Academy",
      },
      {
        id: 3,
        title: "Responsive Design",
        date: "October 2017",
        institute: "Platzi Academy",
      },
    ],
    node: [],
    py_thon: [
      {
        id: 1,
        title: "Python",
        date: "In progress...",
        institute: "This technology will be acquired very soon",
      },
    ],
    dataBase: [
      {
        id: 1,
        title: "MySQL",
        date: "In progress...",
        institute: "This technology will be acquired very soon",
      },
    ],
  },
  skills: {
    HTML5: 90,
    CSS: 90,
    JavaScript: 75,
    React: 90,
    Angular: 10,
    NodeJS: 40,
    Python: 1,
    MySQL: 1,
    typescript: 60,
    responsive: 85,
    others: {
      bootstrap: 15,
      SASS: 50,
    },
  },
  languages: [
    {
      id: 1,
      lang: "English",
      spoken: 100,
      written: 100,
      read: 100,
      Listen: 100,
      icon: "fas fa-globe",
    },
    {
      id: 2,
      lang: "Spanish",
      spoken: 100,
      written: 100,
      read: 100,
      Listen: 100,
      icon: "fas fa-globe",
    },
    {
      id: 1,
      lang: "Fench",
      spoken: 20,
      written: 20,
      read: 20,
      Listen: 20,
      icon: "fas fa-globe",
    },
  ],
  workHistory: [
    {
      id: 1,
      name: "Fist Portfolio",
      stage: "True-Beginner",
      description:
        "This postfolio was intended to practice HTML Tags, and CSS. I was just getting familiar with the fundamentals of those three elements.",
      technologies: "HTML, CSS",
      url1: "https://pensive-benz-c1206c.netlify.app/index.html",
      url2: "https://github.com/jayad23/Portafolio.git",
      image: image1,
    },
    {
      id: 2,
      name: "Poke Decks",
      stage: "Advanced React",
      description: "Project made using REDUX, & Protected Routes",
      technologies: "HTML, CSS, JS, API, REACT, REDUX",
      url1: "https://pokedex-nine-tawny.vercel.app/",
      url2: "https://github.com/jayad23/pokedex",
      image: image2,
    },
    {
      id: 3,
      name: "Pokemon Game",
      stage: "True-Beginner",
      description:
        "This is a single level pokemon game that I created to get familiar with basic concepts of JavaScript. It was a real challenge at the time for it is able to refresh the game without refreshing the browser.",
      technologies: "HTML, CSS, JAVASCRIPT",
      url1: "https://tender-tesla-759884.netlify.app/",
      url2: "https://github.com/jayad23/Pokemon-Game.git",
      image: image3,
    },
    {
      id: 4,
      name: "To-DO List",
      stage: "Beginner",
      description:
        "This project got me in context with REACT JS. It was the first time that I created a project using this library. The project demanded getting familiar with maneuvers to filter and map responses from API",
      technologies: "REACT JS, CSS, JS",
      url1: "https://jayad23.github.io/todoList/",
      url2: "https://github.com/jayad23/todoList.git",
      image: image4,
    },
    {
      id: 5,
      name: "Git Hub User Search App",
      stage: "Semi-Fluent",
      description:
        "This project took me to the next level by allowing me to work with REACT ROUTER implementing concepts such as MainLayOuts, Hooks, API multiple requests, and re-using components.",
      technologies: "REACT ROUTER V6, CONTEXT, HOOKS, REACT JS, JS, CSS",
      url1: "https://git-hub-api-project.vercel.app/",
      url2: "https://github.com/jayad23/GitHubApiProject.git",
      image: image5,
    },
    {
      id: 6,
      name: "Weather App",
      stage: "Fluent",
      description:
        "This project was made with REACT ROUTER, implementing methods of JavaScript to interpret the response of the API requested. It also made me aware of a quick UI builder styling library",
      technologies: "REACT ROUTER V5, CONTEXT, REACT JS, TAILWIND, JS",
      url1: "https://app-weather-chi.vercel.app/",
      url2: "https://github.com/jayad23/AppWeather.git",
      image: image6,
    },
    {
      id: 7,
      name: "E-Commerce",
      stage: "Fluent",
      description:
        "This project is the apple of my eye. It defintely took me to a higher level of comprehension on technological tools, resources and methods to create a better user experience. Everything in this project was created from scratch",
      technologies:
        "REACT JS, REACT ROUTER V6, HOOKS, CONTEXT, REDUCER, CSS, FIREBASE, GITHUB, JS, DATABASE CONSTRUCTION",
      url1: "https://project-ecommercce-46cdhwtei-jayad23.vercel.app/",
      url2: "https://github.com/jayad23/projectEcommerce.git",
      image: image7,
    },
    {
      id: 8,
      name: "C.R.U.D",
      stage: "Fluent",
      description:
        "This project requiered having a deep comprehension of the behaviour of React Components.",
      technologies: "REACT JS, ROUTER, HOOKS, THUNKS, REDUX, CSS, HEROKU, JS",
      url1: "https://restapi-13v82muqg-jayad23.vercel.app/",
      url2: "https://github.com/jayad23/handlingRESTAPI",
      image: image8,
    },
  ],
  blogPosts: [
    {
      id: 1,
      title: "The Inadvertent Wall of Programming",
      linkTo:
        "https://www.linkedin.com/pulse/inadvertent-wall-programming-jaider-e-vanegas-p-/?trackingId=",
    },
    {
      id: 2,
      title: "¿Qué es, y cómo usar Redux con React Js?",
      linkTo:
        "https://www.linkedin.com/pulse/how-set-up-redux-react-js-jaider-e-vanegas-p-",
    },
    {
      id: 3,
      title: "React, 'tras bambalinas'",
      linkTo:
        "https://www.linkedin.com/pulse/react-tras-bambalinas-jaider-e-vanegas-p-/",
    },
  ],
};
