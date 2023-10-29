import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../pages/HomeLayout";
import Application from "../pages/Application";
import { Packages } from "../components/Packages";
import Contact from "../components/Contact";
import SingleLocation from "../pages/SingleLocation";

export const routes = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
    },
    {
      path: "/app",
      element: <Application />,
      to: "locations",
      children: [
        {
          path: "",
          index: true,
          element: <Packages />
        },
        {
          path: "locations",
          element: <Packages />,
        },
        {
          path: "locations/:id",
          element: <SingleLocation />
        },
        {
          path: "mylocations",
          element: <Contact />
        },
      ]
    }
  ]); 
