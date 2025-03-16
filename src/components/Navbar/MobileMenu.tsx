type Props = {
  visible: boolean;
  closeMenu: () => void;
};

const MobileMenu = (props: Props) => {
  return (
    <>
      <div
        onClick={props.closeMenu}
        className={`bix-sidebar-overlay ${
          props.visible ? "" : "hidden"
        } w-full h-screen fixed top-[0] left-[0] bg-[#000000cc] z-[42]`}
      ></div>
      <div
        id="in_mobile_menu"
        className={`bix-side-cart bix-mobile-menu transition-all duration-[0.3s] ease-in-out w-[300px] h-full pt-[15px] px-[20px] pb-[20px] fixed top-[0] right-auto left-[0] bg-[#fff] ${
          props.visible ? "translate-x-0" : "translate-x-[-100%]"
        } flex flex-col z-[43] overflow-auto`}
      >
        <div className="bix-menu-title w-full pb-[20px] flex flex-wrap justify-between">
          <div className="menu-title flex items-center">
            <h4 className="relative border-[0] montserrat-300 text-[17px] font-semibold leading-[1] text-[#1b1c20] bg-transparent tracking-[0.03rem]">
              Meniu
            </h4>
          </div>
          <button
            onClick={props.closeMenu}
            type="button"
            className="bix-close relative border-[0] text-[30px] leading-[1] text-[#ff0000] bg-transparent "
          >
            ×
          </button>
        </div>
        <div className="bix-menu-inner">
          <div className="bix-menu-content">
            <ul className="bix-menu">
              <li className="nav-item relative">
                <a
                  href="https://maraviyainfotech.com/projects/biox-tailwind/onepage/index.html#home"
                  className="nav-link mb-[12px] py-[8px] px-[16px] block capitalize text-[#777] border-[1px] border-solid border-[#eae8ef] rounded-[10px] montserrat-300 leading-[26px] text-[14px] font-medium tracking-[0.03rem]"
                >
                  Acasa
                </a>
              </li>
              <li className="nav-item relative">
                <a
                  href="https://maraviyainfotech.com/projects/biox-tailwind/onepage/index.html#home"
                  className="nav-link mb-[12px] py-[8px] px-[16px] block capitalize text-[#777] border-[1px] border-solid border-[#eae8ef] rounded-[10px] montserrat-300 leading-[26px] text-[14px] font-medium tracking-[0.03rem]"
                >
                  Cursuri Fizice
                </a>
              </li>
              <li className="nav-item relative">
                <a
                  href="https://maraviyainfotech.com/projects/biox-tailwind/onepage/index.html#about"
                  className="nav-link mb-[12px] py-[8px] px-[16px] block capitalize text-[#777] border-[1px] border-solid border-[#eae8ef] rounded-[10px] montserrat-300 leading-[26px] text-[14px] font-medium tracking-[0.03rem]"
                >
                  Cursuri Online
                </a>
              </li>
              <li className="nav-item relative">
                <a
                  href="https://maraviyainfotech.com/projects/biox-tailwind/onepage/index.html#bixexperience"
                  className="nav-link mb-[12px] py-[8px] px-[16px] block capitalize text-[#777] border-[1px] border-solid border-[#eae8ef] rounded-[10px] montserrat-300 leading-[26px] text-[14px] font-medium tracking-[0.03rem]"
                >
                  Shop
                </a>
              </li>
              <li className="nav-item relative">
                <a
                  href="https://maraviyainfotech.com/projects/biox-tailwind/onepage/index.html#services"
                  className="nav-link mb-[12px] py-[8px] px-[16px] block capitalize text-[#777] border-[1px] border-solid border-[#eae8ef] rounded-[10px] montserrat-300 leading-[26px] text-[14px] font-medium tracking-[0.03rem]"
                >
                  Recenzii
                </a>
              </li>
              <li className="nav-item relative">
                <a
                  href="https://maraviyainfotech.com/projects/biox-tailwind/onepage/index.html#projects"
                  className="nav-link mb-[12px] py-[8px] px-[16px] block capitalize text-[#777] border-[1px] border-solid border-[#eae8ef] rounded-[10px] montserrat-300 leading-[26px] text-[14px] font-medium tracking-[0.03rem]"
                >
                  Galerie Foto
                </a>
              </li>
              <li className="nav-item relative">
                <a
                  href="https://maraviyainfotech.com/projects/biox-tailwind/onepage/index.html#testimonial"
                  className="nav-link mb-[12px] py-[8px] px-[16px] block capitalize text-[#777] border-[1px] border-solid border-[#eae8ef] rounded-[10px] montserrat-300 leading-[26px] text-[14px] font-medium tracking-[0.03rem]"
                >
                  Despre Mine
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
