import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../pages/HomeLayout";
import Application from "../pages/Application";

export const routes = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />
    },
    {
      path: "/app",
      element: <Application />
    }
  ]); 
