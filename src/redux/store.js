import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import logger from "redux-logger";

const initState = {
  title: "Welcome to My Profile, Santosh Mondal",
  message: "Work in Progress...!",
  landingTitle: "Landing page title",

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
      subItemList: [
        { subtitle: "Java" },
        { subtitle: "NodeJS" },
        { subtitle: "Spring Boot" },
        { subtitle: "MicroServices" },
      ],
    },
    {
      title: "SKILLS FRONEND",
      subItemList: [
        { subtitle: "React" },
        { subtitle: "Redux" },
        { subtitle: "Anglar" },
        { subtitle: "Vue" },
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
