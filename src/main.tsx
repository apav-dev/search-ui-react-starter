import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { AnswersHeadlessProvider } from "@yext/answers-headless-react";
import { answersConfig } from "./config/answersConfig";

ReactDOM.render(
  <React.StrictMode>
    <AnswersHeadlessProvider {...answersConfig}>
      <App />
    </AnswersHeadlessProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
