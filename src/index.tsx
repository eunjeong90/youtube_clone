import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./app";
import API from "service/youtube";

const youtube = new API(process.env.REACT_APP_YOUTUBE_API_KEY);
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App youtube={youtube} />
  </React.StrictMode>
);
