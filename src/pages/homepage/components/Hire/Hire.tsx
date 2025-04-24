const Hire = () => {
  return (
    <section className="section-hire my-[50px] max-[991px]:my-[40px] max-[767px]:my-[35px] py-[120px] bg-[url(&#39;assets/img/hire/bg.png&#39;)] bg-cover bg-center text-center relative z-[1] max-[767px]:py-[100px] max-[575px]:py-[80px]">
      <div className="flex flex-wrap justify-between items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
        <div className="flex flex-wrap w-full">
          <div className="w-full px-[12px]">
            <div className="bix-hire-banner">
              <div className="overlay w-full h-full absolute top-[0] bottom-[0] right-[0] left-[0] bg-[#000000cc] z-[-1]"></div>
              <div className="bix-hire-contact m-auto max-w-[700px]">
                <h2
                  className="mb-[16px] montserrat-300 text-[35px] max-[1199px]:text-[32px] max-[767px]:text-[28px] max-[575px]:text-[24px] text-[#fff] font-bold tracking-[0.03rem] leading-[1.2]"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  data-aos-delay="200"
                >
                  Buna <span>Idee</span>
                </h2>
                <h4
                  className="mb-[16px] montserrat-300 text-[20px] max-[575px]:text-[18px] font-semibold text-[#fff] tracking-[0.03rem] leading-[1.2]"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  data-aos-delay="400"
                >
                  De ce nu luam legatura ?
                </h4>
                <p
                  className="montserrat-300 text-[15px] font-light text-[#fff] leading-[26px] tracking-[0.03rem] mt-1"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  data-aos-delay="600"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                  perferendis laudantium ipsa fugiat minima debitis. Magni
                  veritatis tenetur perferendis delectus?
                </p>
                <div
                  className="inner-circle-items mt-[40px] flex justify-center items-center"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  data-aos-delay="800"
                >
                  <div className="bix-rounded-circle relative h-[150px] w-[150px] bg-[#fff] rounded-[50%] max-[575px]:w-[120px] max-[575px]:h-[120px]">
                    <a
                      href="javascript:void(0)"
                      className="relative modal-trigger"
                      data-bs-toggle="modal"
                      data-bs-target="#bid"
                    >
                      <svg
                        viewBox="0 0 100 100"
                        width="100"
                        height="100"
                        className="h-full w-full"
                      >
                        <defs>
                          <path
                            id="circle2"
                            d=" M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                          ></path>
                        </defs>
                        <text>
                          <textPath
                            xlinkHref="#circle2"
                            className="text-[#111a24] font-semibold text-[10px] tracking-[1.3px] montserrat-300"
                          >
                            Contacteaza-ma ---- Contacteaza-ma ----
                          </textPath>
                        </text>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hire;
