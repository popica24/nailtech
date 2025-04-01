import AboutMe from "./components/AboutMe";
import Achivements from "./components/Achivements";
import Courses from "./components/Courses";
import Hero from "./components/Hero";
import Hire from "./components/Hire";
import Products from "./components/Products";
import Testimonials from "./components/Testimonials";

const Homepage = () => {
  return (
    <>
      <Hero />
      <AboutMe />
      <Achivements />
      <Courses />
      <Products />
      <Testimonials />
      <Hire />
    </>
  );
};

export default Homepage;
