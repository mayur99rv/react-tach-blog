import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

/* bootstrap config */
// import "./custom.scss";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";
import "react-bootstrap/dist/react-bootstrap.js";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
