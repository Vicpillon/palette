<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter} from "react-router-dom";
import "./index.css";
import App from "./App";

import reportWebVitals from "./reportWebVitals";
=======
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';
import Login from './routes/Login';
import SignUp from './routes/SignUp';
import Home from './App';

console.log("Welcome");
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
    
  },

  {
    path : "/login",
    element : <Login />
  },
>>>>>>> 8d753a200ce77338ec10b8bd0d729315cafc4a73

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>

    <App />
  </BrowserRouter>
);

reportWebVitals();