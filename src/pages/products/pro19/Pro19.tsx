import { toast } from "react-toastify";
import { useCart } from "../../../CartContext";
import { items } from "../../../data";
import Footer from "../../../layout/components/Footer";

const Pro19 = () => {
  const { addToCart } = useCart();
  const handleAddToCart = () => {
    toast.success("Forfecuta PRO19 a fost adaugata in cos !");
    const id = 3;
    const item = items.find((item) => item.id === id);
    if (item) addToCart(item.id, item.name, item.price);
  };
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
                  <span className="mr-2 text-sm font-medium text-gray-900">
                    Produse
                  </span>
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
                  <span className="mr-2 text-sm font-medium text-gray-900">
                    Forfecute
                  </span>
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
                <span
                  aria-current="page"
                  className="font-medium text-gray-500 hover:text-gray-600"
                >
                  Pro 19
                </span>
              </li>
            </ol>
          </nav>

          <div className="mx-auto px-4 mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
            <img
              src="/Products/Pro19/1.jpg"
              alt="Capat plat pusher"
              className="aspect-square object-cover rounded-lg md:max-w-[380px]"
            />

            <img
              src="/Products/Pro19/2.jpg"
              alt="Capat ascutit pusher"
              className="aspect-square object-cover rounded-lg md:max-w-[380px]"
            />
          </div>

          <div
            className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto_auto_1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl montserrat-400">
                Forfecuță pentru cuticule PRO19 by Florina Scîntei – Precizie,
                Finețe, Control
              </h1>
            </div>

            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h2 className="sr-only">Pro19 information</h2>
              <p className="text-3xl tracking-tight text-gray-900">
                109.00 RON
              </p>

              <button
                onClick={handleAddToCart}
                type="submit"
                className="mt-10 cursor-pointer flex w-full items-center justify-center rounded-md border border-transparent bg-[#A57865] px-8 py-3 text-base font-medium text-white hover:[var(--crem-cald)] focus:ring-2 focus:ring-[var(--nude-roz)] focus:ring-offset-2 focus:outline-hidden"
              >
                Adauga in cos
              </button>
            </div>

            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pr-8 lg:pb-16">
              <div>
                <h3 className="sr-only">Description</h3>

                <div className="space-y-6">
                  <p className="text-base text-gray-900">
                    Forfecuța pentru cuticule PRO19 este rezultatul unei
                    combinații perfecte între design ergonomic și
                    funcționalitate profesională. Lama subțire, cu lungimea de
                    20 mm, este ascuțită manual pentru a asigura o tăiere fină
                    și precisă. Curbura lamei permite o manevrare ușoară și
                    eficientă, adaptată atât nevoilor tehnicienilor
                    profesioniști, cât și celor care aleg îngrijirea personală
                    acasă. <br /> Fabricată din oțel inoxidabil japonez de
                    înaltă calitate, forfecuța este rezistentă la sterilizare și
                    la soluțiile de dezinfectare, păstrându-și performanța în
                    timp fără a necesita reascuțire frecventă. Mânerul ergonomic
                    este gândit pentru a reduce efortul în timpul utilizării și
                    pentru a oferi un control deplin în fiecare mișcare – un
                    detaliu ce transformă rutina într-o experiență plăcută.
                    <br />
                    <b>Instrucțiuni de întreținere:</b> <br /> ✔ După utilizare,
                    păstrează forfecuța într-un loc uscat și curat. <br />✔ Se
                    recomandă acoperirea cu capacul de protecție inclus. <br />
                    ✘ Evită contactul cu acizi sau substanțe corozive. <br />
                    ✘ Nu curăța cu obiecte metalice sau abrazive. <br /> ✘ Evită
                    impactul cu suprafețe dure. <br />
                    Un instrument creat pentru cei care caută precizie, confort
                    și durabilitate – în fiecare tăietură.
                  </p>
                  <br />
                  <p>
                    Recomandare importantă: După fiecare proces de sterilizare,
                    se recomandă lubrifierea îmbinării la șurub cu orice tip de
                    ulei pentru menținerea funcționării optime și prelungirea
                    duratei de viață a instrumentului.
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

export default Pro19;
