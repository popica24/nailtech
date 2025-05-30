// Import a React carousel library like react-slick
//@ts-ignore
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Alexandra",
      role: "Cursant 2023-2024",
      image: "Testimonials/Reviewers/1.jpg",
      testimonial:
        "În doar 5 zile de curs am plecat cu un bagaj mare de informații. Au fost multe informații de asimilat, însă atunci când îți dorești cu adevărat, reuşeşti tot ce îți propui. Mulțumim pentru răbdarea acordata. Sper sa ne revedem la cursul de perfecționare!",
    },
    {
      id: 2,
      name: "Ana",
      role: "Cursant 2023-2024",
      image: "Testimonials/Reviewers/2.jpg",
      testimonial:
        "Cursul m-a surprins plăcut prin calitatea şi profesionalismul oferit. Atmosfera a fost una prietenoasă si relaxanta, unde mi-a plăcut in mod special faptul că puteam pune intrebari oricând aveam o nelămurire. Am apreciat în mod special modul în care ne-au fost prezentate noile tehnici folosite in industrie si faptul că ne-au fost puse la dispoziție toate materialele de care am avut nevoie. Practica a fost intensă și bine ghidată, ceea ce mi-a oferit încrederea necesară pentru a începe să lucrez pe cont propriu. Este un curs pe care îl recomand cu căldură oricui doreşte să-şi construiască o carieră în acest domeniu sau să-și perfecționeze abilitățile.",
    },
    {
      id: 3,
      name: "Roxana",
      role: "Cursant 2023-2024",
      image: "Testimonials/Reviewers/3.jpg",
      testimonial:
        "În primul rând țin să ți mulțumesc! Eşti foarte răbdătoare, calmă, explici foarte bine toți pași, nu eşti grăbită, de aia am și ales să revin din nou la cursul tău. Nu aveam nici o idee despre tehnica pe care am învăţat-o ieri. Informațiile de ieri m-au ajuta în a- mi vedea mai bine greșelile, să fiu mai atentă la cuticula, la cantitatea de material care trebuie plinuță, la subţierea pereţilor lateralii. Eu consider și cred ca pe mine cursul care l-am facut ieri cu tine ma va ajuta foarte mult. Mulțumesc!",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section
      className="section-testimonials relative py-12 max-lg:py-10 max-md:py-8"
      id="recenzii"
    >
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap w-full">
          <div className="w-full px-3">
            <div
              className="bix-banner mb-8 flex justify-center text-center max-xl:mb-6 max-md:mb-5"
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-delay="400"
            >
              <h4 className="montserrat-300 text-4xl font-bold text-[#111a24] tracking-wider leading-tight max-xl:text-3xl max-md:text-2xl max-sm:text-xl">
                Ecouri{" "}
                <span className="text-[var(--crem-cald)]">Briliante</span>
              </h4>
            </div>
            <div
              className="bix-banner-line mb-28"
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-delay="600"
            >
              <span className="inner-border relative flex justify-center"></span>
            </div>
          </div>
          <div className="w-full px-3">
            <div
              className="bix-testimonials relative"
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-delay="800"
            >
              {/* Decorative images */}
              <img
                src="Testimonials/Decoration/1.jpg"
                alt="testimonials-1"
                className="testimonials-img-1 z-[-1] h-20 w-20 absolute top-0 left-12 rotate-[-12deg] blur-[3px] opacity-80 max-2xl:h-16 max-2xl:w-16 max-2xl:left-3 max-xl:hidden"
              />
              <img
                src="Testimonials/Decoration/3.webp"
                alt="testimonials-2"
                className="testimonials-img-2 z-[-1] h-16 w-16 absolute bottom-0 left-0 rounded-md rotate-[10deg] max-2xl:h-12 max-2xl:w-12 max-xl:hidden"
              />
              <img
                src="Testimonials/Decoration/2.jpg"
                alt="testimonials-3"
                className="testimonials-img-3 z-[-1] h-12 w-12 absolute top-0 right-[500px] rounded-md rotate-[-10deg] blur-[3px] opacity-80 max-2xl:right-auto max-2xl:top-[-100px] max-lg:right-auto max-lg:left-0 max-lg:top-[-80px] max-md:hidden"
              />
              <img
                src="Testimonials/Decoration/4.webp"
                alt="testimonials-4"
                className="testimonials-img-4 z-[-1] h-16 w-16 absolute top-[-100px] right-[250px] rounded-md rotate-[10deg] max-2xl:top-[-120px] max-2xl:right-[200px] max-lg:right-auto max-lg:left-[100px] max-md:right-auto max-md:left-0"
              />
              <img
                src="Testimonials/Decoration/5.webp"
                alt="testimonials-5"
                className="testimonials-img-5 z-[-1] h-16 w-16 absolute top-[50px] right-0 rounded-md rotate-[5deg] max-2xl:h-10 max-2xl:w-10 max-2xl:top-[-70px] max-lg:top-[-150px]"
              />
              <img
                src="Testimonials/Decoration/6.webp"
                alt="testimonials-6"
                className="testimonials-img-6 z-[-1] h-16 w-16 absolute bottom-0 right-[80px] rounded-md rotate-[-15deg] blur-[3px] opacity-80 max-2xl:h-12 max-2xl:w-12 max-2xl:right-[200px] max-2xl:bottom-[120px] max-lg:bottom-auto max-lg:top-[-20px] max-lg:right-[50px]"
              />

              {/* Rotated "Testimonials" text */}
              <div className="inner-banner rotate-[270deg] absolute top-0 left-[150px] bottom-0 z-[-4] max-2xl:left-[90px] max-xl:left-[10px] max-lg:hidden">
                <h4 className="montserrat-300 text-4xl font-bold text-white opacity-15 tracking-wider leading-tight max-2xl:text-3xl max-xl:text-2xl">
                  Testimonials
                </h4>
              </div>

              {/* React Slick Carousel replacing OwlCarousel */}
              <div className="testimonials-slider z-[-1]">
                <Slider {...settings}>
                  {testimonials.map((item) => (
                    <div key={item.id}>
                      <div className="bix-testimonials-inner max-w-[900px] m-auto max-2xl:max-w-[800px]">
                        <div className="flex flex-wrap w-full">
                          <div className="md:w-1/3 w-full px-3">
                            <div className="testimonials-image relative max-md:w-full max-md:mb-5 max-md:flex max-md:justify-center">
                              <img
                                src={item.image}
                                alt="testimonial"
                                className="w-full rounded-lg max-md:max-w-[80px] aspect-square"
                              />
                            </div>
                          </div>
                          <div className="md:w-2/3 w-full px-3">
                            <div className="testimonials-contact h-full flex flex-col justify-end">
                              <h4 className="mb-2 montserrat-300 text-xl text-[#111a24] font-semibold leading-tight tracking-wider max-md:mb-1 max-md:text-lg max-md:text-center">
                                {item.name}
                              </h4>
                              <span className="montserrat-300 font-normal text-base leading-relaxed tracking-wide text-gray-500 max-md:text-sm max-md:text-center">
                                ({item.role})
                              </span>
                              <div className="inner-contact mt-3 border border-solid border-[#111a24] p-5 bg-white rounded-lg">
                                <p className="m-0 montserrat-300 text-sm text-[#495461] font-normal leading-relaxed tracking-wider">
                                  "{item.testimonial}"
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
