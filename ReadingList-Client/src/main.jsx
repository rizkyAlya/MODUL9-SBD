import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './login.jsx'
import './index.css'

import { 
  createBrowserRouter, 
  RouterProvider 
} from "react-router-dom";

import Login from './login.jsx';
import SignUp from './signUp.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  
  //path untuk menampilkan movies jika Movie Collections pada Navbar di klik
  {
    path: "/login",
    element: < Login />
  },
  //path untuk menampilkan detail movie jika salah satu movie di klik
  {
    path: "/signUp",
    element: <SignUp />,
  },
  /*{
    path: "home",
    element: <Home />
  },*/
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
