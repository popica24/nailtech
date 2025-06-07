import { Link } from "react-router-dom";

const Courses = () => {
  return (
    <section
      id="cursuri-fizice"
      className="section-projects py-[50px] max-[991px]:py-[40px] max-[767px]:py-[35px]"
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
                Cursuri <span className="text-[var(--crem-cald)]">Fizice</span>
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
              className="item-grid"
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-delay="600"
              id="MixItUp51F797"
            >
              <div className="flex flex-wrap w-full mb-[-24px]">
                <Product
                  url={"/cursuri/curs-individual"}
                  categoriesClasses={"slim"}
                  image={"Courses/base-cover.jpg"}
                  name={"Cursul Individual VIP"}
                  description={
                    "Cursul Individual VIP este destinat tehnicienelor care își doresc exclusivitate totală, flexibilitate și atenție 100% personalizată în procesul de perfecționare. Lucrezi direct cu trainerul, într-un mediu intim, fără alți participanți."
                  }
                />
                <Product
                  url={"/cursuri/curs-de-baza"}
                  categoriesClasses={"base"}
                  image={"Courses/baza1.jpg"}
                  name={"Cursul de bază - Nivel Incepator"}
                  description={
                    "Nu este doar o simplă oportunitate de învățare – este un pas spre realizarea visurilor tale! Cu o structură bine gândită și informații valoroase, vei dobândi abilități esențiale care îți vor transforma complet perspectiva și cariera."
                  }
                />
                <Product
                  url={"/cursuri/curs-slim"}
                  categoriesClasses={"base"}
                  image={"Courses/slim.jpg"}
                  name={"Cursul Slim"}
                  description={
                    "Nu este doar un nou trend – este o tehnică esențială, care pune accent pe eleganță, structură corectă și execuție impecabilă. Cursul SLIM te învață cum să construiești unghii subțiri, durabile și perfect echilibrate"
                  }
                />
                <Product
                  url={"/cursuri/intretinere-si-estetica"}
                  categoriesClasses={"slim"}
                  image={"Courses/maintenance.jpg"}
                  name={"Intreținere cu precizie și estetică"}
                  description={
                    "Acest curs avansat se adresează tehnicienelor cu experiență care doresc să-și perfecționeze tehnica, să învețe metode eficiente de corecție și întreținere și să ofere servicii premium, aplicabile imediat în salon."
                  }
                />
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
  image: string;
  name: string;
  description: string;
};

const Product = ({
  url,
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
          <Link to={url} className="flex rounded-[30px] overflow-hidden">
            <div className="overlay-project-card transition-all duration-[0.3s] ease-in-out opacity-[0] w-[calc(100%-60px)] h-[calc(100%-30px)] absolute top-[0] right-[30px] rounded-[30px] flex items-center justify-center bg-[#00000080] z-[45] overflow-hidden max-[480px]:p-[0] max-[480px]:w-[calc(100%-40px)] max-[480px]:h-[calc(100%-20px)] max-[480px]:top-[0] max-[480px]:bottom-[0] max-[480px]:right-[20px] max-[480px]:left-[20px]"></div>
            <img
              src={image}
              alt={name}
              className="transition-all duration-[0.3s] ease-in-out w-full aspect-square"
            />
          </Link>
        </div>
        <div className="project-contact pt-[170px] pb-[30px] px-[30px] mt-[-175px] relative z-[0] border-[1px] border-solid border-[#1b1c20] rounded-[30px] max-[480px]:pb-[20px] max-[480px]:px-[20px]">
          <h5 className="mb-[2px] text-[18px] text-[#111a24] tracking-[0.03rem] leading-[1.2] font-medium">
            <Link
              to={url}
              className="transition-all duration-[0.3s] ease-in-out montserrat-300 leading-[26px] tracking-[0.03rem] text-[18px] max-[1399px]:text-[17px] font-semibold text-[#111a24] hover:text-[#f41a4a]"
            >
              {name}
            </Link>
          </h5>

          <p className="mt-[4px] montserrat-300 text-[14px] font-normal tracking-[0.03rem] leading-[22px] text-[#495461]">
            {description}
          </p>
          <div className="flex md:justify-end md:items-end w-full text-center">
            <Link
              to={url}
              type="button"
              className="w-full cursor-pointer transition-all duration-[0.3s] ease-in-out py-[8px] px-[10px] montserrat-400 text-base font-semibold text-white rounded-[5px] bg-[#A57865]"
            >
              Inscrie-te si tu !
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
