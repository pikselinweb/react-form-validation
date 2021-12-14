import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./utils/i18n";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading... </div>}>
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
