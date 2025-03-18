const Courses = () => {
  return (
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
                Cursuri{" "}
                <span className="text-[var(--crem-cald)]">Disponibile</span>
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
          <div className="w-full projects-content">
            <div
              className="controls bix-projects-tabs px-[12px] flex flex-col items-center"
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-delay="400"
            >
              <ul
                id="filters"
                className="clearfix mb-[30px] p-[5px] flex justify-center flex-wrap bg-[#f7f5fb] items-center border-[1px] border-solid border-[#1b1c20] rounded-[25px]"
              >
                <li
                  className="filter m-[5px] py-[5px] px-[15px] transition-all duration-[0.25s] ease-out border-[0] rounded-[15px] montserrat-300 text-[14px] leading-[26px] tracking-[0.03rem] text-[#111a24] cursor-pointer active"
                  data-filter="all"
                >
                  Toate
                </li>
                <li
                  className="filter m-[5px] py-[5px] px-[15px] transition-all duration-[0.25s] ease-out border-[0] rounded-[15px] montserrat-300 text-[14px] leading-[26px] tracking-[0.03rem] text-[#111a24] cursor-pointer"
                  data-filter=".base"
                >
                  Curs de baza
                </li>
                <li
                  className="filter m-[5px] py-[5px] px-[15px] transition-all duration-[0.25s] ease-out border-[0] rounded-[15px] montserrat-300 text-[14px] leading-[26px] tracking-[0.03rem] text-[#111a24] cursor-pointer"
                  data-filter=".slim"
                >
                  Curs Slim
                </li>
              </ul>
            </div>
            <div
              className="item-grid"
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-delay="600"
              id="MixItUp51F797"
            >
              <div className="flex flex-wrap w-full mb-[-24px]">
                {/* Courses Here */}
                <Product
                  url={"curs-1"}
                  categoriesClasses={"base"}
                  categories={"Curs baza"}
                  image={"Courses/baza1.jpg"}
                  name={"Curs baza 1"}
                  description={
                    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus architecto perferendis."
                  }
                />
                <Product
                  url={"curs-2"}
                  categoriesClasses={"base"}
                  categories={"Curs baza"}
                  image={"Courses/baza1.jpg"}
                  name={"Curs baza 2"}
                  description={
                    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus architecto perferendis."
                  }
                />
                <Product
                  url={"curs-3"}
                  categoriesClasses={"slim"}
                  categories={"Curs slim"}
                  image={"Courses/product1.jpg"}
                  name={"Curs slim 1"}
                  description={
                    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus architecto perferendis."
                  }
                />
                {/* Courses Here */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;

type ProductProps = {
  url: string;
  categoriesClasses: string;
  categories: string;
  image: string;
  name: string;
  description: string;
};

const Product = ({
  url,
  categories,
  categoriesClasses,
  image,
  name,
  description,
}: ProductProps) => {
  return (
    <div
      id="cursuri-fizice"
      className={`min-[1200px]:w-[33.33%] min-[768px]:w-[50%] w-full px-[12px] mb-[24px] item ${categoriesClasses}`}
      style={{ display: "inline-block" }}
      data-bound=""
    >
      <div className="bix-project-card">
        <div className="project-image relative px-[30px] pb-[30px] overflow-hidden rounded-[30px] z-[1] max-[480px]:px-[20px] max-[480px]:pb-[20px]">
          <a href={url} className="flex rounded-[30px] overflow-hidden">
            <div className="overlay-project-card transition-all duration-[0.3s] ease-in-out opacity-[0] w-[calc(100%-60px)] h-[calc(100%-30px)] absolute top-[0] right-[30px] rounded-[30px] flex items-center justify-center bg-[#00000080] z-[45] overflow-hidden max-[480px]:p-[0] max-[480px]:w-[calc(100%-40px)] max-[480px]:h-[calc(100%-40px)] max-[480px]:top-[0] max-[480px]:bottom-[0] max-[480px]:right-[20px] max-[480px]:left-[20px]"></div>
            <img
              src={image}
              alt={name}
              className="transition-all duration-[0.3s] ease-in-out w-full aspect-square"
            />
          </a>
        </div>
        <div className="project-contact pt-[170px] pb-[30px] px-[30px] mt-[-175px] relative z-[0] border-[1px] border-solid border-[#1b1c20] rounded-[30px] max-[480px]:pb-[20px] max-[480px]:px-[20px]">
          <h5 className="mb-[2px] text-[18px] text-[#111a24] tracking-[0.03rem] leading-[1.2] font-medium">
            <a
              href={url}
              className="transition-all duration-[0.3s] ease-in-out montserrat-300 leading-[26px] tracking-[0.03rem] text-[18px] max-[1399px]:text-[17px] font-semibold text-[#111a24] hover:text-[#f41a4a]"
            >
              {name}
            </a>
          </h5>
          <span className="montserrat-300 font-normal leading-[26px] tracking-[0.02rem] text-[14px] max-[1399px]:text-[14px] text-[#999]">
            {categories}
          </span>
          <p className="mt-[4px] montserrat-300 text-[14px] font-normal tracking-[0.03rem] leading-[22px] text-[#495461]">
            {description}
          </p>
          <a
            href={url}
            className="text-[#111a24] inline-flex font-medium montserrat-300 text-[14px] leading-[26px] tracking-[0.03rem]"
          >
            Vezi curs
          </a>
        </div>
      </div>
    </div>
  );
};
