import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { AnswersHeadlessProvider } from "@yext/answers-headless-react";
import { searchConfig } from "./config/searchConfig";

ReactDOM.render(
  <React.StrictMode>
    <AnswersHeadlessProvider {...searchConfig}>
      <App />
    </AnswersHeadlessProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
