import AboutMe from "./components/AboutMe";
import Achivements from "./components/Achivements";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero";
import Loader from "./components/Loader/Loader";
import Navbar from "./components/Navbar";
import Products from "./components/Products";

function App() {
  return (
    <>
      <Loader />
      <Navbar />
      <Hero />
      <AboutMe />
      <Achivements />
      <Products />
      <Footer />
    </>
  );
}

export default App;
