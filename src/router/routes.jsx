import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../pages/HomeLayout";
import Application from "../pages/Application";
import { Packages } from "../components/Packages";
import SingleLocation from "../pages/SingleLocation";
import MyPackages from "../pages/MyPackages";
import { homepageLoader } from "./loaders/homepage";
import { getPackagesLoader, singleLocationLoader } from "./loaders/application";


export const routes = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      loader: homepageLoader
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
          loader: getPackagesLoader,
        },
        {
          path: "locations/:id",
          element: <SingleLocation />,
          loader: (req) => singleLocationLoader({req}),
          //TODO: MAKE ERROR COMPS
        },
        {
          path: "mylocations",
          element: <MyPackages />
        },
      ]
    }
  ]); 
