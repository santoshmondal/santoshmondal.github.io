import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";

import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import { firebaseConfig } from "./config/fire.config";

import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import "@fontsource/roboto";
import CssBaseline from "@material-ui/core/CssBaseline";

import "./index.css";
import App from "./App";
import { store } from "./redux/store";

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <CssBaseline />
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
