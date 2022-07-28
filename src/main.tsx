import { SearchHeadlessProvider } from "@yext/search-headless-react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <SearchHeadlessProvider
      apiKey="Your Search API Key"
      experienceKey="Your Experience Key"
      verticalKey="Your Vertical Key"
      locale="en"
    >
      <App />
    </SearchHeadlessProvider>
  </React.StrictMode>
);
