import { SearchHeadlessProvider } from "@yext/search-headless-react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { searchConfig } from "./config/searchConfig";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <SearchHeadlessProvider {...searchConfig}>
      <App />
    </SearchHeadlessProvider>
  </React.StrictMode>
);
