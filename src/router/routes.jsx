import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../pages/HomeLayout";
import Application from "../pages/Application";
import { Packages } from "../components/Packages";
import Contact from "../components/Contact";

export const routes = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
    },
    {
      path: "/app",
      element: <Application />,
      children: [
        {
          index: true,
          element: <Packages />
        },
        {
          path: "/app/locations",
          element: <Packages />
        },
        {
          path: "/app/mylocations",
          element: <Contact />
        }
      ]
    }
  ]); 
