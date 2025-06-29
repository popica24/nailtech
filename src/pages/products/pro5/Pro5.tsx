import { useCart } from "../../../CartContext";
import { items } from "../../../data";
import Footer from "../../../layout/components/Footer";
import Swal from "sweetalert2";

const Pro5 = () => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    Swal.fire({
      title: "Adaugat in cos!",
      text: "Pusherul Pro5 a fost adaugat in cos !",
      icon: "success",
      confirmButtonText: "OK",
    }).then(() => {
      const id = 2;
      const item = items.find((item) => item.id === id);
      if (item) addToCart(item.id, item.name, item.price);
    });
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
                Pusher Pro 5 – Precizie și adaptabilitate în lucru
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
                    Pusher-ul Pro 5 este un instrument profesional, ideal pentru
                    pregătirea cuticulei în manichiură și pedichiură. <br />
                    Dispune de două capete de lucru special concepute:
                    <br />{" "}
                    <b>
                      1. Capăt teșit și înclinat, sub formă de bețișor de
                      portocal metalic
                    </b>{" "}
                    – perfect pentru ridicarea și împingerea cuticulei lipite de
                    placa unghială.
                    <br /> 2. <b>Capăt rotunjit, ușor curbat</b> – se potrivește
                    perfect pe suprafața unghiei și permite îndepărtarea
                    delicată a cuticulei, fără a zgâria placa unghială.
                    <br /> Realizat din oțel inoxidabil de înaltă calitate,
                    pusher-ul este rezistent la coroziune, sterilizare și
                    soluții de dezinfectare. Ascuțirea manuală oferă o precizie
                    excelentă și o experiență de lucru profesională, indiferent
                    de nivelul de experiență al utilizatorului.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pro5;
