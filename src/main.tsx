import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.css'

import { StudyRoom } from './pages/admin/studyRoom';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Home } from './pages/admin/home';

// import Root from "./routes/root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/studyRoom",
    element: <StudyRoom />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
