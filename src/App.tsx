import AboutMe from "./components/AboutMe";
import Achivements from "./components/Achivements";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero";
import Loader from "./components/Loader/Loader";
import Navbar from "./components/Navbar";
import Courses from "./components/Courses";
import Products from "./components/Products";
import Testimonials from "./components/Testimonials";
import Hire from "./components/Hire";

function App() {
  return (
    <>
      <Loader />
      <Navbar />
      <Hero />
      <AboutMe />
      <Achivements />
      <Courses />
      <Products />
      <Testimonials />
      <Hire />
      <Footer />
    </>
  );
}

export default App;
