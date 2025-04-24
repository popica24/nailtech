import Footer from "../../layout/components/Footer";

const Product = () => {
  return (
    <section className="montserrat-400 section-hero mt-[100px] relative pb-[50px] pt-[100px] max-[991px]:h-auto max-[991px]:mt-[95px] max-[991px]:pb-[40px] max-[991px]:pt-[80px] max-[767px]:pb-[35px] max-[767px]:pt-[70px]">
      <div className="bg-white">
        <div className="pt-6">
          <nav aria-label="Breadcrumb">
            <ol
              role="list"
              className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
            >
              <li>
                <div className="flex items-center">
                  <a
                    href="#"
                    className="mr-2 text-sm font-medium text-gray-900"
                  >
                    Produse
                  </a>
                  <svg
                    width="16"
                    height="20"
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <a
                    href="#"
                    className="mr-2 text-sm font-medium text-gray-900"
                  >
                    Subcategorie
                  </a>
                  <svg
                    width="16"
                    height="20"
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>

              <li className="text-sm">
                <a
                  href="#"
                  aria-current="page"
                  className="font-medium text-gray-500 hover:text-gray-600"
                >
                  Produs 1
                </a>
              </li>
            </ol>
          </nav>

          <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
            <img
              src="Products/Produs1/Cover.jpg"
              alt="Two each of gray, white, and black shirts laying flat."
              className="hidden size-full rounded-lg object-cover lg:block"
            />
            <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
              <img
                src="https://cdn11.bigcommerce.com/s-rq0h3cljca/images/stencil/1280x1280/products/118/454/Pusher-104__65073.1635976703.jpg?c=2"
                alt="Model wearing plain black basic tee."
                className="aspect-3/2 w-full rounded-lg object-cover"
              />
              <img
                src="https://uk.manucurist.com/cdn/shop/files/poussecuticules-retouches.jpg?v=1722430756&width=3840"
                alt="Model wearing plain gray basic tee."
                className="aspect-3/2 w-full rounded-lg object-cover"
              />
            </div>
            <img
              src="Products/Produs1/Cover1.jpg"
              alt="Model wearing plain white basic tee."
              className="aspect-4/5 size-full object-cover sm:rounded-lg lg:aspect-auto"
            />
          </div>

          <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto_auto_1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl montserrat-400">
                Titlu Produs 1
              </h1>
            </div>

            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl tracking-tight text-gray-900">60.00 RON</p>

              <button
                type="submit"
                className="mt-10 cursor-pointer flex w-full items-center justify-center rounded-md border border-transparent bg-[var(--crem-cald)] px-8 py-3 text-base font-medium text-white hover:[var(--crem-cald)] focus:ring-2 focus:ring-[var(--nude-roz)] focus:ring-offset-2 focus:outline-hidden"
              >
                Adauga in cos
              </button>
            </div>

            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pr-8 lg:pb-16">
              <div>
                <h3 className="sr-only">Description</h3>

                <div className="space-y-6">
                  <p className="text-base text-gray-900">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ducimus magni ratione suscipit voluptatibus nesciunt
                    accusantium ullam, eum facere, quidem quos sit error
                    molestias consectetur. Voluptate aliquid corrupti eius
                    quisquam optio!
                  </p>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-sm font-medium text-gray-900">
                  Subtitlu produs 1
                </h3>

                <div className="mt-4">
                  <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                    <li className="text-gray-400">
                      <span className="text-gray-600">
                        Lorem ipsum dolor sit amet.
                      </span>
                    </li>
                    <li className="text-gray-400">
                      <span className="text-gray-600">
                        Lorem ipsum dolor sit amet.
                      </span>
                    </li>
                    <li className="text-gray-400">
                      <span className="text-gray-600">
                        Lorem ipsum dolor sit amet.
                      </span>
                    </li>
                    <li className="text-gray-400">
                      <span className="text-gray-600">
                        Lorem ipsum dolor sit amet.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">
                  Detalii Produs 1
                </h2>

                <div className="mt-4 space-y-6">
                  <p className="text-sm text-gray-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dignissimos, doloremque provident sint nostrum molestias
                    maiores laudantium doloribus optio ipsa alias eos similique!
                    Animi perspiciatis officia laboriosam eos delectus facilis
                    nihil.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Product;
