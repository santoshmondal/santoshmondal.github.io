import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import logger from "redux-logger";

const initState = {
  title: "Welcome to My Profile, Santosh Mondal",
  message: "Work in Progress...!",
  landingTitle: "Landing page title",
  username: "Santosh Kumar Mondal",
  designation: "Founder / Product Architect",

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
      title: "DATABASE",
      left: true,
      subItemList: [
        { subtitle: "Postgres", rating: 4, icon: "fas fa-database" },
        { subtitle: "MongoDB", rating: 4, icon: "fab fa-envira" },
        { subtitle: "Elastic", rating: 4, icon: "fas fa-database" },
        { subtitle: "Firestore", rating: 4, icon: "fas fa-folder-open" },
      ],
    },
    {
      title: "CLOUD",
      left: true,
      subItemList: [
        { subtitle: "AWS", rating: 4, icon: "fab fa-aws" },
        { subtitle: "Firebase", rating: 4, icon: "fas fa-folder-open" },
        { subtitle: "Google Cloud", rating: 4, icon: "fab fa-google" },
        { subtitle: "Mircosoft Azure", rating: 3, icon: "fas fa-cloud" },
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
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
);
export { store };
