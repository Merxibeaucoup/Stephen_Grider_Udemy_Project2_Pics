import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
import App from "./App";
import { searchImages } from "./Services/ImageService";

searchImages();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
