import axios from "axios";
import { useCart } from "../../CartContext";

const ShoppingCart = () => {
  const { closeCart, cart, removeFromCart, getTotal } = useCart();
  const handleToCheckout = async () => {
    const button = document.getElementById(
      "checkout-button"
    ) as HTMLButtonElement;
    const loader = document.getElementById(
      "checkout-loading"
    ) as HTMLDivElement;

    if (!button || !loader) return;

    try {
      button.classList.replace("block", "hidden");
      loader.classList.replace("hidden", "block");
      button.disabled = true;

      const cartData = cart.map((item) => ({
        id: item.id,
        quantity: item.quantity,
      }));

      const response = await axios.post(
        import.meta.env.VITE_STRIPE_URL,
        JSON.stringify(cartData),
        {
          headers: {
            "Content-Type": "text/plain;charset=utf-8",
          },
        }
      );

      const data = response.data;

      if (data.url) {
        window.location.href = data.url;
      } else if (data.error) {
        console.error("Checkout error:", data.error);
        alert("Checkout failed. Please try again.");
      }
    } catch (error) {
      button.disabled = false;
      button.classList.replace("hidden", "block");
      loader.classList.replace("block", "hidden");

      console.error("Network error:", error);
    }
  };

  return (
    <div
      className="relative z-40 montserrat-300"
      aria-labelledby="slide-over-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="fixed inset-0 bg-gray-500/75 transition-opacity"
        aria-hidden="true"
      ></div>

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <div className="pointer-events-auto w-screen max-w-md">
              <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                  <div className="flex items-start justify-between">
                    <h2
                      className="text-lg font-medium text-gray-900"
                      id="slide-over-title"
                    >
                      Cosul meu
                    </h2>
                    <div className="ml-3 flex h-7 items-center">
                      <button
                        onClick={closeCart}
                        type="button"
                        className="relative -m-2 p-2 text-gray-400 hover:text-gray-500 cursor-pointer"
                      >
                        <span className="absolute -inset-0.5"></span>
                        <span className="sr-only">Close panel</span>
                        <svg
                          className="size-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          aria-hidden="true"
                          data-slot="icon"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18 18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div className="mt-8">
                    <div className="flow-root">
                      <ul
                        role="list"
                        className="-my-6 divide-y divide-gray-200"
                      >
                        {cart.map((item) => (
                          <li className="flex py-6" key={item.id}>
                            <div className="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
                              <img
                                src={item.image}
                                alt={item.name}
                                className="size-full object-cover"
                              />
                            </div>

                            <div className="ml-4 flex flex-1 flex-col">
                              <div>
                                <div className="flex justify-between text-base font-medium text-gray-900">
                                  <p>{item.name}</p>
                                  <p>{item.price.toFixed(2)} RON</p>
                                </div>
                              </div>
                              <div className="flex flex-1 items-end justify-between text-sm">
                                <p className="text-gray-500">
                                  Cantitate: {item.quantity}
                                </p>

                                <div className="flex">
                                  <button
                                    onClick={() => removeFromCart(item.id)}
                                    type="button"
                                    className="font-medium text-[#A57865] uppercase cursor-pointer"
                                  >
                                    Sterge
                                  </button>
                                </div>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <p>Subtotal</p>
                    <p>{getTotal().toFixed(2)} RON</p>
                  </div>
                  <p className="mt-0.5 text-sm text-gray-500">
                    Costul inainte de livrare
                  </p>
                  <div className="mt-6">
                    <button
                      id="checkout-button"
                      onClick={handleToCheckout}
                      className="block w-full flex text-center justify-center cursor-pointer transition-all duration-[0.3s] ease-in-out py-[8px] px-[10px] montserrat-400 text-base font-semibold text-white rounded-[5px] bg-[#A57865]"
                    >
                      Spre plata
                    </button>
                    <div
                      id="checkout-loading"
                      className="hidden w-full flex text-center justify-center cursor-pointer transition-all duration-[0.3s] ease-in-out py-[8px] px-[10px] montserrat-400 text-base font-semibold text-white rounded-[5px] bg-[#A57865]"
                    >
                      <div className="loading-spinner"></div>
                    </div>
                  </div>
                  <span className="w-full text-center flex items-center justify-center mt-4">
                    Plata securizata prin{" "}
                    <a
                      href=""
                      className="text-[#5433ff] ms-1 font-bold underline"
                    >
                      Stripe
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
