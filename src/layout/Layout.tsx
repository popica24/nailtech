import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loader from "./components/Loader/Loader";

const Layout = () => {
  return (
    <>
      <Loader />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
