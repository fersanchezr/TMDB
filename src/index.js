import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./store/AuthContext";

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
    <AuthContextProvider>
      <App />
      </AuthContextProvider>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);
