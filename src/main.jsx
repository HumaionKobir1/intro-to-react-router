import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './component/About/About';
import Contact from './component/Contact/Contact';
import Home from './component/Home/Home';
import First from './component/First/First';
import Friends from './component/Friends/Friends';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/',
        element: <First></First>
      },
      {
        path: '/friends',
        element: <Friends></Friends>,
        loader: () => fetch('https://jsonplaceholder.typicode.com/users')
      },
      {
        path: 'friend/:friendId'
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      }
    ]
  }
  // {
  //   path: '/',
  //   element: <App></App>
  // },
  // {
  //   path: '/about',
  //   element: <About></About>
  // },
  // {
  //   path: '/contact',
  //   element: <Contact></Contact>
  // },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
