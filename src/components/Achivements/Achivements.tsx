const Achivements = () => {
  return (
    <section
      className="section-achievement relative py-[50px] max-lg:py-[40px] max-md:py-[35px]"
      id="bixexperience"
    >
      <div className="flex flex-wrap justify-between relative items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
        <div className="flex flex-wrap w-full">
          <div className="w-full px-[12px]">
            <div
              className="bix-banner mb-[30px] flex justify-center text-center max-lg:mb-[25px] max-md:mb-[20px]"
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-delay="400"
            >
              <h4 className="montserrat-400 text-[36px] font-bold text-[#111a24] tracking-[0.03rem] leading-[1.2] max-lg:text-[32px] max-md:text-[28px] max-md:text-[24px]">
                <span className="text-[var(--crem-cald)]">Rezultatele</span>{" "}
                mele
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
          <div className="w-full px-[12px]">
            <div className="bix-activity-tabs flex flex-col items-center">
              <ul
                className="nav nav-tabs inline-flex flex-wrap justify-center items-center bg-[#fff] border-[1px] border-solid border-[#111a24] rounded-[25px] mb-[30px]"
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-delay="400"
                id="default-styled-tab"
                data-tabs-toggle="#default-styled-tab-content"
                data-tabs-active-classes="text-purple-600 hover:text-purple-600 dark:text-purple-500 dark:hover:text-purple-500 border-purple-600 dark:border-purple-500"
                data-tabs-inactive-classes="dark:border-transparent text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300"
                role="tablist"
              >
                <li className="nav-item bix-tab active m-[10px] montserrat-300">
                  <a
                    href="javascript:void(0)"
                    className="py-[5px] px-[15px] rounded-[15px] capitalize font-medium text-[16px] block"
                    data-id="tab1"
                  >
                    Cursuri
                  </a>
                </li>
                <li className="nav-item bix-tab m-[10px] montserrat-300">
                  <a
                    href="javascript:void(0)"
                    className="py-[5px] px-[15px] rounded-[15px] capitalize font-medium text-[16px] block"
                    data-id="tab2"
                  >
                    Experienta
                  </a>
                </li>
              </ul>
              <div className="tab-content">
                <div
                  className="tab tab-active tab-activity-pane"
                  data-id="tab1"
                >
                  <div className="flex flex-wrap w-full">
                    <div className="w-full">
                      <div className="bix-achievement relative flex w-full max-md:flex-col">
                        <div className="bix-achievement-inner bix-border-r w-[50%] pr-[30px] border-r-[0.5px] border-solid border-[#111a24] max-md:w-full max-md:flex max-md:flex-col max-md:border-[0] max-md:p-[0]">
                          <div
                            className="bix-achievement-box left border-[1px] border-solid border-[#111a24] p-[30px] rounded-[30px] bg-[#f7f5fb] relative max-md:mt-[12px] max-md:mb-[24px]"
                            data-aos="fade-up"
                            data-aos-duration="2000"
                            data-aos-delay="400"
                          >
                            <div className="achievement-year w-[100px] h-full absolute top-[0] flex items-center justify-center rotate-[270deg] z-10 right-[-82px] max-md:block max-md:rotate-0 max-md:top-[-13px] max-md:left-[45px]">
                              <span className="bg-[#111a24] text-[#fff] border-[1px] border-solid border-[#111a24] rounded-[10px] leading-[1] py-[3px] px-[10px] montserrat-300 font-normal tracking-[0.02rem] text-[14px]">
                                2022-24
                              </span>
                            </div>
                            <h4 className="mb-[8px] montserrat-300 text-[18px] font-semibold leading-[26px] text-[#111a24] tracking-[0.03rem] max-md:text-[16px] max-md:leading-[25px]">
                              Titlu Curs Urmat 1{" "}
                              <span className="text-[15px] text-[#555]">
                                - Mentiune 1
                              </span>
                            </h4>
                            <p className="overflow-hidden text-ellipsis flex m-[0] montserrat-300 text-[14px] text-[#495461] font-normal leading-[26px] tracking-[0.03rem]">
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Rem, eos maxime, recusandae saepe magnam
                              molestiae velit commodi eligendi sequi dolore,
                              cumque tenetur reprehenderit? Quibusdam, animi.
                            </p>
                          </div>
                          <div
                            className="bix-achievement-box left border-[1px] border-solid border-[#111a24] mt-[150px] p-[30px] rounded-[30px] bg-[#f7f5fb] relative max-md:mt-[12px] max-md:mb-[24px] aos-init"
                            data-aos="fade-up"
                            data-aos-duration="2000"
                            data-aos-delay="600"
                          >
                            <div className="achievement-year w-[100px] h-full absolute top-[0] flex items-center justify-center rotate-[270deg] z-10 right-[-82px] max-md:block max-md:rotate-0 max-md:top-[-13px] max-md:left-[45px]">
                              <span className="bg-[#111a24] text-[#fff] border-[1px] border-solid border-[#111a24] rounded-[10px] leading-[1] py-[3px] px-[10px] montserrat-300 font-normal tracking-[0.02rem] text-[14px]">
                                2017-20
                              </span>
                            </div>
                            <h4 className="mb-[8px] montserrat-300 text-[18px] font-semibold leading-[26px] text-[#111a24] tracking-[0.03rem] max-md:text-[16px] max-md:leading-[25px]">
                              Titlu Curs Urmat 3{" "}
                              <span className="text-[15px] text-[#555]">
                                - Mentiune 3
                              </span>
                            </h4>
                            <p className="overflow-hidden text-ellipsis flex m-[0] montserrat-300 text-[14px] text-[#495461] font-normal leading-[26px] tracking-[0.03rem]">
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Rem, eos maxime, recusandae saepe magnam
                              molestiae velit commodi eligendi sequi dolore,
                              cumque tenetur reprehenderit? Quibusdam, animi.
                            </p>
                          </div>
                        </div>
                        <div className="bix-achievement-inner bix-border-l w-[50%] pl-[30px] border-l-[0.5px] border-solid border-[#111a24] max-md:w-full max-md:flex max-md:flex-col max-md:border-[0] max-md:p-[0] max-md:mb-[-24px]">
                          <div
                            className="bix-achievement-box right border-[1px] border-solid border-[#111a24] mt-[150px] p-[30px] rounded-[30px] bg-[#f7f5fb] relative max-md:mt-[12px] max-md:mb-[24px]"
                            data-aos="fade-up"
                            data-aos-duration="2000"
                            data-aos-delay="500"
                          >
                            <div className="achievement-year w-[100px] h-full absolute top-[0] flex items-center justify-center rotate-[270deg] z-[1] left-[-82px] max-md:block max-md:rotate-0 max-md:top-[-13px] max-md:left-[45px]">
                              <span className="bg-[#111a24] text-[#fff] border-[1px] border-solid border-[#111a24] rounded-[10px] leading-[1] py-[3px] px-[10px] montserrat-300 font-normal tracking-[0.02rem] text-[14px]">
                                2020-22
                              </span>
                            </div>
                            <h4 className="mb-[8px] montserrat-300 text-[18px] font-semibold leading-[26px] text-[#111a24] tracking-[0.03rem] max-md:text-[16px] max-md:leading-[25px]">
                              Titlu Curs Urmat 2{" "}
                              <span className="text-[15px] text-[#555]">
                                - Mentiune 2
                              </span>
                            </h4>
                            <p className="overflow-hidden text-ellipsis flex m-[0] montserrat-300 text-[14px] text-[#495461] font-normal leading-[26px] tracking-[0.03rem]">
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Rem, eos maxime, recusandae saepe magnam
                              molestiae velit commodi eligendi sequi dolore,
                              cumque tenetur reprehenderit? Quibusdam, animi.
                            </p>
                          </div>
                          <div
                            className="bix-achievement-box right border-[1px] border-solid border-[#111a24] mt-[150px] p-[30px] rounded-[30px] bg-[#f7f5fb] relative max-md:mt-[12px] max-md:mb-[24px] aos-init"
                            data-aos="fade-up"
                            data-aos-duration="2000"
                            data-aos-delay="700"
                          >
                            <div className="achievement-year w-[100px] h-full absolute top-0 flex items-center justify-center rotate-[270deg] z-10 -left-[82px] max-md:block max-md:rotate-0 max-md:top-[-13px] max-md:left-[45px]">
                              <span className="bg-[#111a24] text-white border border-solid border-[#111a24] rounded-[10px] leading-[1] py-[3px] px-[10px] montserrat-300 font-normal tracking-[0.02rem] text-[14px]">
                                2015-17
                              </span>
                            </div>
                            <h4 className="mb-[8px] montserrat-300 text-[18px] font-semibold leading-[26px] text-[#111a24] tracking-[0.03rem] max-md:text-[16px] max-md:leading-[25px]">
                              Titlu Curs Urmat 4{" "}
                              <span className="text-[15px] text-[#555]">
                                - Mentiune 4
                              </span>
                            </h4>
                            <p className="overflow-hidden text-ellipsis flex m-[0] montserrat-300 text-[14px] text-[#495461] font-normal leading-[26px] tracking-[0.03rem]">
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Rem, eos maxime, recusandae saepe magnam
                              molestiae velit commodi eligendi sequi dolore,
                              cumque tenetur reprehenderit? Quibusdam, animi.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab tab-activity-pane" data-id="tab2">
                  <div className="flex flex-wrap w-full">
                    <div className="w-full">
                      <div className="bix-achievement relative flex w-full max-md:flex-col">
                        <div className="bix-achievement-inner bix-border-r w-[50%] pr-[30px] border-r-[0.5px] border-solid border-[#111a24] max-md:w-full max-md:flex max-md:flex-col max-md:border-[0] max-md:p-[0]">
                          <div
                            className="bix-achievement-box left border-[1px] border-solid border-[#111a24] mt-[150px] p-[30px] rounded-[30px] bg-[#f7f5fb] relative max-md:mt-[12px] max-md:mb-[24px]"
                            data-aos="fade-up"
                            data-aos-duration="2000"
                            data-aos-delay="400"
                          >
                            <div className="achievement-year w-[100px] h-full absolute top-[0] flex items-center justify-center rotate-[270deg] z-[1] right-[-82px] max-md:block max-md:rotate-0 max-md:top-[-13px] max-md:left-[45px]">
                              <span className="bg-[#111a24] text-[#fff] border-[1px] border-solid border-[#111a24] rounded-[10px] leading-[1] py-[3px] px-[10px] montserrat-300 font-normal tracking-[0.02rem] text-[14px]">
                                2022-24
                              </span>
                            </div>
                            <h4 className="mb-[8px] montserrat-300 text-[18px] font-semibold leading-[26px] text-[#111a24] tracking-[0.03rem] max-md:text-[16px] max-md:leading-[25px]">
                              Titlu Rezultat 2{" "}
                              <span className="text-[15px] text-[#555]">
                                - Mentiune 1
                              </span>
                            </h4>
                            <p className="overflow-hidden text-ellipsis flex m-[0] montserrat-300 text-[14px] text-[#495461] font-normal leading-[26px] tracking-[0.03rem]">
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Rem, eos maxime, recusandae saepe magnam
                              molestiae velit commodi eligendi sequi dolore,
                              cumque tenetur reprehenderit? Quibusdam, animi.
                            </p>
                          </div>
                          <div
                            className="bix-achievement-box left border-[1px] border-solid border-[#111a24] mt-[150px] p-[30px] rounded-[30px] bg-[#f7f5fb] relative max-md:mt-[12px] max-md:mb-[24px]"
                            data-aos="fade-up"
                            data-aos-duration="2000"
                            data-aos-delay="600"
                          >
                            <div className="achievement-year w-[100px] h-full absolute top-[0] flex items-center justify-center rotate-[270deg] z-[1] right-[-82px] max-md:block max-md:rotate-0 max-md:top-[-13px] max-md:left-[45px]">
                              <span className="bg-[#111a24] text-[#fff] border-[1px] border-solid border-[#111a24] rounded-[10px] leading-[1] py-[3px] px-[10px] montserrat-300 font-normal tracking-[0.02rem] text-[14px]">
                                2017-20
                              </span>
                            </div>
                            <h4 className="mb-[8px] montserrat-300 text-[18px] font-semibold leading-[26px] text-[#111a24] tracking-[0.03rem] max-md:text-[16px] max-md:leading-[25px]">
                              Titlu Rezultat 4{" "}
                              <span className="text-[15px] text-[#555]">
                                - Mentiune 1
                              </span>
                            </h4>
                            <p className="overflow-hidden text-ellipsis flex m-[0] montserrat-300 text-[14px] text-[#495461] font-normal leading-[26px] tracking-[0.03rem]">
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Rem, eos maxime, recusandae saepe magnam
                              molestiae velit commodi eligendi sequi dolore,
                              cumque tenetur reprehenderit? Quibusdam, animi.
                            </p>
                          </div>
                        </div>
                        <div className="bix-achievement-inner bix-border-l w-[50%] pl-[30px] border-l-[0.5px] border-solid border-[#111a24] max-md:w-full max-md:flex max-md:flex-col max-md:border-[0] max-md:p-[0] max-md:mb-[-24px]">
                          <div
                            className="bix-achievement-box right border-[1px] border-solid border-[#111a24] p-[30px] rounded-[30px] bg-[#f7f5fb] relative max-md:mt-[12px] max-md:mb-[24px]"
                            data-aos="fade-up"
                            data-aos-duration="2000"
                            data-aos-delay="500"
                          >
                            <div className="achievement-year w-[100px] h-full absolute top-[0] flex items-center justify-center rotate-[270deg] z-[1] left-[-82px] max-md:block max-md:rotate-0 max-md:top-[-13px] max-md:left-[45px]">
                              <span className="bg-[#111a24] text-[#fff] border-[1px] border-solid border-[#111a24] rounded-[10px] leading-[1] py-[3px] px-[10px] montserrat-300 font-normal tracking-[0.02rem] text-[14px]">
                                2020-22
                              </span>
                            </div>
                            <h4 className="mb-[8px] montserrat-300 text-[18px] font-semibold leading-[26px] text-[#111a24] tracking-[0.03rem] max-md:text-[16px] max-md:leading-[25px]">
                              Titlu Rezultat 1{" "}
                              <span className="text-[15px] text-[#555]">
                                - Mentiune 1
                              </span>
                            </h4>
                            <p className="overflow-hidden text-ellipsis flex m-[0] montserrat-300 text-[14px] text-[#495461] font-normal leading-[26px] tracking-[0.03rem]">
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Rem, eos maxime, recusandae saepe magnam
                              molestiae velit commodi eligendi sequi dolore,
                              cumque tenetur reprehenderit? Quibusdam, animi.
                            </p>
                          </div>
                          <div
                            className="bix-achievement-box right border-[1px] border-solid border-[#111a24] mt-[150px] p-[30px] rounded-[30px] bg-[#f7f5fb] relative max-md:mt-[12px] max-md:mb-[24px]"
                            data-aos="fade-up"
                            data-aos-duration="2000"
                            data-aos-delay="700"
                          >
                            <div className="achievement-year w-[100px] h-full absolute top-[0] flex items-center justify-center rotate-[270deg] z-[1] left-[-82px] max-md:block max-md:rotate-0 max-md:top-[-13px] max-md:left-[45px]">
                              <span className="bg-[#111a24] text-[#fff] border-[1px] border-solid border-[#111a24] rounded-[10px] leading-[1] py-[3px] px-[10px] montserrat-300 font-normal tracking-[0.02rem] text-[14px]">
                                2015-17
                              </span>
                            </div>
                            <h4 className="mb-[8px] montserrat-300 text-[18px] font-semibold leading-[26px] text-[#111a24] tracking-[0.03rem] max-md:text-[16px] max-md:leading-[25px]">
                              Titlu Rezultat 3{" "}
                              <span className="text-[15px] text-[#555]">
                                - Mentiune 1
                              </span>
                            </h4>
                            <p className="overflow-hidden text-ellipsis flex m-[0] montserrat-300 text-[14px] text-[#495461] font-normal leading-[26px] tracking-[0.03rem]">
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Rem, eos maxime, recusandae saepe magnam
                              molestiae velit commodi eligendi sequi dolore,
                              cumque tenetur reprehenderit? Quibusdam, animi.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
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

export default Achivements;
