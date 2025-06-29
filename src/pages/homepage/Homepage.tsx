import { useEffect } from "react";
import AboutMe from "./components/AboutMe";
import Achivements from "./components/Achivements";
import Courses from "./components/Courses";
import Hero from "./components/Hero";
import Hire from "./components/Hire";
import Products from "./components/Products";
import Testimonials from "./components/Testimonials";
import Swal from "sweetalert2";

const Homepage = () => {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const paymentStatus = params.get("payment");

    if (!paymentStatus) return;

    if (paymentStatus === "success") {
      Swal.fire({
        title: "",
        html: `
          <div class="text-center p-6 montserrat-400">
            <!-- Success Icon -->
            <div class="mx-auto mb-6 w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
              <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            
            <!-- Title -->
            <h2 class="text-2xl font-bold text-gray-800 mb-4">
              🎉 Felicitări!
            </h2>
            
            <p class="text-lg text-gray-700 font-medium mb-6">
              Locul tău la curs a fost rezervat cu succes!
            </p>
            
            <!-- Instructions Card -->
            <div class="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6 rounded-r-lg">
              <div class="flex items-start">
                <div class="flex-shrink-0">
                  <svg class="w-5 h-5 text-blue-400 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <div class="ml-3 text-left">
                  <p class="text-sm font-medium text-blue-800 mb-2">
                    Următorii pași:
                  </p>
                  <ul class="text-sm text-blue-700 space-y-1">
                    <li>• Contactează-ne pe WhatsApp</li>
                    <li>• Atașează dovada plății în mesaj</li>
                    <li>• Primești detaliile complete despre curs</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <!-- WhatsApp Button Preview -->
            <div class="bg-green-100 rounded-xl p-4 mb-4">
              <div class="flex items-center justify-center space-x-2 text-green-800">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                <span class="font-semibold">Click pe "Continuă" pentru WhatsApp</span>
              </div>
            </div>
            
            <p class="text-sm text-gray-500 italic">
              Mult spor la curs! ✨
            </p>
          </div>
        `,
        showConfirmButton: true,
        confirmButtonText: "📱 Continuă pe WhatsApp",
        confirmButtonColor: "#10b981",
        allowOutsideClick: false,
        allowEscapeKey: false,
        customClass: {
          popup: "rounded-2xl",
          confirmButton: "px-6 py-3 rounded-xl font-semibold",
        },
      }).then((result) => {
        if (result.isConfirmed)
          window.location.href =
            "https://wa.me/+40749095803?text=Salut!%20Am%20rezervat%20un%20loc%20la%20curs%20și%20doresc%20să%20trimit%20dovada%20plății.";
      });
    } else if (paymentStatus === "canceled") {
      Swal.fire({
        title: "",
        html: `
          <div class="text-center p-6 montserrat-400">
            <!-- Cancel Icon -->
            <div class="mx-auto mb-6 w-20 h-20 bg-gradient-to-br from-red-400 to-red-600 rounded-full flex items-center justify-center">
              <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </div>
            
            <!-- Title -->
            <h2 class="text-2xl font-bold text-gray-800 mb-4">
              Plată anulată
            </h2>
            
            <p class="text-lg text-gray-700 mb-6">
              Nu te îngrijora! Poți încerca din nou oricând.<br>
              <span class="font-medium text-blue-600">Locul tău la curs te așteaptă!</span>
            </p>
            
            <!-- Help Card -->
            <div class="bg-orange-50 border-l-4 border-orange-400 p-4 mb-6 rounded-r-lg">
              <div class="flex items-start">
                <div class="flex-shrink-0">
                  <svg class="w-5 h-5 text-orange-400 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <div class="ml-3 text-left">
                  <p class="text-sm font-medium text-orange-800 mb-1">
                    💡 Ai nevoie de ajutor?
                  </p>
                  <p class="text-sm text-orange-700">
                    Contactează-ne pentru asistență cu plata
                  </p>
                </div>
              </div>
            </div>
            
            <!-- Action buttons preview -->
            <div class="flex flex-col sm:flex-row gap-3 justify-center">
              <div class="bg-green-100 px-4 py-2 rounded-lg">
                <span class="text-green-800 text-sm font-medium">📱 Contactează-ne</span>
              </div>
              <div class="bg-blue-100 px-4 py-2 rounded-lg">
                <span class="text-blue-800 text-sm font-medium">🔄 Încearcă din nou</span>
              </div>
            </div>
          </div>
        `,
        showConfirmButton: true,
        confirmButtonText: "📱 Contactează-ne",
        confirmButtonColor: "#10b981",
        customClass: {
          popup: "rounded-2xl",
          confirmButton: "px-6 py-3 rounded-xl font-semibold",
          cancelButton: "px-6 py-3 rounded-xl font-semibold",
        },
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href =
            "https://wa.me/+40749095803?text=Salut!%20Am%20avut%20probleme%20cu%20plata%20pentru%20curs.%20Mă%20puteți%20ajuta?";
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          // Redirect back to course selection or payment page
          window.location.href = "/courses"; // Adjust to your course page
        }
      });
    }
  }, []);
  return (
    <>
      <Hero />
      <AboutMe />
      <Achivements />
      <Courses />
      <Products />
      <Testimonials />
      <Hire />
    </>
  );
};

export default Homepage;
