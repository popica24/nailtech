const Products = () => {
  return (
    <>
      <section
        className="section-projects py-[50px] max-[991px]:py-[40px] max-[767px]:py-[35px]"
        id="projects"
      >
        <div className="flex flex-wrap justify-between relative items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
          <div className="flex flex-wrap w-full">
            <div className="w-full px-[12px]">
              <div
                className="bix-banner mb-[30px] flex justify-center text-center max-[1199px]:mb-[25px] max-[767px]:mb-[20px]"
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-delay="400"
              >
                <h4 className="montserrat-300 text-[36px] font-bold text-[#111a24] tracking-[0.03rem] leading-[1.2] max-[1199px]:text-[32px] max-[767px]:text-[28px] max-[575px]:text-[24px]">
                  Produsele
                  <span className="text-[var(--crem-cald)] ms-2">Mele</span>
                </h4>
              </div>
              <div
                className="bix-banner-line mb-[110px]"
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-delay="600"
              >
                <span className="inner-border relative flex justify-center"></span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-[-24px]">
              <Product
                image="Products/Pro6/cover.jpg"
                link="produse/pro6"
                name="Pusher Pro 6"
              />
              <Product
                image="Products/Pro5/cover.jpg"
                link="produse/pro5"
                name="Pusher Pro 5"
              />
              <Product
                image="Products/Pro19/cover.jpg"
                link="produse/pro19"
                name="Foarfecuta Pro 19"
              />
              <Product
                image="Products/Pro19/cover.jpg"
                link="produse/pro20"
                name="Foarfecuta Pro 20"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;

type ProductProps = {
  image?: string;
  name: string;
  link: string;
};

const Product = ({ image, name, link }: ProductProps) => {
  return (
    <div
      id="cursuri-fizice"
      className={`w-full px-[12px] mb-[24px] item`}
      style={{ display: "inline-block" }}
      data-bound=""
    >
      <div className="bix-project-card">
        <div className="project-image relative px-[30px] pb-[30px] overflow-hidden rounded-[30px] z-[1] max-[480px]:px-[20px] max-[480px]:pb-[20px]">
          <a href={link} className="flex rounded-[30px] overflow-hidden">
            <div className="overlay-project-card transition-all duration-[0.3s] ease-in-out opacity-[0] w-[calc(100%-60px)] h-[calc(100%-30px)] absolute top-[0] right-[30px] rounded-[30px] flex items-center justify-center bg-[#00000080] z-[45] overflow-hidden max-[480px]:p-[0] max-[480px]:w-[calc(100%-40px)] max-[480px]:h-[calc(100%-20px)] max-[480px]:top-[0] max-[480px]:bottom-[0] max-[480px]:right-[20px] max-[480px]:left-[20px]"></div>
            <img
              src={image}
              alt={name}
              className="transition-all duration-[0.3s] ease-in-out w-full aspect-square"
            />
          </a>
        </div>
        <div className="project-contact pt-[170px] pb-[30px] px-[30px] mt-[-175px] relative z-[0] border-[1px] border-solid border-[#1b1c20] rounded-[30px] max-[480px]:pb-[20px] max-[480px]:px-[20px]">
          <div className="flex md:justify-end md:items-end w-full text-center">
            <a
              href={link}
              type="button"
              className="w-full inline-flex items-center cursor-pointer transition-all duration-[0.3s] ease-in-out py-[8px] px-[10px] montserrat-400 text-base font-semibold text-white rounded-[5px] bg-[#A57865]"
            >
              <span className="w-full flex-1">{name}</span>
              <svg
                width={20}
                height={20}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M10 7L15 12L10 17"
                    stroke="#FFFFFF"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </g>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
