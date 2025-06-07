import { toast } from "react-toastify";
import { useCart } from "../../../CartContext";
import { items } from "../../../data";
import Footer from "../../../layout/components/Footer";

const Pro5 = () => {
  const { addToCart } = useCart();
  const handleAddToCart = () => {
    const id = 2;
    toast.success("Pusherul PRO5 a fost adaugata in cos !");
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
                    Pushere
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
                  Pro 5
                </span>
              </li>
            </ol>
          </nav>

          <div className="mx-auto px-4 mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
            <img
              src="/Products/Pro5/1.jpg"
              alt="Capat plat pusher"
              className="aspect-square object-cover rounded-lg md:max-w-[380px]"
            />

            <img
              src="/Products/Pro5/2.jpg"
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
                Pusher Pro 5 by Florina Scîntei – Instrumentul versatil pentru
                prepararea perfectă a cuticulei
              </h1>
            </div>

            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h2 className="sr-only">Pro5 information</h2>
              <p className="text-3xl tracking-tight text-gray-900">39.00 RON</p>

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
                    Pusher-ul Pro 5 combină funcționalitatea cu precizia
                    profesională într-un singur instrument. Două capete
                    specializate oferă soluții complete: capătul teșit metalic
                    (tip bețișor de portocal) pentru ridicarea cuticulei lipite
                    și capătul rotunjit curbat pentru îndepărtarea delicată fără
                    zgârieturi. Confecționat din oțel inoxidabil superior cu
                    ascuțire manuală profesională, garantează durabilitate și
                    rezistență la sterilizare. Designul ergonomic asigură
                    control precis și confort în utilizare. Ideal pentru
                    manichiură și pedichiură profesională – instrumentul perfect
                    pentru prepararea impecabilă a cuticulei, indiferent de
                    nivelul de experiență al utilizatorului.
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

export default Pro5;
