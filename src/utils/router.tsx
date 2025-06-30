import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Homepage from "../pages/homepage";
import Photos from "../pages/photos";
import Pro5 from "../pages/products/pro5";
import Pro6 from "../pages/products/pro6";
import Pro19 from "../pages/products/pro19";
import Pro20 from "../pages/products/pro20";
import BaseCourse from "../pages/courses/basecourse";
import MaintenanceCourse from "../pages/courses/maintenancecourse/MaintenanceCourse";
import OnlineCourses from "../pages/courses/onlinecourses";
import IndividualCourse from "../pages/courses/individualcourse";
import SlimCourse from "../pages/courses/slimcourse";
import KitComboPro from "../pages/products/kitcombopro";

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
        path: "produse/pro5",
        element: <Pro5 />,
      },
      {
        path: "produse/pro6",
        element: <Pro6 />,
      },
      {
        path: "produse/pro19",
        element: <Pro19 />,
      },
      {
        path: "produse/pro20",
        element: <Pro20 />,
      },
      {
        path: "produse/kit-combo-pro",
        element: <KitComboPro />,
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
        path: "cursuri/curs-individual",
        element: <IndividualCourse />,
      },
      {
        path: "cursuri/curs-de-baza",
        element: <BaseCourse />,
      },
      {
        path: "cursuri/curs-slim",
        element: <SlimCourse />,
      },
      {
        path: "cursuri/intretinere-si-estetica",
        element: <MaintenanceCourse />,
      },
    ],
  },
]);

export default router;
