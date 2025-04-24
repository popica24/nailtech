import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Loader from "./components/Loader/Loader";
import "yet-another-react-lightbox/styles.css";

const Layout = () => {
  return (
    <>
      <Loader />
      <Navbar />
      <Outlet />
    </>
  );
};

export default Layout;
