import Footer from "../../layout/components/Footer";

const SlimCourse = () => {
  return (
    <>
      <div className="container flex flex-wrap justify-between relative items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
        <div className="mt-30 relative w-full h-[450px] md:h-[320px]" id="home">
          <div className="absolute inset-0 opacity-40">
            <img
              src="/Courses/baza2.jpg"
              alt="Background Image"
              className="object-cover object-center w-full h-full rounded-xl shadow-lg"
            />
          </div>
          <div className="absolute inset-9 flex flex-col md:flex-row items-center justify-between">
            <div className=" mb-4 md:mb-0">
              <h1 className="text-grey-700 font-medium text-4xl md:text-5xl leading-tight mb-2 montserrat-500">
                Cursul de Slim
              </h1>
              <p className="font-regular text-xl mb-8 mt-4 montserrat-400 md:w-1/2">
                Nu este doar un nou trend – este o tehnică esențială, care pune
                accent pe eleganță, structură corectă și execuție impecabilă.
                Cursul SLIM te învață cum să construiești unghii subțiri,
                durabile și perfect echilibrate
              </p>
              <a
                href="/"
                className="w-full cursor-pointer transition-all duration-[0.3s] ease-in-out py-[8px] px-[10px] montserrat-400 text-base font-semibold text-white rounded-[5px] bg-[#A57865]"
              >
                Inscrie-te si tu !
              </a>
            </div>
          </div>
        </div>

        <section className="py-10 montserrat-400" id="services">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl text-[#C8A875] mb-8 pb-8 text-center montserrat-300">
              Ce vei invata ?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src="/Courses/baza1.jpg"
                  alt="wheat flour grinding"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 text-start">
                  <h3 className="text-xl font-medium text-gray-800 mb-2">
                    Arhitectura Perfectă a Unghiei SLIM
                  </h3>
                  <p className="text-gray-700 text-base">
                    Înveți cum să construiești o unghie subțire, dar extrem de
                    rezistentă, respectând proporțiile ideale. Ne concentrăm pe
                    poziționarea corectă a apexului, formă și tensiunea
                    materialului – pentru un rezultat estetic și funcțional.
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src="/Courses/baza1.jpg"
                  alt="Coffee"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 text-start">
                  <h3 className="text-xl font-medium text-gray-800 mb-2">
                    Șablonare Avansată pentru Forme Slim
                  </h3>
                  <p className="text-gray-700 text-base">
                    Descoperi cum să adaptezi șablonul în funcție de forma și
                    lungimea unghiei naturale, cu accent pe aliniere și tăieturi
                    personalizate. Obții unghii simetrice, bine definite și
                    alungite vizual – fără compromisuri.
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src="/Courses/baza1.jpg"
                  alt="Coffee"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 text-start">
                  <h3 className="text-xl font-medium text-gray-800 mb-2">
                    Perfecționarea Pilirii – Linie de Zâmbet și Finisare
                  </h3>
                  <p className="text-gray-700 text-base">
                    Tehnici precise de pilire manuală și cu freza pentru a
                    obține unghii slim perfecte: muchii fine, laterale curate,
                    cuticulă impecabilă. Plus, execuția liniei de zâmbet și
                    finisajul final care face diferența între <b>„ok”</b> și
                    <b> „wow”</b>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="text-gray-700 body-font mt-10 w-full mx-auto">
          <div className="flex justify-center text-3xl text-[#C8A875] text-center montserrat-300">
            De ce cursurile mele ?
          </div>
          <div className="flex items-center flex-wrap text-center justify-center w-full mx-auto">
            <div className="p-4 md:w-1/4 sm:w-1/2">
              <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                <div className="flex justify-center">
                  <svg
                    className="w-32 mb-3"
                    fill="#C8A875"
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 496 496"
                    xmlSpace="preserve"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <g>
                        <g>
                          <path d="M496,286.216c0-28.064-15.984-52.624-40-64.48V96c0-52.936-43.064-96-96-96c-52.936,0-96,43.064-96,96v9.456 c-10.12-1.728-20.64-1.912-31.216-0.272c-0.568,0.088-1.128,0.24-1.696,0.336C231.64,102.384,232,99.216,232,96V64 c0-12.656-9.84-23.056-22.28-23.936C193.544,15.232,165.712,0,136,0C87.48,0,48,39.48,48,88v8c0,18.28,9.128,35.352,24,45.768 v0.456c0,20.16,9.392,38.144,24,49.88v17.128L60.168,215.2C25.304,221,0,250.872,0,286.216V352h141.504 C114.264,362.696,96,388.848,96,418.912V496h304v-77.088c0-30.064-18.264-56.216-45.504-66.912H496V286.216z M280,96 c0-44.112,35.888-80,80-80s80,35.888,80,80v120.08c-1.384-0.312-2.752-0.648-4.168-0.888L400,209.224v-17.128 c14.608-11.744,24-29.72,24-49.88l-0.056-50.688L412.6,96.752C412.44,96.832,396.456,104,360,104s-52.44-7.168-52.536-7.208 L296,91.296v25.656c-5.08-2.936-10.456-5.344-16-7.312V96z M331.344,152.496c-5.2-9.128-11.784-17.12-19.344-23.896v-13.64 c9.512,2.392,25.2,5.04,48,5.04s38.488-2.648,48-5.04v27.256c0,26.472-21.528,48-48,48c-2.68,0-5.344-0.296-8-0.752V177.68 C352,165.24,343.112,154.848,331.344,152.496z M345.04,241.824C349.488,231.192,352,219.736,352,208v-2.36 c2.656,0.336,5.328,0.584,8,0.584c8.488,0,16.584-1.696,24-4.712v13.2l-24,72L345.04,241.824z M345.696,294.392l-21.912-21.912 c3.944-3.664,7.44-7.704,10.616-11.984L345.696,294.392z M397.432,225.008l12.64,2.104l5.24,26.256l-41.008,41.016 L397.432,225.008z M235.216,120.992c34.488-5.344,68.192,11.832,83.968,42.648l2.24,4.36h4.888c5.344,0,9.688,4.344,9.688,9.68 V208c0,16.512-5.824,32.448-16.008,45.136l-0.04-49.08l-11.056,4.568C308.72,208.704,290.552,216,248,216 s-60.72-7.296-60.848-7.352L176,203.872v30.696c-6.472-13.448-9.184-28.576-7.48-43.808 C172.44,155.688,200.488,126.352,235.216,120.992z M158.632,234.528c1.808,4.672,3.904,9.232,6.432,13.584l-14.112-8.472 L158.632,234.528z M136.28,230.2L112,212v-10.496c7.416,3.016,15.512,4.712,24,4.712c5.536,0,10.96-0.792,16.248-2.2 c0.216,4.864,0.736,9.688,1.672,14.424L136.28,230.2z M168.904,269.064l7.84,4.704c2.36,17.296,10.864,32.616,23.256,43.744V336 h-32.936l-6.76-54.04L168.904,269.064z M206.024,352.672l27.992,22.392l-23.592,14.16l-21.704-32.56L206.024,352.672z M216,340.152V328.4c9.656,4.816,20.496,7.6,32,7.6c11.504,0,22.344-2.776,32-7.6v11.752l-32,25.6L216,340.152z M289.976,352.664 l17.304,3.992l-21.704,32.56l-23.592-14.16L289.976,352.664z M248,320c-30.872,0-56-25.128-56-56v-37.328 c10.456,2.44,28.616,5.328,56,5.328c27.384,0,45.544-2.888,56-5.328V264C304,294.872,278.872,320,248,320z M72,91.296v28.584 c-5.088-6.808-8-15.16-8-23.88v-8c0-39.704,32.296-72,72-72c25.552,0,49.424,13.8,62.288,36.008L200.6,56h7.4c4.416,0,8,3.584,8,8 v32c0,5.016-1.008,9.904-2.88,14.608c-4.552,1.8-8.936,3.952-13.136,6.416l-0.032-25.488l-11.344,5.224 C188.44,96.832,172.456,104,136,104s-52.44-7.168-52.536-7.208L72,91.296z M88,142.216V114.96c9.512,2.392,25.2,5.04,48,5.04 s38.488-2.648,48-5.04v13.72c-16.6,14.984-28.04,35.616-31.08,58.368c-5.44,2.072-11.104,3.176-16.92,3.176 C109.528,190.216,88,168.688,88,142.216z M101.936,224.448l19.744,14.808l-22.936,13.768l-15.296-25.488L101.936,224.448z M104.936,336H64v-24H48v24H16v-49.784c0-27.496,19.68-50.728,46.792-55.24l3.696-0.616l26.768,44.616l9.84-5.904l8.592,12.888 L104.936,336z M121.056,336l7.24-57.96l-11.472-17.208L136,249.328l19.168,11.496l-11.472,17.208l7.24,57.968H121.056z M216.84,480H160v-40h-16v40h-32v-61.088c0-26.232,17.848-48.672,43.408-54.56l16.648-3.84l33.52,50.272l9.52-5.712l8.632,12.944 L216.84,480z M263.064,480h-30.12l7.336-66.016l-11.44-17.16L248,385.328l19.168,11.496l-11.44,17.16L263.064,480z M384,418.912 V480h-32v-40h-16v40h-56.84l-6.888-61.984l8.632-12.944l9.52,5.712l33.52-50.272l16.648,3.84 C366.152,370.24,384,392.68,384,418.912z M480,336h-32v-24h-16v24H296v-18.488c9.032-8.112,16-18.448,20.04-30.168L360,331.312 l72.688-72.68l-5.744-28.704l6.264,1.048c27.112,4.52,46.792,27.752,46.792,55.24V336z"></path>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
                <h2 className="title-font font-regular text-2xl text-gray-900">
                  Ghidaj & Sfaturi
                </h2>
              </div>
            </div>

            <div className="p-4 md:w-1/4 sm:w-1/2">
              <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                <div className="flex justify-center">
                  <img
                    src="https://image2.jdomni.in/banner/13062021/3E/57/E8/1D6E23DD7E12571705CAC761E7_1623567977295.png?output-format=webp"
                    className="w-32 mb-3"
                  />
                </div>
                <h2 className="title-font font-regular text-2xl text-gray-900">
                  Preturi Rezonabile
                </h2>
              </div>
            </div>

            <div className="p-4 md:w-1/4 sm:w-1/2">
              <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                <div className="flex justify-center">
                  <img
                    src="https://image3.jdomni.in/banner/13062021/16/7E/7E/5A9920439E52EF309F27B43EEB_1623568010437.png?output-format=webp"
                    className="w-32 mb-3"
                  />
                </div>
                <h2 className="title-font font-regular text-2xl text-gray-900">
                  Rezultate Rapide
                </h2>
              </div>
            </div>

            <div className="p-4 md:w-1/4 sm:w-1/2">
              <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                <div className="flex justify-center">
                  <img
                    src="https://image3.jdomni.in/banner/13062021/EB/99/EE/8B46027500E987A5142ECC1CE1_1623567959360.png?output-format=webp"
                    className="w-32 mb-3"
                  />
                </div>
                <h2 className="title-font font-regular text-2xl text-gray-900">
                  Expertiza in Industrie
                </h2>
              </div>
            </div>
          </div>
        </section>

        <section className="text-gray-700 body-font w-full" id="gallery">
          <div className="flex justify-center text-3xl montserrat-300 text-center py-10 text-[#C8A875]">
            De la cursuri
          </div>

          <div className="grid grid-cols-1 place-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
            <div className="group relative">
              <img
                src="/Courses/baza1.jpg"
                alt="Image 1"
                className="w-full h-80 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
              />
            </div>
            <div className="group relative">
              <img
                src="/Courses/baza1.jpg"
                alt="Image 1"
                className="w-full h-80 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
              />
            </div>
            <div className="group relative">
              <img
                src="/Courses/baza1.jpg"
                alt="Image 1"
                className="w-full h-80 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
              />
            </div>
            <div className="group relative">
              <img
                src="/Courses/baza1.jpg"
                alt="Image 1"
                className="w-full h-80 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
              />
            </div>
          </div>
        </section>

        <section className="bg-gray-100 w-full mx-auto">
          <div className="py-8">
            <div className="mx-auto text-center">
              <h2
                className="text-3xl font-extrabold text-[#C8A875] montserrat-400"
                id="contactUs"
              >
                Viziteaza-ne !
              </h2>
              <p className="mt-3 text-lg text-gray-500">Si ramai surprins !</p>
            </div>
            <div className="mt-8 lg:mt-20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <div className="max-w-full mx-auto rounded-lg overflow-hidden">
                    <div className="border-t border-gray-200 px-6 py-4">
                      <h3 className="text-lg text-gray-900">Contact</h3>
                      <p className="mt-1 text-gray-600">
                        <a href="tel:+40749095803">Telefon: +40 749 095 803</a>
                      </p>
                      <a className="flex m-1" href="tel:+919823331842">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-start h-10 w-30 rounded-md bg-[#C8A875] text-white p-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              className="w-6 h-6 me-4"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                              />
                            </svg>
                            Suna !
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="px-6 py-4 montserrat-300">
                      <h3 className="text-lg font-medium text-gray-900">
                        Adresa
                      </h3>
                      <p className="mt-1 text-gray-600">
                        Strada 13 Decembrie Bloc 14
                      </p>
                    </div>
                    <div className="border-t border-gray-200 px-6 py-4 montserrat-300">
                      <h3 className="text-lg font-medium text-gray-900">
                        Program
                      </h3>
                      <p className="mt-1 text-gray-600">
                        Luni - Sambata : 10:00 - 18:00
                      </p>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg overflow-hidden order-none sm:order-first max-w-[95vw] md:max-w-none mx-auto">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1438.504264830933!2d25.327129872991247!3d45.56333114750024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sro!4v1748261746215!5m2!1sen!2sro"
                    width="600"
                    height="450"
                    style={{ border: "0" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default SlimCourse;
