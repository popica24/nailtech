import { useEffect, useState } from "react";
import MobileMenu from "./MobileMenu";
import { Link } from "react-router-dom";
import ShoppingCart from "../../../components/ShoppingCart";
import { useCart } from "../../../CartContext";
import Lightbox from "yet-another-react-lightbox";

const Navbar = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY >= 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  const { openCart, isCartOpen } = useCart();
  return (
    <>
      <Lightbox
        open={galleryOpen}
        close={() => setGalleryOpen(false)}
        slides={[
          {
            src: "MyWork/1.jpg",
          },
          {
            src: "MyWork/2.jpg",
          },
          {
            src: "MyWork/3.jpg",
          },
          {
            src: "MyWork/4.jpg",
          },
          {
            src: "MyWork/5.jpg",
          },
        ]}
      ></Lightbox>
      <header
        className={`transition-all duration-[0.3s] ease-in-out py-[30px] fixed top-[0] right-[0] left-[0] z-[20] ${
          isFixed ? "bix-fixed" : "bix-static"
        }`}
      >
        <div className="flex flex-wrap justify-between relative items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
          <div className="flex flex-wrap w-full">
            <div className="w-full px-[12px]">
              <nav className="navbar navbar-expand-lg bix-navbar transition-all duration-[0.3s] ease-in-out p-[15px] bg-white border-[1px] border-solid border-[#111a24] rounded-[30px] relative z-[3] flex items-center justify-between max-[992px]:flex-nowrap">
                <Link className="navbar-brand" to="/">
                  <img
                    src="/logo.jpg"
                    alt="logo"
                    className="bix-logo w-[90px] flex rounded-2xl"
                  />
                </Link>
                <div className="flex flex-row items-center">
                  <li
                    className="nav-item transition-all duration-[0.3s] ease-in-out flex me-6 items-center cursor-pointer text-4xl md:hidden"
                    onClick={openCart}
                  >
                    <i className="fa-solid fa-bag-shopping"></i>
                  </li>
                  <button
                    onClick={toggleMenu}
                    className="navbar-toggler min-[992px]:hidden w-[40px] h-[40px] flex items-center justify-center rounded-[50%] text-[#111a24] border-[1px] border-solid border-[#111a24] text-[1.25rem] bg-transparent"
                    type="button"
                    title="navbar-toggler"
                  >
                    <i className="fa-solid fa-bars"></i>
                  </button>
                </div>
                <div
                  className="bix-main-menu flex relative justify-end max-[991px]:hidden"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav bix-menu m-[0] pl-[0] flex flex-wrap min-[992px]:flex-row">
                    <li className="nav-item transition-all duration-[0.3s] ease-in-out ml-[30px]">
                      <Link
                        className="nav-link transition-all duration-[0.3s] ease-in-out montserrat-300 tracking-[0.03rem] p-[0] text-[15px] font-medium leading-[40px] capitalize text-[#1b1c20] flex items-center relative hover:text-[var(--crem-cald)]"
                        to="/"
                      >
                        Acasa
                      </Link>
                    </li>
                    <li className="nav-item transition-all duration-[0.3s] ease-in-out ml-[30px]">
                      <a
                        className="nav-link transition-all duration-[0.3s] ease-in-out montserrat-300 tracking-[0.03rem] p-[0] text-[15px] font-medium leading-[40px] capitalize text-[#1b1c20] flex items-center relative hover:text-[var(--crem-cald)]"
                        href="/#cursuri-fizice"
                      >
                        Cursuri Fizice
                      </a>
                    </li>
                    <li className="nav-item transition-all duration-[0.3s] ease-in-out ml-[30px]">
                      <Link
                        to="/cursuri-online"
                        className="nav-link decoration-dashed transition-all duration-[0.3s] ease-in-out montserrat-300 tracking-[0.03rem] p-[0] text-[15px] font-medium leading-[40px] capitalize text-[#1b1c20] flex items-center relative hover:text-[var(--crem-cald)]"
                      >
                        Cursuri Online
                      </Link>
                    </li>
                    <li className="nav-item transition-all duration-[0.3s] ease-in-out ml-[30px]">
                      <Link
                        className="nav-link transition-all duration-[0.3s] ease-in-out montserrat-300 tracking-[0.03rem] p-[0] text-[15px] font-medium leading-[40px] capitalize text-[#1b1c20] flex items-center relative hover:text-[var(--crem-cald)]"
                        to="/shop"
                      >
                        Shop
                      </Link>
                    </li>
                    <li className="nav-item transition-all duration-[0.3s] ease-in-out ml-[30px]">
                      <a
                        className="nav-link transition-all duration-[0.3s] ease-in-out montserrat-300 tracking-[0.03rem] p-[0] text-[15px] font-medium leading-[40px] capitalize text-[#1b1c20] flex items-center relative hover:text-[var(--crem-cald)]"
                        href="/#recenzii"
                      >
                        Recenzii
                      </a>
                    </li>
                    <li className="nav-item transition-all duration-[0.3s] ease-in-out ml-[30px]">
                      <span
                        onClick={() => setGalleryOpen(true)}
                        className="nav-link cursor-pointer transition-all duration-[0.3s] ease-in-out montserrat-300 tracking-[0.03rem] p-[0] text-[15px] font-medium leading-[40px] capitalize text-[#1b1c20] flex items-center relative hover:text-[var(--crem-cald)]"
                      >
                        Lucrarile Mele
                      </span>
                    </li>
                    <li className="nav-item transition-all duration-[0.3s] ease-in-out ml-[30px]">
                      <a
                        href="/#despre-mine"
                        className="nav-link transition-all duration-[0.3s] ease-in-out montserrat-300 tracking-[0.03rem] p-[0] text-[15px] font-medium leading-[40px] capitalize text-[#1b1c20] flex items-center relative hover:text-[var(--crem-cald)]"
                      >
                        Despre Mine
                      </a>
                    </li>
                    <li
                      className="nav-item transition-all duration-[0.3s] ease-in-out mx-[30px] flex items-center cursor-pointer"
                      onClick={openCart}
                    >
                      <i className="fa-solid fa-bag-shopping"></i>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
      {isMenuOpen && <></>}
      <MobileMenu
        closeMenu={closeMenu}
        visible={isMenuOpen}
        openGallery={() => setGalleryOpen(true)}
      />
      {isCartOpen && <ShoppingCart />}
    </>
  );
};

export default Navbar;
