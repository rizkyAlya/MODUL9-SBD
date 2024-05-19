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
import Navbar from './Navbar.jsx';
import Book from './Book.jsx';
import AddBook from './addBook.jsx';
import UpUser from './updateUser.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/signUp",
    element: <SignUp />,
  },
  {
    path: "/navbar",
    element: <Navbar />,
  },
  {
    path: "/book",
    element: <Book />
  },
  {
    path: "/addBook",
    element: <AddBook />
  },
  {
    path: "/upUser",
    element: <UpUser />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
