import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import logger from "redux-logger";

const initState = {
  theme: "dark",
  drawerOpen: false,
  welcome: "Hello Visitor, Welcome to My Profile ",
  title: "Welcome to My Profile, Santosh Mondal",
  message: "Work in Progress...!",
  landingTitle: "Landing page title",
  username: "Santosh Kumar Mondal",
  designation: "Founder / Product Architect",
  headerRow3: "Blockchain Enthusiast",

  githubUrl: "https://github.com/santoshmondal",
  linkedinUrl: "https://www.linkedin.com/in/santooindian/",
  mailTo: "mailto:santosh.ece06@gmail.com",

  contactInfo: {
    title: "CONTACT INFO",
    subItemList: [
      {
        icon: "phone_iphone",
        subtitle: "+91-9323791976",
        material: true,
      },
      {
        icon: "email",
        subtitle: "santosh.ece06@gmail.com",
        material: true,
      },
      { icon: "fab fa-github", subtitle: "https://github.com/santoshmondal" },
      {
        icon: "fab fa-linkedin",
        subtitle: "https://www.linkedin.com/in/santooindian/",
      },
    ],
  },
  sideItemList: [
    {
      title: "SKILLS BACKEND",
      left: true,
      subItemList: [
        { subtitle: "Java", rating: 5, icon: "fab fa-java" },
        { subtitle: "NodeJS", rating: 5, icon: "fab fa-node" },
        { subtitle: "Spring Boot", rating: 5, icon: "fas fa-leaf" },
        { subtitle: "MicroServices", rating: 4, icon: "fas fa-network-wired" },
        { subtitle: "Python", rating: 3, icon: "fab fa-python" },
      ],
    },
    {
      title: "Database",
      left: true,
      subItemList: [
        { subtitle: "Postgres", rating: 4, icon: "fas fa-database" },
        { subtitle: "MongoDB", rating: 4, icon: "fab fa-envira" },
        { subtitle: "Elastic", rating: 4, icon: "fas fa-database" },
        { subtitle: "Firestore", rating: 4, icon: "fas fa-folder-open" },
      ],
    },
    {
      title: "Cloud",
      left: true,
      subItemList: [
        { subtitle: "AWS", rating: 4, icon: "fab fa-aws" },
        { subtitle: "Firebase", rating: 4, icon: "fas fa-folder-open" },
        { subtitle: "Google Cloud", rating: 4, icon: "fab fa-google" },
        { subtitle: "Mircosoft Azure", rating: 3, icon: "fab fa-microsoft" },
      ],
    },

    {
      title: "SKILLS FRONTEND",
      subItemList: [
        { subtitle: "React", rating: 5, icon: "fab fa-react" },
        { subtitle: "Redux", rating: 5, icon: "fab fa-react" },
        { subtitle: "Anglar", rating: 4, icon: "fab fa-angular" },
        { subtitle: "Vue", rating: 3, icon: "fab fa-vuejs" },
      ],
    },
    {
      title: "Mobile App",
      subItemList: [
        { subtitle: "Flutter", rating: 4, icon: "fab fa-foursquare" },
        { subtitle: "React Native", rating: 4, icon: "fab fa-react" },
        { subtitle: "Kotlin", rating: 4, icon: "fab fa-korvue" },
      ],
    },
    {
      title: "UI/UX",
      subItemList: [
        { subtitle: "Material", rating: 5, icon: "fab fa-mdb", iconText: "M" },
        { subtitle: "Bootstrap", rating: 5, icon: "fab fa-bootstrap" },
        { subtitle: "Tailwind", rating: 4, icon: "fab fa-tumblr" },
      ],
    },
    {
      title: "Devops",
      subItemList: [
        { subtitle: "Docker", rating: 5, icon: "fab fa-docker" },
        { subtitle: "Jenkins", rating: 4, icon: "fab fa-jenkins" },
        { subtitle: "Github Action", rating: 4, icon: "fab fa-github" },
      ],
    },
  ],
  profile: {
    title: "PROFESSIONAL SUMMARY",
    summary:
      "Passionate Software Architect and Founder of two company, 15+ years of experience in building robust and highly scalable applications across the E-commerce, Sports, Education and Law domain. With strong expertise in customer collaboration, requirement analysis, high level design and development using frontend and backend technologies.",
    employment: {
      title: "Employment History",
      list: [
        {
          id: 1,
          etitle: "Koeroom.Tech",
          esubtitle1: "Founder",
          esubtitle2: "Jan 2021 - Present",
        },
        {
          id: 2,
          etitle: "Affixus Systems",
          esubtitle1: "Founder",
          esubtitle2: "Dec 2015 - Feb 2018",
        },
        {
          id: 3,
          etitle: "Rediff.Com",
          esubtitle1: "Senior Software Engineer",
          esubtitle2: "Mar 2011 - Dec 2015",
        },
        {
          id: 4,
          etitle: "CDAC",
          esubtitle1: "Project Engineer",
          esubtitle2: "July 2006 - Mar 2011",
        },
      ],
    },
    expertise: {
      title: "Expertise",
      list: [
        { id: 0, title: "Full Stack End to End Development" },
        { id: 1, title: "Cross Platform Mobile Application Development" },
        { id: 2, title: "Web Application Development" },
        { id: 3, title: "Progressive Web Application Development" },
        { id: 4, title: "Android Native Development" },
      ],
    },
    industries: {
      title: "Domain",
      list: [
        { id: 1, title: "Law Doamin" },
        { id: 2, title: "ERP - In Distribution" },
        { id: 3, title: "Sports -  Cricket & Basketball" },
        { id: 4, title: "Education - Learning Platform" },
        { id: 5, title: "E-Commerce - In Shopping" },
      ],
    },
  },
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      const toggleTheme = state.theme === "dark" ? "light" : "dark";
      return { ...state, theme: toggleTheme };
    case "TOGGLE_DRAWER":
      const drawerOpen = state.drawerOpen === false ? true : false;
      return { ...state, drawerOpen };
    default:
      return state;
  }
};

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
);
export { store };
