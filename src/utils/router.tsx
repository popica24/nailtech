import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Homepage from "../pages/homepage";
import Photos from "../pages/photos";
import OnlineCourses from "../pages/onlinecourses";
import Pro5 from "../pages/pro5";
import Pro6 from "../pages/pro6";
import Pro19 from "../pages/pro19";
import Pro20 from "../pages/pro20";
import IndividualCourse from "../pages/individualcourse";
import BaseCourse from "../pages/basecourse";
import SlimCourse from "../pages/slimcourse";
import MaintenanceCourse from "../pages/maintenancecourse/MaintenanceCourse";

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
