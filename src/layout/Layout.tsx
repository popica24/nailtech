import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import "yet-another-react-lightbox/styles.css";
import { useEffect } from "react";

const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Layout;
