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

  {
    path : "/signup",
    element : <SignUp />

  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

     <RouterProvider router={router}/>
  
 
  </React.StrictMode>
);

