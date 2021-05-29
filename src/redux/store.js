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
        { subtitle: "Java", rating: 5 },
        { subtitle: "NodeJS", rating: 5 },
        { subtitle: "Spring Boot", rating: 5 },
        { subtitle: "MicroServices", rating: 4 },
        { subtitle: "Python", rating: 3 },
      ],
    },
    {
      title: "DATABASE",
      left: true,
      subItemList: [
        { subtitle: "Postgres", rating: 4 },
        { subtitle: "MongoDB", rating: 4 },
        { subtitle: "Elastic", rating: 4 },
        { subtitle: "Firestore", rating: 4 },
      ],
    },
    {
      title: "CLOUD",
      left: true,
      subItemList: [
        { subtitle: "AWS", rating: 4 },
        { subtitle: "Firebase", rating: 4 },
        { subtitle: "Google Cloud", rating: 4 },
        { subtitle: "Mircosoft Azure", rating: 3 },
      ],
    },

    {
      title: "SKILLS FRONTEND",
      subItemList: [
        { subtitle: "React", rating: 5 },
        { subtitle: "Redux", rating: 5 },
        { subtitle: "Anglar", rating: 4 },
        { subtitle: "Vue", rating: 3 },
      ],
    },
    {
      title: "Mobile App",
      subItemList: [
        { subtitle: "Flutter", rating: 4 },
        { subtitle: "React Native", rating: 4 },
        { subtitle: "Kotlin", rating: 4 },
      ],
    },
    {
      title: "UI/UX",
      subItemList: [
        { subtitle: "Material", rating: 5 },
        { subtitle: "Bootstrap", rating: 5 },
        { subtitle: "Tailwind", rating: 4 },
      ],
    },
    {
      title: "Devops",
      subItemList: [
        { subtitle: "Docker", rating: 5 },
        { subtitle: "Jenkins", rating: 4 },
        { subtitle: "Github Action", rating: 4 },
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
