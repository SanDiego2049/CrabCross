import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "./components/shared/ScrollToTop.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <ScrollToTop />
      <App />
    </Router>
  </StrictMode>
);
