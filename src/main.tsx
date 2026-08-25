import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "./styles/hero.css";
import "./styles/site.css";

// Always start at the top of the page — never restore a prior scroll position.
if ("scrollRestoration" in history) history.scrollRestoration = "manual";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
