import { createStore } from "redux";

const initState = {
  title: "Welcome to My Profile, Santosh Mondal",
  message: "Work in Progress...!",
  landingTitle: "Landing page title",
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const store = createStore(rootReducer);
export { store };
