import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Style
import "./assets/scss/index.scss";

// Router
import { BrowserRouter } from "react-router-dom";

// Translation
import "./utils/i18n";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
