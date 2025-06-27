const AboutMe = () => {
  return (
    <>
      <section
        id="despre-mine"
        className="section-about relative py-[50px] max-[991px]:py-[40px] max-[767px]:py-[35px] px-[12px] md:px-0"
      >
        <div className="container flex flex-wrap justify-between relative items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
          <div className="flex flex-wrap w-full mb-[-30px]">
            <div className="w-full px-[12px]">
              <div
                className="bix-banner mb-[30px] flex justify-center text-center max-[1199px]:mb-[25px] max-[767px]:mb-[20px] "
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="400"
              >
                <h4 className="montserrat-400 text-[36px] font-bold text-[#111a24] tracking-[0.03rem] leading-[1.2] max-[1199px]:text-[32px] max-[767px]:text-[28px] max-[575px]:text-[24px]">
                  Despre <span className="text-[var(--crem-cald)]">Mine</span>
                </h4>
              </div>
              <div
                className="bix-banner-line mb-[110px] "
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="600"
              >
                <span className="inner-border relative flex justify-center"></span>
              </div>
            </div>
            <div
              className="max-[1199px]:order-2 min-[1200px]:w-[33.33%] min-[992px]:w-[50%] w-full px-[12px] mb-[30px] "
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="400"
            >
              <div className="bix-about-contact h-full flex flex-col justify-center">
                <h5 className="mb-[24px] montserrat-400 text-[37px] font-bold text-[#fff] tracking-[0.08rem] opacity-[0.5] leading-[1.2] max-[1399px]:text-[32px] max-[1199px]:text-[28px] max-[575px]:text-[28px] max-md:text-[22px]">
                  “Cu pasiune, educ, inspir și creez viitor. ”
                </h5>
                <p className="mb-[16px] montserrat-400 text-[14px] text-[#495461] font-normal leading-[26px] tracking-[0.03rem]">
                  Sunt Florina Scîntei și <b>de 6 ani</b> îmi urmez visul de a
                  inspira și educa femei pasionate de frumusețe. Am format{" "}
                  <b>peste 300 de cursante</b>, investind constant în
                  dezvoltarea mea profesională. Creez relații autentice, ofer
                  sprijin continuu și promovez excelența prin propriul brand de
                  ustensile.
                </p>
                <div className="about-name">
                  <h6 className="mb-[0] montserrat-700 text-[16px] text-[#111a24] font-bold tracking-[0.03rem] leading-[1.2]">
                    Nail Artist
                  </h6>
                  <p className="text-[14px] text-[#555] mb-[16px] montserrat-400 font-normal leading-[26px] tracking-[0.03rem]">
                    Scintei Florina
                  </p>
                  <div className="inner-sign-items">
                    <img
                      src="shapes/sign.jpg"
                      alt="sign"
                      className="white-mode w-[120px] inline"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="max-[1199px]:order-1 min-[1200px]:w-[33.33%] min-[992px]:w-[100%] w-full px-[12px] mb-[30px] "
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="600"
            >
              <div className="bix-about-img border-[1px] border-solid border-[#111a24] p-[15px] rounded-[200px] relative max-[1199px]:max-w-fit max-[1199px]:m-auto">
                <img
                  src="about-portrait.jpg"
                  alt="about"
                  className="w-full rounded-[200px]"
                />
                <div className="bix-rounded-circle z-[1] h-[130px] w-[130px] absolute bottom-[0] right-[0] bg-[var(--nude-cald)] rounded-[50%] max-[575px]:h-[120px] max-[575px]:w-[120px] max-[575px]:bottom-[20px] max-[575px]:right-[20px] max-md:bottom-[0] max-md:right-[0]">
                  <a className="relative">
                    <svg
                      viewBox="0 0 100 100"
                      width="100"
                      height="100"
                      className="fill-current h-auto origin-center w-full"
                    >
                      <defs>
                        <path
                          id="circle"
                          d=" M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                        ></path>
                      </defs>
                      <text>
                        <textPath
                          xlinkHref="#circle"
                          className="text-[10px] text-[#2c2c2c] tracking-[1.3px]"
                        >
                          Despre Mine ------ Despre Mine ------
                        </textPath>
                      </text>
                    </svg>
                  </a>
                </div>
                <div className="inner-item transition-all duration-[0.3s] ease-in-out h-full absolute top-[0] right-[-7px] flex flex-col justify-center z-[0] opacity-[0]">
                  <a
                    className="box-inner my-[20px] relative"
                    href="javascript:void(0)"
                  >
                    <img
                      src="shapes/facebook.jpeg"
                      alt="item-1"
                      className="w-[18px] h-[18px] relative z-[1] rounded-[0]"
                    />
                  </a>
                  <a
                    className="box-inner my-[20px] relative"
                    href="javascript:void(0)"
                  >
                    <img
                      src="shapes/tiktok.jpg"
                      alt="item-2"
                      className="white-mode w-[18px] h-[18px] relative z-[1] rounded-full inline"
                    />
                  </a>
                  <a
                    className="box-inner my-[20px] relative"
                    href="javascript:void(0)"
                  >
                    <img
                      src="shapes/instagram.png"
                      alt="item-3"
                      className="w-[18px] h-[18px] relative z-[1]"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="max-[1199px]:order-3 min-[1200px]:w-[33.33%] min-[992px]:w-[50%] w-full px-[12px]">
              <div
                className="bix-skill h-full flex flex-col justify-center max-[1199px]:h-auto"
                id="progress"
              >
                <div
                  className="bix-about-contact h-full flex flex-col justify-center"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="400"
                >
                  <p className="mb-[16px] montserrat-400 text-[14px] text-[#495461] font-normal leading-[26px] tracking-[0.03rem]">
                    În timp, am simțit nevoia să dau mai departe ceea ce am
                    învățat. Am urmat două cursuri de formatori, iar la unul
                    dintre ele{" "}
                    <b>am fost admisă în prima grupă din 300 de participanți</b>
                    , o experiență care mi-a dat încredere și m-a motivat să
                    cresc și mai mult.
                  </p>
                  <p className="mb-[16px] montserrat-400 text-[14px] text-[#495461] font-normal leading-[26px] tracking-[0.03rem]">
                    Pentru mine, fiecare curs este începutul unei relații. Sunt
                    acolo pentru cursantele mele{" "}
                    <b>nu doar în timpul trainingului</b>, ci și după, pentru că
                    îmi pasă cu adevărat de evoluția lor. Îmi doresc să le văd
                    reușind, simțindu-se încrezătoare și mândre de ceea ce fac.
                    Am creat și <b>propriul brand de ustensile</b>, gândit cu
                    grijă la fiecare detaliu, tocmai pentru ca fiecare tehnician
                    să aibă la îndemână instrumente de calitate, care să le
                    sprijine în drumul lor spre excelență. Tot ce fac, fac cu
                    sufletul. Pentru că știu că atunci când pui iubire în
                    mâinile tale, creezi mai mult decât manichiuri – creezi
                    povești, încredere și visuri împlinite.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
