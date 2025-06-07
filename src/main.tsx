import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./utils/router";
import "./index.css";
import { CartProvider } from "./CartContext";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ToastContainer />
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </StrictMode>
);
