import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import './Css/animations.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Local from './Pages/Local';
import Top from './Pages/Top';
import About from './Pages/About';
import Error from './Components/Error';

const routes = createBrowserRouter([
  {path:'/', element:<Local/>,
    children:[
      {path:'', element:<Top/>,},
      {path:'about', element:<About/>,},
      {path:'contact us', element:<About/>,},
      {path:'*', element:<Error/>,},
    ]
  },
])

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>,
)
