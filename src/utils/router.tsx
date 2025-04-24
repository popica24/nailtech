import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Homepage from "../pages/homepage";
import Product from "../pages/product";
import Photos from "../pages/photos";
import OnlineCourses from "../pages/onlinecourses";
import Course from "../pages/course";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "produs-1",
        element: <Product />,
      },
      {
        path: "galerie-foto",
        element: <Photos />,
      },
      {
        path: "cursuri-online",
        element: <OnlineCourses />,
      },
      {
        path: "shop",
        element: <OnlineCourses />,
      },
      {
        path: "curs-1",
        element: <Course />,
      },
    ],
  },
]);

export default router;
