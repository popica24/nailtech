const Hero = () => {
  return (
    <section className="section-hero h-[800px] mt-[100px] relative pb-[50px] pt-[100px] max-[991px]:h-auto max-[991px]:mt-[95px] max-[991px]:pb-[40px] max-[991px]:pt-[80px] max-[767px]:pb-[35px] max-[767px]:pt-[70px]">
      <div className="first-name top-[0] leading-none absolute montserrat-400 text-[200px] font-black text-[#fff] opacity-[0.04] max-[991px]:text-[130px] max-[991px]:top-[30px] max-[575px]:text-[100px] max-[460px]:text-[70px]">
        Scintei
      </div>
      <div className="last-name bottom-[0] right-[0] absolute montserrat-400 text-[200px] font-black text-[#fff] opacity-[0.04] max-[991px]:bottom-[250px] max-[991px]:text-[130px] max-[575px]:text-[100px] max-[460px]:text-[70px]">
        Florina
      </div>
      <div className="flex h-full flex-wrap justify-between relative items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
        <div className="flex flex-wrap w-full">
          <div className="min-[992px]:w-[50%] w-full px-[12px]">
            <div
              className="bix-hero-img relative "
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-delay="600"
            >
              <div className="hero-inner-img relative">
                <img
                  src="hero.jpg"
                  alt="hero"
                  data-offset="30"
                  className="hero-parallax w-[calc(100%-300px)] mt-auto mx-auto mb-[50px] block max-[1399px]:w-[calc(100%-260px)] max-[1199px]:w-[calc(100%-215px)] max-[991px]:w-[calc(100%-400px)] max-[767px]:w-[calc(100%-250px)] max-[575px]:w-[210px]"
                />
              </div>
            </div>
          </div>
          <div className="min-[992px]:w-[50%] w-full px-[12px]">
            <div className="bix-hero-contact h-full flex flex-col justify-center relative max-[991px]:mt-[15px] max-[991px]:pb-[30px] max-[991px]:items-center max-[575px]:text-center">
              <h4
                className="mb-[8px] montserrat-400 tracking-[0.03rem] leading-[1.2] text-[35px] font-bold text-[var(--crem-cald)] max-[1399px]:text-[32px] max-[1199px]:text-[28px] max-[767px]:text-[24px] "
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-delay="600"
              >
                Nail Artist & Instructor
              </h4>
              <h1
                className="mb-[16px] montserrat-700 text-[78px] text-[#2c2c2c] font-bold relative tracking-[0.03rem] leading-[1.2] max-[1399px]:text-[70px] max-[1199px]:text-[52px] max-[767px]:text-[38px] "
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-delay="700"
              >
                Scintei Florina
              </h1>
              <p
                className="montserrat-400 text-[27px] font-semibold text-[#2c2c2c] leading-[26px] tracking-[0.03rem] max-[1399px]:text-[24px] max-[1199px]:text-[20px] max-[767px]:text-[18px] "
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-delay="800"
              >
                Peste
                <span className="ms-[5px] font-bold text-[var(--crem-cald)]">
                  300
                </span>{" "}
                de cursante fericite.
              </p>
              <div
                className="bix-buttons m-[-10px] pt-[50px] flex flex-wrap relative max-[991px]:pt-[20px] max-[575px]:justify-center "
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-delay="900"
              >
                <button
                  type="button"
                  className="bix-button m-[10px] cursor-pointer transition-all duration-[0.3s] ease-in-out py-[10px] px-[15px] montserrat-400 text-[14px] font-semibold leading-[1.2] bg-[#fff] text-[#2c2c2c] border-[1px] border-solid border-[#2c2c2c] rounded-[15px] hover:bg-[var(--roz-prafuit-pastelat)] hover:border-[var(--crem-cald)]"
                >
                  Inscrie-te si tu !
                </button>
                <button
                  type="button"
                  className="modal-trigger cursor-pointer bix-modal-toggle bix-button m-[10px] transition-all duration-[0.3s] ease-in-out py-[10px] px-[15px] montserrat-400 text-[14px] font-semibold leading-[1.2] bg-[#fff] text-[#2c2c2c] border-[1px] border-solid border-[#2c2c2c] rounded-[15px] hover:bg-[var(--roz-prafuit-pastelat)] hover:border-[var(--crem-cald)]"
                >
                  Vezi lucrari <i className="fa-solid fa-photo-film"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
